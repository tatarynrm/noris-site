'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import OrderForm from '../common/order-form/OrderForm'
import { MessageCircle } from 'lucide-react'

const OrderRules = () => {
    const [isOpen, setIsOpen] = useState(false); // Стан для контролю відкриття Sheet
  
    // Функція для відкриття/закриття Sheet
    const toggleSheet = () => {
      setIsOpen(!isOpen);
    };
      const isLoad = false;
  const handleLeaveOrder = ()=>{
  
  }
  return (
    <section className="py-16 bg-gray-200 "  id='get-order' >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      {/* Ліва частина - картинка */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="/images/png/order.png" // Шлях до вашого зображення
          alt="Залиште заявку"
          className="md:w-full/2 h-auto object-cover rounded-lg shadow-md "
        />
      </div>
  
      {/* Права частина - текст */}
      <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Залиште заявку</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ми завжди на зв'язку! Залиште заявку, і ми обговоримо всі деталі вашого проєкту. 
          Наші фахівці відповідають на запитання, допомагають з вибором послуг і організовують зручний процес співпраці.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Заповніть форму, і ми зв'яжемось з вами найближчим часом.
        </p>
        <Button onClick={toggleSheet} variant={'outline'} className="hover:bg-red-200 hover:text-black">Залишити заявку <MessageCircle style={{color:"red"}} className="hover:bg-white" size={20}/> </Button>
        <OrderForm isOpen ={isOpen} toggleSheet ={toggleSheet}/>
      </div>
    </div>
  </section>
  
  )
}

export default OrderRules