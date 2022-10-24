import styled from "styled-components";

export const AddressContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;
`

export const FormContainer = styled.div``

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${props => props.theme['yellow-dark']};
  font-family: 'Roboto';

  .AddressTitle{
    font-weight: 400;
    line-height: 130%;
  }

  .AddressTitle :first-child {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  .AddressTitle :last-child {
    color: ${props => props.theme['base-text']};
    font-size: .875rem;
  }
`

export const FormInfos = styled.div`
  display: grid;
    grid-template-columns: 1fr  1fr 1fr;
    grid-template-areas: "cep . ."
                         "rua rua rua"
                         "numero complemento complemento"
                         "bairro cidade uf";
    gap: 1rem;
    margin-top: 2rem;

  input {
    width: 80%;
    height: 2.625rem;
    padding: 0.75rem;

    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-label']};
    
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    font-size: 0.875rem;

  } 

  #CEP{
        grid-area: cep;
    }
    #Rua{
        grid-area: rua;
    }
    #Numero{
        grid-area: numero;
    }
    #Complemento{
        grid-area: complemento;
    }
    #Bairro{
        grid-area: bairro;
    }
    #Cidade{
        grid-area: cidade;
    }
    #UF{
        grid-area: uf;
    }
`

export const RightText = styled.p`
   font-size: 0.75rem;
   margin-right: 0.75rem;
   font-style: italic;
   color: ${( props ) => props.theme["base-label"]};
 `