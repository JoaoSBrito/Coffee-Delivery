import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${props => props.theme['background']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  background-color: ${(props) => props.theme['purple-light']};
  padding: .5rem;
  border-radius: 6px;

  >p {
    color: ${(props) => props.theme['purple']};
    font-size: .875rem;
    font-weight: normal;
  }

`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:.75rem;
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  position: relative;

  background-color: ${(props) => props.theme['yellow-light']};
  border: none;
  padding: .5rem;
  border-radius: 6px;
  cursor: pointer;
`

export const ProductsAmount = styled.span`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  font-size: .8rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  background-color: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['white']};
  border-radius: 100%;
`