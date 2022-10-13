import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { coffees } from "../../../../data";
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
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedMoney = formatMoney(coffee.price);

  const [amount, setAmount] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  function addAmount() {
    setAmount((state) => {
      return state + 1;
    });
  }

  function reduceAmount() {
    setAmount((state) => {
      if (state > 1) {
        return state - 1;
      } else {
        return state;
      }
    });
  }

  function handleAddItemToCart() {
    const itemToAdd = {
      ...coffee,
      amount,
    };

    addItemToCart(itemToAdd);
  }

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
              <ButtonCounter onClick={reduceAmount}>
                <Minus weight="fill" />
              </ButtonCounter>
              {/* <span>{amount}</span> */}
              <input type="number" readOnly value={amount} />
              <ButtonCounter onClick={addAmount}>
                <Plus weight="fill" />
              </ButtonCounter>
            </Counter>

            <Cart onClick={handleAddItemToCart}>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Buy>
        </Infos>
      </Item>
    </CardContainer>
  );
}
