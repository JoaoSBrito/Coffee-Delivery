import { Minus, Plus, Trash } from "phosphor-react";
import {
  ButtonCounter,
  Counter,
  Details,
  DetailsButtons,
  Infos,
  ProductValue,
  RemoveButton,
} from "./styles";

export function ProductsDetails() {
  return (
    <Infos>
      <img src="src/assets/coffee/Tradicional.png" alt="" />

      <Details>
        <p>Expresso Tradicional</p>

        <DetailsButtons>
          <Counter>
            <ButtonCounter>
              <Minus weight="fill" />
            </ButtonCounter>
            <span>1</span>
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

      <ProductValue>R$9,90</ProductValue>
    </Infos>
  );
}
