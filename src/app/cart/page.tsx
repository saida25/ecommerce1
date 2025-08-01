"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4 border-b pb-2">
              <p className="font-semibold">{item.title}</p>
              <p>{item.price} USD</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
