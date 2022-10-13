import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  amount: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartAmount: number;
  addItemToCart: (coffee: CartItem) => void;
  cleanCart: () => void;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    } else {
      return [];
    }
  });

  function addItemToCart(coffee: CartItem) {
    const coffeeAlreadyExists = cartItems.findIndex(
      (item) => item.id == coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExists].amount += coffee.amount;
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const cartAmount = cartItems.length;
  return (
    <CartContext.Provider
      value={{ addItemToCart, cartItems, cleanCart, cartAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
