// src/components/ProductCard.tsx
import { Product } from "@/data/products";
import Link from 'next/link';
export default function ProductCard({ product }: { product: Product }) {
  return (
  <Link href={`/product/${product.id}`}>
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)} USD</p>
    </div>
  </Link>
  );
}
