import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items:center; */
  flex-direction: column;

  /* background-image: url(src/assets/Background.png); */
`;

export const Introduction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
`;

export const Headline = styled.div`
  line-height: 1.3;

  display: flex;
  justify-content: space-around;
  /* align-items: center;; */
  flex-direction: column;
  gap: 4.2rem;
`;

export const Title = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
  }
`;

export const Icon = styled.span`
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Cart = styled(Icon)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const PackageI = styled(Icon)`
  background: ${(props) => props.theme["base-text"]};
`;

export const TimerI = styled(Icon)`
  background: ${(props) => props.theme["yellow"]};
`;
export const CoffeI = styled(Icon)`
  background: ${(props) => props.theme["purple"]};
`;

export const CoffeeList = styled.div`
  margin-top: 4rem;
  header > h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 900;
    font-size: 2rem;

    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 2rem;
`;
