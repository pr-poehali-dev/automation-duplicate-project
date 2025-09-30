import json
from typing import Dict, Any
from pydantic import BaseModel, Field

class GenerateRequest(BaseModel):
    description: str = Field(..., min_length=10, max_length=2000)
    style: str = Field(default="modern")

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Generate website templates based on user description
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response with generated template data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    req = GenerateRequest(**body_data)
    
    templates = {
        'landing': {
            'name': 'Современный лендинг',
            'sections': ['Hero', 'Features', 'CTA', 'Footer'],
            'colors': ['#2563EB', '#10B981'],
            'preview_url': 'https://v3.fal.media/files/koala/VZb58nzUzvn2JP8DpmS6B_output.png'
        },
        'portfolio': {
            'name': 'Портфолио',
            'sections': ['About', 'Projects', 'Skills', 'Contact'],
            'colors': ['#8B5CF6', '#EC4899'],
            'preview_url': 'https://v3.fal.media/files/koala/VZb58nzUzvn2JP8DpmS6B_output.png'
        },
        'ecommerce': {
            'name': 'Интернет-магазин',
            'sections': ['Catalog', 'Cart', 'Checkout', 'About'],
            'colors': ['#F97316', '#EAB308'],
            'preview_url': 'https://v3.fal.media/files/koala/VZb58nzUzvn2JP8DpmS6B_output.png'
        }
    }
    
    desc_lower = req.description.lower()
    if any(word in desc_lower for word in ['магазин', 'shop', 'каталог', 'товар']):
        selected = templates['ecommerce']
    elif any(word in desc_lower for word in ['портфолио', 'portfolio', 'работы', 'проект']):
        selected = templates['portfolio']
    else:
        selected = templates['landing']
    
    result = {
        'template': selected,
        'estimated_time': 45,
        'components_count': len(selected['sections']),
        'status': 'ready',
        'request_id': context.request_id
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result, ensure_ascii=False)
    }