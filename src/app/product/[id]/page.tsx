// app/product/[id]/page.tsx
import { use } from 'react';
import { products } from "@/data/products";
import Link from 'next/link';

type ProductPageProps = {
  params: {
    id: string;
  };
};
export default  function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover mb-4" />
      <p className="text-lg mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-600">{product.price} USD</p>
      <Link href="/" className="text-blue-600 underline mt-4 block">← Back to products</Link>
    </div>
  );
}
