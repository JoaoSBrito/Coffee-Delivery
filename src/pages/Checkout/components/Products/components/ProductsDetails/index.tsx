import { Minus, Plus, Trash } from "phosphor-react";
import { CartItem } from "../../../../../../context/CartContext";
import { formatMoney } from "../../../../../Home/components/formatMoney";
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
  coffee: CartItem;
}

export function ProductsDetails({ coffee }: CoffeeCartProps) {
  const coffeeTotal = coffee.price * coffee.amount;
  const formattedPrice = formatMoney(coffeeTotal);
  return (
    <Infos>
      <img src={coffee.coffeeImg} alt="" />

      <Details>
        <p>{coffee.title}</p>

        <DetailsButtons>
          <Counter>
            <ButtonCounter>
              <Minus weight="fill" />
            </ButtonCounter>
            <span>{coffee.amount}</span>
            <ButtonCounter>
              <Plus weight="fill" />
            </ButtonCounter>
          </Counter>

          <RemoveButton>
            <Trash />
            <p>remover</p>
          </RemoveButton>
        </DetailsButtons>
      </Details>

      <ProductValue>R$ {formattedPrice}</ProductValue>
    </Infos>
  );
}
