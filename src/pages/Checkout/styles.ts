import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1.15fr .85fr; 
  gap: 2rem;
`

export const Title = styled.h2`
  color: ${props => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-family: 'Baloo 2';
`