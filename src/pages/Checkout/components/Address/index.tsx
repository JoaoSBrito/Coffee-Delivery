import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  AddressHeader,
  FormContainer,
  FormInfos,
  RightText,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export function Address() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

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
            <input
              type="text"
              placeholder="CEP"
              {...register("cep")}
              // errors={errors.cep?.message}
            />
          </div>

          <div id="Rua">
            <input
              type="text"
              placeholder="Rua"
              {...register("street")}
              // error={errors.street?.message}
            />
          </div>

          <div id="Numero">
            <input
              type="text"
              placeholder="Numero"
              {...register("number")}
              // error={errors.number?.message}
            />
          </div>

          <div id="Complemento">
            <input
              type="text"
              placeholder="Complemento"
              {...register("complement")}
              // error={errors.complement?.message}
              // rightText="Opcional"
            />
          </div>

          <div id="Bairro">
            <input
              type="text"
              placeholder="Bairro"
              {...register("district")}
              // error={errors.district?.message}
            />
          </div>

          <div id="Cidade">
            <input
              type="text"
              placeholder="Cidade"
              {...register("city")}
              // error={errors.city?.message}
            />
          </div>

          <div id="UF">
            <input
              type="text"
              placeholder="UF"
              {...register("uf")}
              // error={errors.uf?.message}
            />
          </div>
        </FormInfos>
      </FormContainer>
    </AddressContainer>
  );
}
