// src/data/products.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
      id: 1,
      title: "Red T-shirt",
      description: "Comfortable cotton T-shirt",
      price: 39.90,
      image: "https://via.placeholder.com/200?text=Red+Tshirt"
  },
  {
    id: "2",
    title: "Adidas Ultraboost",
    description: "Comfortable cotton T-shirt",
    price: 129.99,
    image: "https://via.placeholder.com/300x300?text=Adidas+Ultraboost",
  },
  {
    id: "3",
    title: "Puma RS-X",
    description: "Comfortable cotton T-shirt",
    price: 109.99,
    image: "https://via.placeholder.com/300x300?text=Puma+RS-X",
  },
];
