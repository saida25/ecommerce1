// src/app/cart/page.tsx
'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 border"
                  onClick={() =>
                    updateQuantity(item.id, (item.quantity || 1) - 1)
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 border"
                  onClick={() =>
                    updateQuantity(item.id, (item.quantity || 1) + 1)
                  }
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold text-lg mt-6">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
