import {
  Actions,
  Cart,
  HeaderContainer,
  Location,
  ProductsAmount,
} from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <Actions>
        <Location>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p>Teixeira de Freitas,BA</p>
        </Location>

        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            <ProductsAmount>3</ProductsAmount>
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  );
}
