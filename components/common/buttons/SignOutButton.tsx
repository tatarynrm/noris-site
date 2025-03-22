// components/SignOutButton.tsx (or SignOutButton.js if you're using JavaScript)
"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: "/" });
        localStorage.clear();
      }} // Redirect to homepage or any URL after sign out
      className="p-2 bg-red-500 text-white rounded"
    >
      Вийти
    </button>
  );
};

export default SignOutButton;
