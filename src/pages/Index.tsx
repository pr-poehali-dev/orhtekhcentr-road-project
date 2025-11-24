import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Road",
      title: "Дорожное строительство",
      description: "Проектирование и строительство федеральных, региональных и внутригородских дорог"
    },
    {
      icon: "Grid3x3",
      title: "Тротуарная плитка",
      description: "Укладка тротуарной плитки любой сложности для коммерческих и муниципальных объектов"
    },
    {
      icon: "Layers",
      title: "Установка бордюров",
      description: "Монтаж дорожных и тротуарных бордюров с соблюдением всех технических требований"
    },
    {
      icon: "Snowflake",
      title: "Очистка дорог",
      description: "Профессиональная очистка дорог от снега и наледи с использованием современной техники"
    }
  ];

  const projects = [
    {
      image: "https://cdn.poehali.dev/projects/f992f33a-2cef-4033-8c2d-40cbf34d4fb1/files/ffd36d46-a15b-4404-bad2-cd00ed32a4c2.jpg",
      title: "Реконструкция федеральной трассы М-7",
      description: "Капитальный ремонт 15 км дорожного полотна"
    },
    {
      image: "https://cdn.poehali.dev/projects/f992f33a-2cef-4033-8c2d-40cbf34d4fb1/files/066b2df5-03f9-4e82-908d-ddd395b78700.jpg",
      title: "Благоустройство городской площади",
      description: "Укладка 8000 м² тротуарной плитки и бордюров"
    },
    {
      image: "https://cdn.poehali.dev/projects/f992f33a-2cef-4033-8c2d-40cbf34d4fb1/files/a6bd253c-e41c-4d00-8c66-591b8a9ec71f.jpg",
      title: "Обустройство промзоны",
      description: "Строительство внутренних дорог и парковок"
    }
  ];

  const equipment = [
    { name: "Асфальтоукладчики", count: "12 единиц" },
    { name: "Дорожные катки", count: "8 единиц" },
    { name: "Экскаваторы", count: "15 единиц" },
    { name: "Снегоуборочная техника", count: "20 единиц" }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} />
            <span className="text-2xl font-bold">ОРЬТЕХЦЕНТР</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-secondary transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-secondary transition-colors">Проекты</a>
            <a href="#equipment" className="hover:text-secondary transition-colors">Оборудование</a>
            <a href="#about" className="hover:text-secondary transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" size="lg">
            Связаться с нами
          </Button>
        </nav>
      </header>

      <section className="relative bg-primary text-primary-foreground py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/20"></div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Строим дороги<br />для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
            Профессиональное дорожное строительство и благоустройство для юридических лиц
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Наши проекты
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Получить консультацию
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div>
              <div className="text-4xl font-bold text-secondary">15+</div>
              <div className="text-primary-foreground/80">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary">200+</div>
              <div className="text-primary-foreground/80">Завершённых проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-primary-foreground/80">Единиц техники</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр работ для корпоративных клиентов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Масштабные проекты федерального и регионального значения
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наше оборудование</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Современная техника ведущих мировых производителей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Truck" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-secondary">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">О компании</h2>
          <div className="space-y-6 text-lg">
            <p>
              <strong>ОРЬТЕХЦЕНТР</strong> — ведущая компания в сфере дорожного строительства и благоустройства, работающая на рынке более 15 лет. Мы специализируемся на выполнении крупных корпоративных проектов для юридических лиц.
            </p>
            <p>
              Наша компания обладает всеми необходимыми лицензиями, сертификатами и допусками для выполнения строительных работ любой сложности. Собственный парк современной техники позволяет нам гарантировать высокое качество и соблюдение сроков.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <Icon name="Shield" size={32} className="mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Надёжность</h3>
                <p className="text-sm">Все работы застрахованы и сертифицированы</p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <Icon name="Clock" size={32} className="mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Сроки</h3>
                <p className="text-sm">Гарантируем выполнение в установленные сроки</p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <Icon name="Award" size={32} className="mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Качество</h3>
                <p className="text-sm">Соответствие ГОСТ и строительным нормам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-secondary mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-secondary mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@ortehcentr.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-secondary mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-secondary mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Название компании" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Контактное лицо" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Описание проекта" 
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none resize-none"
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full" variant="secondary">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Building2" size={24} />
            <span className="text-xl font-bold">ОРЬТЕХЦЕНТР</span>
          </div>
          <p className="text-primary-foreground/80 mb-2">
            © 2024 ОРЬТЕХЦЕНТР. Все права защищены.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Профессиональное дорожное строительство для корпоративных клиентов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
