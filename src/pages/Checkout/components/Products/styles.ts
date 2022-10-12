import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
`

export const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  font-family: 'Roboto';
  line-height: 130%;
`

export const ValuesDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: .875rem;
    color: ${(props) => props.theme['base-text']};
  }

  strong{
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PurchaseButton = styled.button`
  width: 100%;
  padding: .75rem;
  margin-top: 1.5rem;

  border-radius: 6px;
  border: none;

  font-size: .875rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
` 