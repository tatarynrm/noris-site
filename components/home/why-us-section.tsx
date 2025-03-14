import React from 'react'

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Ліва частина: Опис */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Чому ми?</h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Тому що ми дешевші ніж великі компанії,</strong> але з такою ж якістю обслуговування. Ми пропонуємо найкращі рішення за доступними цінами.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Ми завжди на зв'язку,</strong> і вам не потрібно чекати тижнями на відповідь. З нами ви завжди будете в курсі всіх етапів вашого проєкту.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Індивідуальний підхід до кожного клієнта,</strong> ми враховуємо ваші побажання та деталі проєкту, щоб створити максимально ефективне рішення.
            </p>
          </div>

          {/* Права частина: Картинка */}
          <div className="lg:w-1/2">
            <img
              src="/images/png/why-us.png" // замініть на шлях до вашої картинки
              alt="Why Choose Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
