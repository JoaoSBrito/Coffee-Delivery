import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AdressForm";
import { PaymentMethodOptions } from "./PaymentOptions";
import { FormSectionContainer, OrderFormContainer, Title } from "./styles";

export function OrderForm() {
  return (
    <OrderFormContainer>
      <Title>Complete seu pedido</Title>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color="#C47F17" size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color="#8047F8" size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </OrderFormContainer>
  );
}
