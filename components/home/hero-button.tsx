'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

import { Link } from 'react-scroll';

const HeroButton = () => {
  return (
    <Link
    to="get-order" // Назва елемента, до якого потрібно прокручувати
    smooth={true}   // Включає плавний скролінг
    duration={500} // Тривалість анімації (в мілісекундах)
    offset={-70}    // Відступ, щоб зберегти верхній відступ від екрану
    className="text-blue-500 hover:text-blue-700"
  >
<Button
    className="m-auto mt-10  text-black hover:bg-blue-500/50 hover:text-white animate-bounce ease-in-out duration-2000
"

    variant={"secondary"}
//  onClick={()=> alert(1)}
  >
    Спробуйте наш сервіс <ArrowRight className="ml-2 animate-pulse" />
  </Button>
</Link>
  )
}

export default HeroButton