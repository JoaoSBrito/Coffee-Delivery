import { FormProvider, useForm } from "react-hook-form";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Products } from "./components/Products";
import { CheckoutContainer, Title } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidatorSchema = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe o UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidatorSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const { cleanCart } = useShoppingCart();

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidatorSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    });

    cleanCart();
  }
  return (
    <CheckoutContainer>
      <FormProvider {...confirmOrderForm}>
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
      </FormProvider>
    </CheckoutContainer>
  );
}
