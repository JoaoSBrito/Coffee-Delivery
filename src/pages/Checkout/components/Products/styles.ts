import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const Product = styled.div`
  padding: 2.5rem;

  img{
    width: 64px;
    height: auto;
  }
`

