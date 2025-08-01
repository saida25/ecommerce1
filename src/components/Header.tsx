// src/components/Header.tsx
'use client';
import { ShoppingCart } from 'lucide-react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Saida Shop</div>

      <input
        type="text"
        placeholder="Search products..."
        className="border rounded p-2 w-1/2"
      />
      <Link href="/cart" className="relative">
      <div>
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
      </Link>
    </header>
  );
}
