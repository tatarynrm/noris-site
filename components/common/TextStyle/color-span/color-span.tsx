import React from "react";
import { BotMessageSquare, CalendarSync, DatabaseZap, TentTree, Vibrate } from "lucide-react";

// Тип для доступних кольорів
type ColorType = "red" | "blue" | "yellow" | "green" | "orange" | "pink";
type IconType = "telegram" | "site" | "database" | 'phone' | 'automatization'| null;

// Компонент для кольорового тексту з іконкою
const ColorSpan = ({
  text,
  color,
  icon,
  ...props
}: {
  text: string;
  color: ColorType;
  icon: IconType;
}) => {
  // Функція для отримання кольору
  const getColor = (color: ColorType) => {
    switch (color) {
      case "red":
        return "bg-red-500/50";
      case "blue":
        return "bg-blue-500/40";
      case "yellow":
        return "bg-yellow-500/50";
      case "green":
        return "bg-green-600/50";
      case "orange":
        return "bg-orange-600/50";
      case "pink":
        return "bg-pink-600/50";
      default:
        return "bg-green-500/50"; // Це на випадок, якщо передано невідомий колір
    }
  };

  // Функція для отримання іконки
  const getIcon = (icon: IconType) => {
    switch (icon) {
      case "telegram":
        return <BotMessageSquare className="" size={40} />;
      case "site":
        return <TentTree className="" size={40} />;
      case "database":
        return <DatabaseZap className="" size={40} />;
      case "phone":
        return <Vibrate className="" size={40} />;
      case "automatization":
        return <CalendarSync className="" size={40} />;
      default:
        return null;
    }
  };

  // Отримуємо іконку
  const Icon = getIcon(icon);

  return (
    <span className="relative flex gap-4">
         {Icon}
      <span className="relative z-10 px-2 font-bold text-white text-2xl">
     
        {text}
        <span
          className={`absolute inset-0 ${getColor(color)} rotate-2 rounded-lg transform -skew-y-2 p-3`}
        ></span>
    
      </span>
    </span>
  );
};

export default ColorSpan;
