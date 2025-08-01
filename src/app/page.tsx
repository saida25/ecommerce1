import Image from "next/image";
// src/app/page.tsx
import Header from "@/components/Header";


export default function Home() {
  return (
      <div>
          <Header />
          <main className="p-6">
            <h1 className="text-3xl font-semibold mb-4">Welcome to Our Shop!</h1>
            <p className="text-gray-600">Discover our amazing products.</p>
          </main>
        </div>
  );
}
