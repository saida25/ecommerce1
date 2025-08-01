import Image from "next/image";
// src/app/page.tsx
import Header from "@/components/Header";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
      <div>
          <Header />
          <main className="p-6">
            <h1 className="text-3xl font-semibold mb-4">Welcome to Our Shop!</h1>
            <p className="text-gray-600">Discover our amazing products.</p>
            <h1 className="text-3xl font-semibold mb-6">Featured Products</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
          </main>
        </div>
  );
}
