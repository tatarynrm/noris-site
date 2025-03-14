import Image from "next/image"; // Для використання компоненту Image (якщо зображення оптимізовано)
import { ArrowRight } from "lucide-react";

const AboutServicesCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

      <div className="bg-blue-100 p-8 text-center">
 
        <Image src="/images/png/site_png.png" alt="Web site icon" width={100} height={100} />
      </div>

      {/* Опис та переваги */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Розробка сучасних вебсайтів</h3>
        <p className="text-gray-700 mb-4">
          Ми створюємо інтуїтивно зрозумілі та адаптивні вебсайти, що підходять для вашого бізнесу. 
          Ось кілька типів сайтів, які ми можемо створити:
        </p>

        <ul className="list-disc pl-5 text-gray-600 mb-4">
          <li>Корпоративні сайти</li>
          <li>Інтернет-магазини</li>
          <li>Особисті блоги</li>
          <li>Портфоліо</li>
          <li>Landing Page</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mb-2">Переваги роботи зі мною:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Адаптивний дизайн для всіх пристроїв</li>
          <li>Індивідуальний підхід до кожного проєкту</li>
          <li>Швидка розробка та підтримка після запуску</li>
          <li>Використання сучасних технологій та інструментів</li>
        </ul>
      </div>

      {/* Кнопка переходу до наступного етапу */}
      <div className="px-6 py-4 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Дізнатись більше <ArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AboutServicesCard;
