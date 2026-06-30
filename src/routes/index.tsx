import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneCall, Search, CircleDollarSign, FileText, Car, ChevronsDown, Star } from "lucide-react";
import { useState } from "react"; 
import emailjs from "@emailjs/browser"; // 1. Импортируем EmailJS
import fon from "@/assets/fon.jpg";
import otziv1 from "@/assets/otziv1.jpg";
import otziv2 from "@/assets/otziv2.jpg";
import otziv3 from "@/assets/otziv3.jpg";
import otziv4 from "@/assets/otziv4.jpg";
import otziv5 from "@/assets/otziv5.jpg";
import max from "@/assets/max.png";
import hyundaiCreta from "@/assets/HyundaiCreta.jpg";
import sprinterClassic from "@/assets/Mercedes-BenzSprinterClassic.jpg";
import peugeot308 from "@/assets/Peugeot308.jpg";
import renaultLogan from "@/assets/RenaultLogan.jpg";
import toyotaCamry from "@/assets/ToyotaCamry.jpg";
import toyotaCamry2 from "@/assets/ToyotaCamry2.jpg";
import toyotaCrown from "@/assets/ToyotaCrown.jpg";
import toyotaPrado from "@/assets/ToyotaLandCruiserPrado.jpg";
import vwPassat from "@/assets/VolkswagenPassat.jpg";
import vwTiguan from "@/assets/VolkswagenTiguan.jpg";
import geely from "@/assets/FordFocus.jpg";
import polo from "@/assets/polo.jpg";
import audi from "@/assets/AudiA6.jpg";
import fordFocus from "@/assets/geely.jpg";

// 2. ОБЪЯВЛЕНИЕ РОУТА


const cars = [
  { 
    img: toyotaCamry, 
    title: "Toyota Camry", 
    year: 2013, 
    specs: "2.5 AT, 85 т.км, идеальное состояние, 1 владелец", 
    price: "1 910 000 ₽" 
  },
  { 
    img: hyundaiCreta, 
    title: "Hyundai Creta", 
    year: 2020, 
    specs: "2.0 AT, 4WD, 52 т.км, отличное состояние", 
    price: "2 050 000 ₽" 
  },
  { 
    img: vwTiguan, 
    title: "Volkswagen Tiguan", 
    year: 2020, 
    specs: "1.4 TSI AT, 4WD, 95 т.км, на ходу, окрасы, следы кузовного ремонта", 
    price: "2 150 000 ₽" 
  },
  { 
    img: toyotaCrown, 
    title: "Toyota Crown", 
    year: 2018, 
    specs: "2.5 AT гибрид, 4WD, 140 т.км, правый руль, на ходу, косметический ремонт", 
    price: "2 600 000 ₽" 
  },
  { 
    img: toyotaPrado, 
    title: "Toyota Land Cruiser Prado", 
    year: 2007, 
    specs: "4.0 AT, 4WD, 180 т.км, рамный внедорожник, без ДТП, второй владелец, отличное состояние", 
    price: "2 250 000 ₽" 
  },
  { 
    img: fordFocus, 
    title: "Geely Coolray", 
    year: 2022, 
    specs: "1.5 AMT, 43 т.км, один владелец, отличное состояние, без ДТП", 
    price: "1 575 000 ₽" 
  },
  { 
    img: vwPassat, 
    title: "Volkswagen Passat", 
    year: 2010, 
    specs: "1.8 TSI DSG, 235 т.км, сделан капитальный ремонт двигателя, ухоженный салон, присутствуют сколы по кузову, следы небольшого ДТП", 
    price: "680 000 ₽" 
  },
  { 
    img: peugeot308, 
    title: "Peugeot 308", 
    year: 2012, 
    specs: "1.6 AT, 130 т.км, хорошее техническое состояние, требуется косметический ремонт", 
    price: "630 000 ₽" 
  },
  { 
    img: renaultLogan, 
    title: "Renault Logan", 
    year: 2020, 
    specs: "1.6 AT, 44 т.км, автомобиль в залоге у банка, отличное состояние", 
    price: "1 250 000 ₽" 
  },
  { 
    img: sprinterClassic, 
    title: "Mercedes-Benz Sprinter Classic", 
    year: 2017, 
    specs: "2.2 дизель MT, 237 т.км, собственник юридическое лицо, хорошее состояние, грузопассажирский цельнометаллический фургон", 
    price: "1 800 000 ₽" 
  },
  { 
    img: toyotaCamry2, 
    title: "Toyota Camry", 
    year: 2008, 
    specs: "2.4 AT, 178 т.км, после ДТП, не на ходу, максимальная комплектация", 
    price: "600 000 ₽" 
  },
  { 
    img: polo, 
    title: "Volkswagen Polo", 
    year: 2017, 
    specs: "2.2 дизель MT, 237 т.км, собственник юридическое лицо, хорошее состояние, грузопассажирский цельнометаллический фургон", 
    price: "1 800 000 ₽" 
  },{ 
    img: audi, 
    title: "Audi A6", 
    year: 2013, 
    specs: "2.0 CVT, 145 т.км, требуется ремонт КПП, на ходу, повреждения по кузову", 
    price: "1 100 000 ₽" 
  },{ 
    img: geely, 
    title: "Ford Focus", 
    year: 2013, 
    specs: "1.6 AMT, 155 т.км, два владельца, без ДТП, не на ходу, неисправность КПП", 
    price: "650 000 ₽" 
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

// КОМПОНЕНТ ЛОГОТИПА
function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
        <Car className="h-5 w-5" />
      </div>
      <span className="font-heading text-lg font-black tracking-tight uppercase">
        ТрейдИн<span className="text-primary">Авто</span>
      </span>
    </a>
  );
}

