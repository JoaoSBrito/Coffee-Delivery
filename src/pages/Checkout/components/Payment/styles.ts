import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${props => props.theme['purple']};
  font-family: 'Roboto';

  .paymentTitle{
    font-weight: 400;
    line-height: 130%;
  }

  .paymentTitle :first-child {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  .paymentTitle :last-child {
    color: ${props => props.theme['base-text']};
    font-size: .875rem;
  }
`

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .75rem;
`

export const PaymentMethod = styled.button`
  margin-top: 2rem;
  padding:1rem;

  line-height: 160%;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  gap: .75rem;
  border-radius: 6px;
  border: none;

  background-color: ${props => props.theme['base-button']};
  color: ${props => props.theme['purple']}; 

  :focus {
    border: 1px solid ${props => props.theme['purple']};  
  }

  p{
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};  
    font-size: .75rem;
  }     
`