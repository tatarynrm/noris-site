import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ColorSpan from "../common/TextStyle/color-span/color-span";
import HeroButton from "./hero-button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-400 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center ">
        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold mb-4 text-white">
          СВІТ СУЧАСНИХ ТЕХНОЛОГІЙ
        </h1>

        {/* Блоки з кольоровими словами */}
        <div className="space-y-4 mb-12 text-left items-start justify-start ">
          <div className="flex flex-col md:flex-row justify-between xl:flex-row xl:mt-10 lg:flex-row lg:mt-20">
            <div className="w-full">
              <ColorSpan text="Telegram Bot" color="blue" icon="telegram" />
            </div>
            <h3 className="text-white font-bold text-2xl w-full ">
              Створю інтуїтивно зрозумілі та функціональні боти для вашого
              бізнесу.
            </h3>
            <br />
            <hr className="bg-blue-200  h-1  lg:visible" />
          </div>

          <div className="flex flex-col md:flex-row   justify-between  mt-10 xl:flex-row xl:mt-10 lg:flex-row lg:mt-20">
            <div className="w-full">
              <ColorSpan text="Web сайт" color="red" icon="site" />
            </div>
            <h3 className="text-2xl font-bold text-white w-full">
              Розробка сучасних і адаптивних вебсайтів під ваші потреби.
            </h3>
            <br />
            <hr className="bg-blue-200  h-1  lg:visible" />
          </div>

          <div className="flex flex-col md:flex-row   justify-between  mt-10 xl:flex-row xl:mt-10 lg:flex-row lg:mt-20">
            <div className="w-full">
              <ColorSpan text="База даних" color="yellow" icon="database" />
            </div>
            <h3 className="text-2xl font-bold text-white w-full">
              Створю надійні та масштабовані бази даних для зберігання вашої
              інформації.
            </h3>
            <br />
            <hr className="bg-blue-200  h-1  lg:visible" />
          </div>

          <div className="flex flex-col md:flex-row   justify-between  mt-10 xl:flex-row xl:mt-10 lg:flex-row lg:mt-20">
            <div className="w-full">
              <ColorSpan text="Мобільні додатки" color="green" icon="phone" />
            </div>
            <h3 className="text-2xl font-bold text-white text-left w-full">
              Розробка мобільних додатків для iOS та Android.
            </h3>
            <br />
            <hr className="bg-blue-200  h-1  lg:visible" />
          </div>

          <div className="flex flex-col md:flex-row   justify-between  mt-10 xl:flex-row xl:mt-10 lg:flex-row lg:mt-20">
            <div className="w-full">
              <ColorSpan
                text="Автоматизація процесів"
                color="pink"
                icon="automatization"
              />
            </div>
            <h3 className="text-2xl font-bold text-white text-left w-full">
              Автоматизуйте свої бізнес-процеси для підвищення ефективності.
            </h3>
            <br />
            <hr className="bg-blue-200  h-1  lg:visible" />
          </div>
        </div>

        {/* Кнопка */}
        <HeroButton />
      </div>

      {/* Декоративні елементи */}
    </section>
  );
};

export default HeroSection;
