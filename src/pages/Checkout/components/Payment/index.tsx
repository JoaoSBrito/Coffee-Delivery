import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  PaymentContainer,
  PaymentHeader,
  PaymentMethod,
  PaymentMethods,
} from "./styles";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;
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
        <PaymentMethod idtype="radio">
          <CreditCard size={16} />
          <label>cartão de credito</p>
        </PaymentMethod>

        <PaymentMethod type="radio">
          <Bank size={16} />
          <p>cartão de debito</p>
        </PaymentMethod>

        <PaymentMethod type="radio">
          <Money size={16} />
          <p>Dinheiro</p>
        </PaymentMethod>
      </PaymentMethods>
    </PaymentContainer>
  );
}
