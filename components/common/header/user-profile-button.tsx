'use client'; // Make sure this is a client-side component

import { useState } from 'react';
import { signOut } from 'next-auth/react'; // Import signOut for logout functionality

// Dropdown component for the menu

import { Avatar } from '@radix-ui/react-avatar';
import ColorSpan from '../TextStyle/color-span/color-span';
import { RxExit } from "react-icons/rx";
export function UserAvatar({ session }:{session:any}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); // Redirect to home page after sign out
  };

  return (
    <div className="relative">
      {/* Avatar image */}
      <div onClick={handleDropdownToggle}>
        <Avatar>
          <img
            src={session.user?.image || '/default-avatar.png'} // Fallback image if no profile image
            alt="User Avatar"
            height={40}
            width={40}
            className="rounded-full cursor-pointer" // Add cursor pointer for click event
          />
        </Avatar>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <div className="p-2">
            {/* <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => {}}>
            <ColorSpan text='Мої заявки [Off - період тестування]</ColorSpan>' color='red'/>
            </button> */}
            <button
              className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleSignOut} // Log out when clicked
            >
              Вийти 
              <RxExit/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
