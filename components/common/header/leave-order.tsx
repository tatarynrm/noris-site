"use client";
import React, { useState } from "react";
import NavLink from "../navlink/navlink";
import { Button } from "@/components/ui/button";
import OrderForm from "../order-form/OrderForm";
import { MessageCircle } from "lucide-react";

const LeaveOrderButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Стан для контролю відкриття Sheet

  // Функція для відкриття/закриття Sheet
  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };
    const isLoad = false;
const handleLeaveOrder = ()=>{

}

  return (
    <div>
      <div className="flex gap-4 lg:gap-12 lg:items-center">
        <Button onClick={toggleSheet} variant={'outline'} className="hover:bg-red-200 hover:text-black">Залишити заявку <MessageCircle style={{color:"red"}} className="hover:bg-white" size={20}/> </Button>
        {isLoad && <NavLink href={"/dashboard"}>Ваші заявки</NavLink>}
      </div>
      <OrderForm isOpen ={isOpen} toggleSheet ={toggleSheet}/>
    </div>
  );
};

export default LeaveOrderButton;
