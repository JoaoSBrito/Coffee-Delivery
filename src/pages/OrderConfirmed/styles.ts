import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box {
    background-color: ${props => props.theme['background']};
    position: relative;
    border: double 2px transparent;
    border-radius: 6px 36px 6px 36px;
    background-image: linear-gradient(#FAFAFA, #FAFAFA), radial-gradient(circle at top left, #dbac2c, #8047f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`

export const Title = styled.div`
  line-height: 130%;
  display: flex;
  flex-direction: column;
  gap: .6rem;
  h1 {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2';
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const OrderDetailsContainer = styled.div`
  min-width: 32rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`