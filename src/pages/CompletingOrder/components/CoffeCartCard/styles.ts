import styled from "styled-components"

export const Infos = styled.div`
display: flex;
gap: 1.25rem;
padding-bottom: 2rem;
margin-bottom: 1.5rem;
border-bottom: 1px solid #E6E5E5;

img{
  width: 4rem;
  height: auto;
}
`

export const Details = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
`

export const DetailsButtons = styled.div`
display: flex;
gap: .5rem;
`

export const Counter = styled.div`
display: flex;
align-items: center;
border: none;
padding: .5rem;
gap: .5rem;
border-radius: 6px;
width: 60px;
height: auto;

background-color: ${props => props.theme['base-button']};
color: ${props => props.theme['base-title']};
font-weight: bold;

input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${props => props.theme['base-title']};
    font-size: 1rem;
    margin-left: .75rem;
    
    &:focus {
      outline: none;
    }
  }
`



export const ButtonCounter = styled.button`
display: flex;
align-items: center;
border: none;
cursor: pointer;

color: ${props => props.theme['purple']};
background-color: ${props => props.theme['base-button']};
`
export const RemoveButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
border: none;
padding: .5rem;
gap: .5rem;
border-radius: 6px;
cursor: pointer;

background-color: ${props => props.theme['base-button']};
color: ${props => props.theme['purple']};
p {
  color: ${props => props.theme['base-title']};
  text-transform: uppercase;
  font-size: .75rem;

  }
`
export const ProductValue = styled.div`
 display: flex;
  justify-content: flex-end;
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme['base-text']};
`