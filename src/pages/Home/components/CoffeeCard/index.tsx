import { Minus, Plus, ShoppingCart } from "phosphor-react";
// import { useContext } from "react";
// import { useState } from "react";
import {
  CartItem,
  useShoppingCart,
} from "../../../../context/ShoppingCartContext";
// import { coffees } from "../../../../data";
import { formatMoney } from "../formatMoney";
import {
  ButtonCounter,
  Buy,
  CardContainer,
  Cart,
  Counter,
  Infos,
  Item,
  Tag,
  Title,
} from "./styles";

export interface Coffee {
  id: number;
  coffeeImg: string;
  tag: string[];
  title: string;
  subtitle: string;
  price: number;
  amount: number;
}

export interface cartItems extends Coffee {
  cartItems: CartItem;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedMoney = formatMoney(coffee.price);

  const { decreaseAmount, getItemsAmount, increaseAmount, addedFromCart } =
    useShoppingCart();

  const amount = getItemsAmount(coffee.id);

  return (
    <CardContainer>
      <Item>
        <img src={coffee.coffeeImg} />

        <Tag>
          {coffee.tag.map((tags) => {
            return <strong key={`${coffee.id}${tags}`}>{tags}</strong>;
          })}
        </Tag>

        <Infos>
          <Title>
            <h1>{coffee.title}</h1>
            <p>{coffee.subtitle}</p>
          </Title>

          <Buy>
            <p>
              R$ <strong>{formattedMoney}</strong>
            </p>

            <Counter>
              <ButtonCounter onClick={() => decreaseAmount(coffee.id)}>
                <Minus weight="fill" />
              </ButtonCounter>
              {/* <span>{amount}</span> */}
              <input type="number" readOnly value={amount} />
              <ButtonCounter onClick={() => increaseAmount(coffee.id)}>
                <Plus weight="fill" />
              </ButtonCounter>
            </Counter>

            <Cart
              onClick={() =>
                addedFromCart(coffee.id)
              } /* onClick={handleAddItemToCart} */
            >
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Buy>
        </Infos>
      </Item>
    </CardContainer>
  );
}
