import { useCartStore } from "@/store/cart";
import { theme } from "@/theme/theme";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Actions, Cart, CartBadge, Container, Location, LocationCity } from "./styles";

const Header = () => {
	const totalItems = useCartStore((state) =>
		state.items.reduce((acc, item) => acc + item.quantity, 0)
	);

	return (
		<Container>
			<img src="src/assets/logo.svg" alt="Coffee Delivery Logo" style={{ width: '85px', height: '40px' }} />
			<Actions>
				<Location>
					<MapPin size={22} weight="fill" color={theme.colors.brand.purple} />
					<LocationCity>São Bernardo do Campo, SP</LocationCity>
				</Location>
				<Cart as={Link} to="/checkout">
					<ShoppingCart size={22} weight="fill" color={theme.colors.brand.yellowDark} />
					{totalItems > 0 && (
						<CartBadge>
							{totalItems}
						</CartBadge>
					)}
				</Cart>
			</Actions>
		</Container>
	);
}

export default Header;
