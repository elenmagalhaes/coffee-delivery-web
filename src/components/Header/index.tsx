import { useCart } from "@/hooks";
import { theme } from "@/theme/theme";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Actions, Cart, CartBadge, Container, Location, LocationCity } from "./styles";

const Header = () => {
	const { totalItems } = useCart();

	return (
		<Container>
			<Link to="/">
				<img src="/assets/logo.svg" alt="Coffee Delivery Logo" width="85px" height="40px" />
			</Link>
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