function Index() {
  const [phone, setPhone] = useState(""); 
  const [carModel, setCarModel] = useState(""); // Состояние для марки и модели
  const [carYear, setCarYear] = useState("");   // Состояние для года выпуска
  const [isSending, setIsSending] = useState(false); // Состояние отправки
  const [activeTab, setActiveTab] = useState<"all" | "excellent" | "budget" | "commercial">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCars = cars.filter((car) => {
    if (activeTab === "all") return true;
    if (activeTab === "commercial") return car.title.toLowerCase().includes("sprinter");
    
    const priceNum = parseInt(car.price.replace(/\s/g, ""), 10);
    if (activeTab === "budget") return priceNum < 1000000 && !car.title.toLowerCase().includes("sprinter");
    if (activeTab === "excellent") return car.year >= 2017 && !car.title.toLowerCase().includes("sprinter");
    
    return true;
  });

  // Функция отправки через EmailJS
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Дополнительная проверка перед отправкой (ровно 11 цифр)
    if (phone.replace(/\D/g, "").length !== 11) {
      alert("Номер телефона должен состоять ровно из 11 цифр!");
      return;
    }

    setIsSending(true);

    const templateParams = {
      car_model: carModel,
      car_year: carYear,
      phone: phone,
    };

    emailjs
      .send(
        "service_1f0rik7",     // Service ID
        "template_0xsn60e",    // Template ID
        templateParams,
        "7krMmgLWMid3DqKU1"    // Public Key
      )
      .then(
        (response) => {
          console.log("Успешно отправлено!", response.status, response.text);
          alert("Заявка успешно отправлена! Мы свяжемся с вами в течение 5 минут.");
          setCarModel("");
          setCarYear("");
          setPhone("");
        },
        (err) => {
          console.error("Ошибка при отправке:", err);
          alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Навигация */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 h-16">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#stages" className="hover:text-primary transition-colors">Этапы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#callback" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          
          {/* ИКОНКИ НА МОБИЛКЕ | НОМЕР + ИКОНКИ НА ПК */}
          <div className="flex items-center gap-3">
            {/* Телефон — только на десктопе */}
            <a 
              href="tel:+79221882530" 
              className="hidden md:block text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              +7 (922) 188-25-30
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/+79221882530"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2AABEE]/10 hover:bg-[#2AABEE]/20 text-[#2AABEE] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            {/* Мессенджер Макс */}
            <a
              href="https://max.app/call/+79221882530"
              target="_blank"
              rel="noopener noreferrer"
              title="Макс"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6B4EFF]/10 hover:bg-[#6B4EFF]/20 text-[#6B4EFF] transition-colors"
            >
              <img src={max} alt="Макс" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero-блок */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-0">
          <img src={fon} alt="Hero background" className="h-full w-full object-cover object-center opacity-70 filter brightness-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Выкуп авто в В Екатеринбурге и Свердловской области
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Выкупим ваш автомобиль <br />
            <span className="text-primary bg-clip-text">дороже конкурентов</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-xl text-zinc-300">
            Деньги сразу в день обращения. Оценка 0 ₽. Работаем круглосуточно, выкупаем авто в любом состоянии: кредитные, после ДТП, залоговые.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
              <a href="#callback">Оставить заявку</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10 text-white" asChild>
              <a href="#catalog">Смотреть выкупленные</a>
            </Button>
          </div>
        </div>

        {/* ВИДЖЕТ "ЛИСТАЙТЕ ВНИЗ" */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 object-bottom">
          <a 
            href="#catalog" 
            className="flex flex-col items-center text-xs tracking-widest text-zinc-400 hover:text-primary uppercase transition-colors duration-300 group"
          >
            <span className="mb-1 font-medium scale-90 opacity-80 group-hover:opacity-100 transition-opacity">
              Листайте вниз
            </span>
            <ChevronsDown className="h-5 w-5 animate-bounce text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="mx-auto max-w-7xl px-4 md:px-8 py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Выкупленные автомобили</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Посмотрите реальные примеры автомобилей, которые мы выкупили в последнее время. Честные цены и сроки.</p>
        </div>

        {/* Табы */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          <button onClick={() => setActiveTab("all")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Все авто</button>
          <button onClick={() => setActiveTab("excellent")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "excellent" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Свежие (от 2017)</button>
          <button onClick={() => setActiveTab("budget")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "budget" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Бюджетные (до 1 млн)</button>
          <button onClick={() => setActiveTab("commercial")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "commercial" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Коммерческие</button>
        </div>

        {/* Сетка машин */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car, index) => (
            <div key={index} className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-md">
              <div 
                className="relative aspect-video overflow-hidden bg-secondary cursor-zoom-in"
                onClick={() => setSelectedImage(car.img)}
              >
                <img src={car.img} alt={car.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full transition-opacity backdrop-blur-sm">
                    Увеличить
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg leading-snug">{car.title}</h3>
                    <p className="text-xs text-muted-foreground">{car.year} г.в.</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-bold text-primary">{car.price}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{car.specs}</p>
                <Button size="sm" variant="secondary" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors" asChild>
                  <a href="#callback">Хочу похожую цену</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Этапы выкупа */}
      <section id="stages" className="border-t border-border bg-secondary/5 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
              Простая схема работы
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">Как проходит выкуп</h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Всего 4 простых шага от первого контакта до получения денег за ваш автомобиль.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Шаг 1 */}
            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                  01
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Заявка</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Звонок, WhatsApp или удобная форма на нашем сайте. Мы на связи круглосуточно.
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Search className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                  02
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Осмотр</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Бесплатный выезд эксперта-оценщика в удобное для вас место и время.
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                  03
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Оценка и цена</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Быстрый анализ текущего рынка и формирование лучшей стоимости за авто.
              </p>
            </div>

            {/* Шаг 4 */}
            <div className="group bg-card border border-border p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-black text-primary/30 group-hover:text-primary/50 transition-colors">
                  04
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">Договор + деньги</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Оформляем официальные документы на месте, оплата наличными или моментальный перевод.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ФОТО */}
      <section id="reviews" className="border-t border-border bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">Отзывы</h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Реальные отзывы выкупленных автомобилей.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[otziv1, otziv2, otziv3, otziv4, otziv5].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-border cursor-zoom-in"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Отзыв ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="border-t border-border bg-secondary/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Почему выбирают ТрейдИнАвто</h2>
            <p className="text-muted-foreground">Мы занимаемся профессиональным выкупом автомобилей в Свердловской области более 10 лет. Наша главная задача — сделать сделку максимально быстрой, безопасной и выгодной для вас.</p>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="space-y-1">
                <h4 className="font-semibold text-primary">До 99% стоимости</h4>
                <p className="text-sm text-muted-foreground">Выплачиваем реальные деньги, приближенные к рынку.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-primary">За 1 час</h4>
                <p className="text-sm text-muted-foreground">От звонка до получения наличных или перевода.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-primary">Бесплатный выезд</h4>
                <p className="text-sm text-muted-foreground">Оценщик приедет в любую точку города бесплатно.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-primary">Юридическая чистота</h4>
                <p className="text-sm text-muted-foreground">Оформление договора купли-продажи по договору.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-heading text-2xl font-bold">Какие авто мы выкупаем?</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Целые и в отличном состоянии (дороже всех)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> После ДТП, битые, не на ходу (сами заберем на эвакуаторе)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> В залоге, кредите или под арестом (закроем долг сами)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Коммерческий транспорт, спецтехнику и минивэны</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="callback" className="mx-auto max-w-3xl px-4 py-20 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-bold">Узнайте стоимость за 5 минут</h2>
          <p className="text-muted-foreground">Заполните форму, и наш оценщик свяжется с вами с готовым предложением.</p>
        </div>
        <form 
          className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4 text-left" 
          onSubmit={handleFormSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Марка и модель</label>
              <Input 
                placeholder="Например: Toyota Camry" 
                required 
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Год выпуска</label>
              <Input 
                placeholder="Например: 2018" 
                required 
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Номер телефона</label>
            <Input 
              type="tel" 
              placeholder="79990000000" 
              value={phone}
              required 
              onChange={(e) => {
                // Оставляем только цифры
                const onlyNums = e.target.value.replace(/\D/g, "");
                // Ограничиваем длину строго в 11 символов
                if (onlyNums.length <= 11) {
                  setPhone(onlyNums);
                }
              }}
            />
            <span className="text-[11px] text-muted-foreground block mt-1">
              Введено цифр: {phone.length} из 11
            </span>
          </div>
          
          <Button type="submit" className="w-full h-12 text-base" disabled={isSending}>
            {isSending ? "Отправка..." : "Отправить заявку на оценку"}
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
        </form>
      </section>

      {/* Футер */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">Срочный выкуп автомобилей в Екатеринбурге за 25 минут.</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-semibold mb-2">Контакты</p>
            <a href="tel:+79221882530" className="block text-muted-foreground hover:text-primary">+7 (922) 188-25-30</a>
            <a href="mailto:auto.a11iance@yandex.ru" className="block text-muted-foreground hover:text-primary">auto.a11iance@yandex.ru</a>
            <p className="text-muted-foreground">Екатеринбург, ул. Малышева, 51</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-semibold mb-2">Режим работы</p>
            <p className="text-muted-foreground">Без выходных, 24/7</p>
            <p className="text-muted-foreground">Выезд оценщика — бесплатно</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ТрейдИнАвто. Все права защищены.
        </div>
      </footer>

      {/* Модальное окно просмотра изображений */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors text-sm font-medium"
            onClick={() => setSelectedImage(null)}
          >
            Закрыть ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Полноразмерное фото автомобиля" 
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ПЛАВАЮЩАЯ КНОПКА ЗВОНКА (СНИЗУ СПРАВА ПРИ СКРОЛЛЕ) */}
      <a
        href="tel:+79221882530"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 bg-blue-600 hover:bg-blue-700 animate-pulse"
        title="Позвонить нам"
      >
        <PhoneCall className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}