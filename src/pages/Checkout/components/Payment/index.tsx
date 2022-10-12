import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  PaymentContainer,
  PaymentHeader,
  PaymentMethod,
  PaymentMethods,
} from "./styles";

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />
        <div className="paymentTitle">
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeader>

      <PaymentMethods>
        <PaymentMethod>
          <CreditCard size={16} />
          <p>cartão de credito</p>
        </PaymentMethod>

        <PaymentMethod>
          <Bank size={16} />
          <p>cartão de debito</p>
        </PaymentMethod>

        <PaymentMethod>
          <Money size={16} />
          <p>Dinheiro</p>
        </PaymentMethod>
      </PaymentMethods>
    </PaymentContainer>
  );
}
