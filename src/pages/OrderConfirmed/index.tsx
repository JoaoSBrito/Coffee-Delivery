import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { OrderData } from "../CompletingOrder";
import { paymentMethods } from "../CompletingOrder/components/OrderForm/PaymentOptions";
import {
  OrderConfirmedContainer,
  OrderDetailsContainer,
  Title,
} from "./styles";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmed() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;
  return (
    <OrderConfirmedContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo o café chegará até você</p>
      </Title>

      <section>
        <div className="box">
          <OrderDetailsContainer>
            <InfoWithIcon
              icon={<MapPin weight="fill" />}
              iconBg="#8047F8"
              text={
                <p>
                  Entrega em{" "}
                  <strong>
                    {state.street}, {state.number}
                  </strong>
                  <br />
                  {state.district} - {state.city}, {state.uf}
                </p>
              }
            />

            <InfoWithIcon
              icon={<Clock weight="fill" />}
              iconBg="#DBAC2C"
              text={
                <p>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </p>
              }
            />

            <InfoWithIcon
              icon={<CurrencyDollar weight="fill" />}
              iconBg="#C47F17"
              text={
                <p>
                  Pagamento na entrega
                  <br />
                  <strong>{[paymentMethods[state.paymentMethod].label]}</strong>
                </p>
              }
            />
          </OrderDetailsContainer>
        </div>
        <img src="src/assets/illustration.png" alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
