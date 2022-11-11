import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { coffees } from "../../../../data";
import { Coffee } from "../../../Home/components/CoffeeCard";
import { formatMoney } from "../../../Home/components/formatMoney";
import {
  ConfirmationSectionContainer,
  Info,
  InfoBold,
  NormalPrice,
  BoldPrice,
  PurchaseButton,
} from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartTotalAmount } = useShoppingCart();

  const itemTotal = cartTotalAmount * 9.9;

  const formattedItemTotal = formatMoney(itemTotal);
  const formattedDeliveredPrice = formatMoney(DELIVERY_PRICE);
  const formattedTotal = formatMoney(DELIVERY_PRICE + itemTotal);

  return (
    <ConfirmationSectionContainer>
      <div>
        <Info>Total de itens</Info>
        <NormalPrice>{formattedItemTotal}</NormalPrice>
      </div>

      <div>
        <Info>Entrega</Info>
        <NormalPrice>{formattedDeliveredPrice}</NormalPrice>
      </div>

      <div>
        <InfoBold>Total</InfoBold>
        <BoldPrice>{formattedTotal}</BoldPrice>
      </div>

      <PurchaseButton disabled={cartTotalAmount <= 0} type="submit">
        confirmar pedido
      </PurchaseButton>
    </ConfirmationSectionContainer>
  );
}
