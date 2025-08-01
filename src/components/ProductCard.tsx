// src/components/ProductCard.tsx
"use client";
import { Product } from "@/data/products";
import Link from 'next/link';
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
const { addToCart } = useCart();
  return (
  <Link href={`/product/${product.id}`}>
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
       <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)} USD</p>
      <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
      </button>
    </div>
  </Link>
  );
}
