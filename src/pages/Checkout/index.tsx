import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Products } from "./components/Products";
import { CheckoutContainer, Title } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <form action="">
          <Address />
          <Payment />
        </form>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <Products />
      </div>
    </CheckoutContainer>
  );
}
