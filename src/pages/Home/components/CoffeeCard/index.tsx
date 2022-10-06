import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
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

export interface CoffeeDataProps {
  id: number;
  coffeeImg: string;
  tag: string[];
  title: string;
  subtitle: string;
  price: number;
}

interface CoffeeProps {
  coffee: CoffeeDataProps;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedMoney = formatMoney(coffee.price);

  const [amount, setAmount] = useState(1);

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

            <div>
              <Counter>
                <ButtonCounter onClick={reduceAmount}>
                  <Minus weight="fill" />
                </ButtonCounter>
                <span>{amount}</span>
                <ButtonCounter onClick={addAmount}>
                  <Plus weight="fill" />
                </ButtonCounter>
              </Counter>

              <Cart>
                <ShoppingCart size={22} weight="fill" />
              </Cart>
            </div>
          </Buy>
        </Infos>
      </Item>
    </CardContainer>
  );
}
