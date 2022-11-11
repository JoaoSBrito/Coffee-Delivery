import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { formatMoney } from "../../../Home/components/formatMoney";
import { CoffeeCartCard } from "../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer, Title } from "./styles";

// type ProductsCartProps = {
//   id?: number;
//   amount?: number;
// };

export function SelectedCoffees() {
  const { cartItems } = useShoppingCart();

  return (
    <SelectedCoffeesContainer>
      <Title>Cafés Selecionados</Title>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} {...item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
