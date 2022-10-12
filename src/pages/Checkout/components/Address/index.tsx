import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  AddressHeader,
  FormContainer,
  FormInfos,
} from "./styles";

export function Address() {
  return (
    <AddressContainer>
      <FormContainer>
        <AddressHeader>
          <MapPinLine size={22} />

          <div className="AddressTitle">
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressHeader>

        <FormInfos>
          <div id="CEP">
            <input type="text" placeholder="CEP" />
          </div>

          <div id="Rua">
            <input type="text" placeholder="Rua" />
          </div>

          <div id="Numero">
            <input type="text" placeholder="Rua" />
          </div>

          <div id="Complemento">
            <input type="text" placeholder="Complemento" />
          </div>

          <div id="Bairro">
            <input type="text" placeholder="Bairro" />
          </div>

          <div id="Cidade">
            <input type="text" placeholder="Cidade" />
          </div>

          <div id="UF">
            <input type="text" placeholder="UF" />
          </div>
        </FormInfos>
      </FormContainer>
    </AddressContainer>
  );
}
