import { createContext, ReactNode, useContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  amount: number;
};

// interface CartItem extends Coffee {
//   amount: number;
// }

type ShoppingCartContext = {
  getItemsAmount: (id: number) => number;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  addedFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cleanCart: () => void;
  cartTotalAmount: number;
  cartItems: CartItem[];
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function cleanCart() {
    setCartItems([]);
  }

  function getItemsAmount(id: number) {
    return cartItems.find((item) => item.id === id)?.amount || 1;
  }

  function increaseAmount(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, amount: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseAmount(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.amount === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function addedFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id === id);
    });

    // console.log("item added");
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });

    // console.log("item added");
  }

  const cartTotalAmount = cartItems.reduce(
    (amount, item) => amount + item.amount,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemsAmount,
        increaseAmount,
        decreaseAmount,
        addedFromCart,
        cartItems,
        cartTotalAmount,
        removeFromCart,
        cleanCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
