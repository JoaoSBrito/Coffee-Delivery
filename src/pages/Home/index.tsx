import {
  Cart,
  CoffeeList,
  CoffeI,
  Headline,
  HomeContainer,
  Image,
  Introduction,
  Items,
  ListItem,
  PackageI,
  TimerI,
  Title,
} from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import introImg from "../../assets/intro.png";
import { coffees } from "../../data";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return (
    <HomeContainer>
      <Introduction>
        <Headline>
          <Title>
            <h1>Encontre o café pefeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora!
            </p>
          </Title>

          <Items>
            <p>
              <Cart>
                <ShoppingCart weight="fill" />
              </Cart>{" "}
              Compra simples e segura
            </p>

            <p>
              <PackageI>
                <Package weight="fill" />
              </PackageI>{" "}
              Embalagem mantém o café intacto
            </p>

            <p>
              <TimerI>
                <Timer weight="fill" />
              </TimerI>
              Entrega rápida e rastreada
            </p>

            <p>
              <CoffeI>
                <Coffee weight="fill" />
              </CoffeI>
              O café chega fresquinho até você
            </p>
          </Items>
        </Headline>

        <Image>
          <img src={introImg} />
        </Image>
      </Introduction>

      <CoffeeList>
        <header>
          <h1>Nossos Cafés</h1>
        </header>

        <ListItem>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </ListItem>
      </CoffeeList>
    </HomeContainer>
  );
}
