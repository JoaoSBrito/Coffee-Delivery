import { ProductsDetails } from "./components/ProductsDetails";
import {
  Product,
  ProductsContainer,
  Purchase,
  PurchaseButton,
  ValuesDescription,
} from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      <Product>
        <ProductsDetails />
        <ProductsDetails />
        <ProductsDetails />

        <Purchase>
          <ValuesDescription>
            <p>Total de itens</p>
            <p>R$ 29,71</p>
          </ValuesDescription>

          <ValuesDescription>
            <p>Total de itens</p>
            <p>R$ 3,50</p>
          </ValuesDescription>

          <ValuesDescription>
            <strong>Total</strong>
            <strong>R$ 33,21</strong>
          </ValuesDescription>

          <PurchaseButton>confirmar pedido</PurchaseButton>
        </Purchase>
      </Product>
    </ProductsContainer>
  );
}
