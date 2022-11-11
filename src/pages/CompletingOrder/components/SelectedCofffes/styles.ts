import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* width: 100%; */
  border-radius: 6px;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 1rem;
`

export const Info = styled.p`
  font-size: .875rem;
  line-height:130%;
  color: ${props => props.theme['base-text']};
`

export const NormalPrice = styled.p`
  font-size: 1rem;
  line-height:130%;
  color: ${props => props.theme['base-text']};
`

export const InfoBold = styled.p`
  font-size: 1.25rem;
  line-height:130%;
  color: ${props => props.theme['base-subtitle']};
  font-weight: bold;
`

export const BoldPrice = styled.p`
  font-size: 1.25rem;
  line-height:130%;
  color: ${props => props.theme['base-subtitle']};
  font-weight: bold;
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
  cursor: pointer;
` 