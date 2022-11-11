import styled from "styled-components";

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
`

export const Title = styled.div`
  font-size: 1.125rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 1rem;
`
export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: 12.5rem 17.25rem 3.75rem; */
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  margin-top: 2rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .rua {
    grid-column: span 3;
  }
  .complemento {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
   display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${props => props.theme['base-error']};
  }
`