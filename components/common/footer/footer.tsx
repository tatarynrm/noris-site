import { Mail } from 'lucide-react'
import React from 'react'
import ColorSpan from '../TextStyle/color-span/color-span'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Ліва частина футера: логотип або текст */}
          <div className="mb-4 lg:mb-0">
            <h4  className="text-2xl font-semibold mb-4">Noris Development</h4>
          <ColorSpan text='Web-розробка' color='green' icon={null}/>
          </div>

          {/* Правая частина футера: посилання на Telegram бот */}
          <div className="flex flex-col items-center lg:items-end space-y-2">
            <h5 className="text-lg font-semibold">Зв'яжіться з нами</h5>
            <a
              href="https://t.me/noris_development_bot" // замініть на свій Telegram-бот
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V6M5 12l7 7 7-7"
                />
              </svg>
              <span>Напишіть нам у Telegram</span>
            </a>

            {/* Електронна адреса */}
            <a
              href="mailto:tatarynrm@gmail.com"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-500"
            >
 <Mail/>
              <span>tatarynrm@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Нижня частина футера: копірайт */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>&copy; 2025 Noris Development. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
