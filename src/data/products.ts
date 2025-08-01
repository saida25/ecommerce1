// src/data/products.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    price: 149.99,
    image: "https://via.placeholder.com/300x300?text=Nike+Air+Max",
  },
  {
    id: "2",
    name: "Adidas Ultraboost",
    price: 129.99,
    image: "https://via.placeholder.com/300x300?text=Adidas+Ultraboost",
  },
  {
    id: "3",
    name: "Puma RS-X",
    price: 109.99,
    image: "https://via.placeholder.com/300x300?text=Puma+RS-X",
  },
];
