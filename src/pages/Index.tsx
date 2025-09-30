import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Builder
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#constructor" className="text-sm font-medium hover:text-primary transition-colors">
              Конструктор
            </a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
              Примеры
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <Button size="sm">Войти</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge className="mx-auto" variant="secondary">
            <Icon name="Zap" size={14} className="mr-1" />
            Генерация за секунды
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Создай сайт через{' '}
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              описание
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Искусственный интеллект превратит твою идею в готовый сайт. Без кода. Без дизайнера. Просто опиши что нужно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Icon name="Rocket" size={18} />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Play" size={18} />
              Смотреть демо
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-secondary" />
              <span>Без кредитки</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-secondary" />
              <span>3 проекта бесплатно</span>
            </div>
          </div>
        </div>
      </section>

      <section id="constructor" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">AI Конструктор</h2>
            <p className="text-lg text-muted-foreground">
              Опиши проект — получи готовый сайт
            </p>
          </div>
          <Card className="border-2 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wand2" className="text-primary" size={24} />
                Генератор сайтов
              </CardTitle>
              <CardDescription>
                Введи описание проекта: тематику, разделы, стиль. AI сгенерирует полноценный сайт за минуту.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Например: Создай лендинг для кофейни в минималистичном стиле. Разделы: о нас, меню, контакты. Используй теплые тона и фото кофе."
                className="min-h-[150px] resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={!description || isGenerating}
                  className="flex-1 gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin" />
                      Генерация...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={18} />
                      Сгенерировать сайт
                    </>
                  )}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="Shuffle" size={18} />
                  Случайный пример
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="examples" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Примеры работ</h2>
            <p className="text-lg text-muted-foreground">
              Сайты созданные нашими пользователями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Лендинг для ресторана', desc: 'Минималистичный дизайн', icon: 'Utensils' },
              { title: 'Портфолио фотографа', desc: 'Галерея с анимациями', icon: 'Camera' },
              { title: 'Магазин одежды', desc: 'Каталог с корзиной', icon: 'ShoppingBag' },
              { title: 'Блог о путешествиях', desc: 'Адаптивная сетка', icon: 'Plane' },
              { title: 'SaaS продукт', desc: 'Тарифы и демо', icon: 'Laptop' },
              { title: 'Агентство маркетинга', desc: 'Кейсы и команда', icon: 'TrendingUp' },
            ].map((example, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon name={example.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <CardDescription>{example.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full gap-2 group/btn">
                    Посмотреть
                    <Icon name="ArrowRight" size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Тарифы</h2>
            <p className="text-lg text-muted-foreground">
              Начни бесплатно, масштабируйся по мере роста
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Старт',
                price: 'Бесплатно',
                features: ['3 проекта', 'Базовые шаблоны', 'Поддержка в чате', 'Хостинг на поддомене'],
              },
              {
                name: 'Про',
                price: '990₽/мес',
                features: ['Безлимит проектов', 'Премиум шаблоны', 'Приоритетная поддержка', 'Свой домен', 'AI помощник'],
                popular: true,
              },
              {
                name: 'Команда',
                price: '4990₽/мес',
                features: ['Всё из Про', 'До 10 пользователей', 'API доступ', 'White-label', 'Персональный менеджер'],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Популярный</Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground pt-2">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.price === 'Бесплатно' ? 'Начать' : 'Попробовать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Всё что нужно знать о платформе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как быстро генерируется сайт?',
                a: 'В среднем генерация занимает 30-60 секунд в зависимости от сложности проекта. Простой лендинг создается за 30 секунд.',
              },
              {
                q: 'Могу ли я редактировать код?',
                a: 'Да! После генерации ты получаешь полный доступ к коду. Можешь редактировать через встроенный редактор или скачать проект.',
              },
              {
                q: 'Какие технологии используются?',
                a: 'Мы используем современный стек: React, TypeScript, Tailwind CSS. Все сайты адаптивные и оптимизированные.',
              },
              {
                q: 'Можно ли использовать свой домен?',
                a: 'Да, в тарифах Про и Команда доступно подключение собственного домена. Настройка занимает несколько минут.',
              },
              {
                q: 'Есть ли поддержка?',
                a: 'Да! Чат-поддержка доступна всем пользователям. В тарифе Про — приоритетная поддержка с ответом до 1 часа.',
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <span className="text-lg font-bold">AI Builder</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Создавай сайты через описание. Быстро, просто, без кода.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Конструктор</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Чат</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 AI Builder. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;