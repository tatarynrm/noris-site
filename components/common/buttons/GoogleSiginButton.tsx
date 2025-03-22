'use client'
import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
export default function GoogleSignInButton() {
  return (
    <div className='flex gap-1 items-center text-center cursor-pointer'>

      <button onClick={() => signIn('google')} className='cursor-pointer font-bold'>Увійти 
    
      </button>
      <FcGoogle/>
    </div>
  );
}
