import styled from "styled-components";

export const CardContainer = styled.div`
  /* max-width: 16rem; */
  max-height: 19.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;
  background-color: ${props => props.theme['base-card']};

  margin-top: 3.5rem;
`

export const Item =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
        width: 7.5rem;
        margin-top: -2rem;
    }
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: .7rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  strong{
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    margin-top: .75rem;
    /* margin-bottom: 1rem; */
    padding: .4rem;
  
    border-radius: 100px;


    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
  }  
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.3;
  gap: 2rem;

  padding: .875rem;
  text-align: center;

`

export const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 80%;

  h1{
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }

  p{
    font-size: .875rem;
    color: ${props => props.theme['base-label']};
    margin-top: .5rem;
  }

`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

p{
  font-size: .875rem;
  color: ${props => props.theme['base-label']};

}

strong{
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${props => props.theme['base-subtitle']};
}
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  padding: .5rem;
  border-radius: 6px;
  width: 4.5rem;

  background-color: ${props => props.theme['base-button']};

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
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  cursor: pointer;

  color: ${props => props.theme['purple']};
  background-color: ${props => props.theme['base-button']};

  :hover {
    color: ${props => props.theme['purple-dark']};
  }
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: .5rem;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
`



