'use client'
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Типи даних для картки
type CardData = {
  imageSrc: string;
  title: string;
  description: string;
  types: string[];
  benefits: string[];
  buttonText: string;
  buttonLink: string;
};

type CardProps = {
  cardData: CardData;
};

const Card = ({ cardData }: CardProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:scale-103 transform transition-all duration-300 cursor-pointer  hover:text-white">
      {/* Зображення або іконка */}
      <div className="bg-rose-100 p-8 text-center">
        <Image
          src={cardData.imageSrc}
          alt={`${cardData.title} icon`}
          width={100}
          height={100}
        />
      </div>

      {/* Опис та переваги */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{cardData.title}</h3>
        <p className="text-gray-700 mb-4">{cardData.description}</p>

        <ul className="list-disc pl-5 text-gray-600 mb-4">
          {cardData.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>

        <h4 className="font-semibold text-gray-900 mb-2">Переваги роботи зі мною:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {cardData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>


    </div>
  );
};

// Приклад масиву даних для карток
const cardDataList = [
    {
      imageSrc: "/images/png/telegram-bot.png", // Шлях до зображення для Telegram
      title: "Створення Telegram ботів",
      description:
        "Розробляю Telegram боти для автоматизації процесів та покращення взаємодії з вашими користувачами.",
      types: [
        "Інформаційні боти",
        "Боти для онлайн-магазинів",
        "Чат-боти для підтримки клієнтів",
        "Автоматизація процесів",
        "Розважальні боти",
      ],
      benefits: [
        "Швидка та ефективна автоматизація завдань",
        "Інтуїтивно зрозумілий інтерфейс для користувачів",
        "Індивідуальний підхід до кожного проєкту",
        "Легка інтеграція з іншими системами",
        "Постійна підтримка та оновлення ботів",
      ],
      buttonText: "Дізнатись більше",
      buttonLink: "/telegram-bots", // посилання на сторінку з додатковою інформацією
    },
    {
      imageSrc: "/images/png/site_png.png", // Шлях до зображення для вебсайтів
      title: "Розробка сучасних вебсайтів",
      description:
        "Створюю інтуїтивно зрозумілі та адаптивні вебсайти, що підходять для вашого бізнесу.",
      types: [
        "Корпоративні сайти",
        "Інтернет-магазини",
        "Особисті блоги",
        "Портфоліо",
        "Landing Page",
      ],
      benefits: [
        "Адаптивний дизайн для всіх пристроїв",
        "Індивідуальний підхід до кожного проєкту",
        "Швидка розробка та підтримка після запуску",
        "Використання сучасних технологій та інструментів",
      ],
      buttonText: "Дізнатись більше",
      buttonLink: "/web-development", // посилання на сторінку з додатковою інформацією
    },
    {
      imageSrc: "/images/png/database.png", // Шлях до зображення для Баз даних
      title: "Розробка надійних баз даних",
      description:
        "Створюю надійні та масштабовані бази даних для зберігання вашої інформації.",
      types: [
        "Реляційні бази даних",
        "NoSQL бази даних",
        "Бази даних для великих даних",
        "Масштабовані та відмовостійкі рішення",
      ],
      benefits: [
        "Надійне та безпечне зберігання даних",
        "Швидкий доступ до великих обсягів інформації",
        "Масштабованість на великі навантаження",
        "Інтеграція з іншими системами",
      ],
      buttonText: "Дізнатись більше",
      buttonLink: "/database-development", // посилання на сторінку з додатковою інформацією
    },
    {
      imageSrc: "/images/png/mobile-application.png", // Шлях до зображення для мобільних додатків
      title: "Розробка мобільних додатків",
      description:
        "Розробка мобільних додатків для iOS та Android для покращення вашого бізнесу.",
      types: [
        "Мобільні додатки для бізнесу",
        "Інтерактивні мобільні додатки",
        "Мобільні рішення для онлайн-магазинів",
        "Гібридні додатки для iOS та Android",
      ],
      benefits: [
        "Інтуїтивно зрозумілий інтерфейс",
        "Підтримка на всіх платформах (iOS/Android)",
        "Висока продуктивність і оптимізація",
        "Інтеграція з іншими системами",
      ],
      buttonText: "Дізнатись більше",
      buttonLink: "/mobile-apps", // посилання на сторінку з додатковою інформацією
    },
    {
      imageSrc: "/images/png/automatization.png", // Шлях до зображення для автоматизації
      title: "Автоматизація бізнес-процесів",
      description:
        "Автоматизуйте свої бізнес-процеси для підвищення ефективності та зменшення витрат.",
      types: [
        "Автоматизація обробки замовлень",
        "Автоматизація взаємодії з клієнтами",
        "Інтеграція систем для автоматизації процесів",
        "Автоматизація маркетингу та продажів",
      ],
      benefits: [
        "Зменшення витрат часу та ресурсів",
        "Підвищення ефективності та точності",
        "Швидкий доступ до даних та аналітики",
        "Оптимізація внутрішніх процесів компанії",
      ],
      buttonText: "Дізнатись більше",
      buttonLink: "/automation", // посилання на сторінку з додатковою інформацією
    },
  ];
  

// Використовуємо компонент для кожної картки з масиву
const CardList = () => {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
  {cardDataList.map((cardData, index) => (
    <Card key={index} cardData={cardData} />
  ))}
</div>
  );
};

export default CardList;