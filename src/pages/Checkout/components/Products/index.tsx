import { useContext } from "react";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { coffees } from "../../../../data";
import { formatMoney } from "../../../Home/components/formatMoney";
// import { CartContext } from "../../../../context/CartContext";
import { ProductsDetails } from "./components/ProductsDetails";
import {
  Product,
  ProductsContainer,
  Purchase,
  PurchaseButton,
  ValuesDescription,
} from "./styles";

type ProductsCartProps = {
  id?: number;
  amount?: number;
};

export function Products({ id, amount }: ProductsCartProps) {
  const { cartItems } = useShoppingCart();

  const formattedPrice = formatMoney(
    cartItems.reduce((total, cartItem) => {
      const item = coffees.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.amount;
    }, 0)
  );

  const formattedPriceTotal = formatMoney(
    cartItems.reduce((total, cartItem) => {
      const item = coffees.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem?.amount + 3.5;
    }, 0)
  );

  return (
    <ProductsContainer>
      <Product>
        {cartItems.map((item) => {
          return <ProductsDetails key={item.id} {...item} />;
        })}
        <Purchase>
          <ValuesDescription>
            <p>Total de itens</p>
            <p>R$ {formattedPrice}</p>
          </ValuesDescription>

          <ValuesDescription>
            <p>Total de itens</p>
            <p>R$ 3,50</p>
          </ValuesDescription>

          <ValuesDescription>
            <strong>Total</strong>
            <strong>R$ {formattedPriceTotal}</strong>
          </ValuesDescription>

          <PurchaseButton>confirmar pedido</PurchaseButton>
        </Purchase>
      </Product>
    </ProductsContainer>
  );
}
