import { Minus, Plus, Trash } from "phosphor-react";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { coffees } from "../../../../data";
import { formatMoney } from "../../../Home/components/formatMoney";
import {
  ButtonCounter,
  Counter,
  Details,
  DetailsButtons,
  Infos,
  ProductValue,
  RemoveButton,
} from "./styles";

interface CoffeeCartProps {
  id: number;
  amount: number;
}

export function CoffeeCartCard({ id, amount }: CoffeeCartProps) {
  const item = coffees.find((i) => i.id === id);
  if (item == null) return null;

  const formattedPrice = formatMoney(item.price * amount);

  const { decreaseAmount, increaseAmount, removeFromCart } = useShoppingCart();
  return (
    <Infos>
      <img src={item.coffeeImg} alt="" />

      <Details>
        <p>{item.title}</p>

        <DetailsButtons>
          <Counter>
            <ButtonCounter onClick={() => decreaseAmount(item.id)}>
              <Minus weight="fill" />
            </ButtonCounter>
            {amount}
            <ButtonCounter onClick={() => increaseAmount(item.id)}>
              <Plus weight="fill" />
            </ButtonCounter>
          </Counter>

          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <Trash />
            <p>remover</p>
          </RemoveButton>
        </DetailsButtons>
      </Details>

      <ProductValue>R$ {formattedPrice}</ProductValue>
    </Infos>
  );
}
