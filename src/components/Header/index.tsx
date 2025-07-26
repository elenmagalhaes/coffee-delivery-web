import { theme } from "@/theme/theme";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Actions, Cart, Container, Location, LocationCity } from "./styles";

const Header = () => {
	return (
		<Container>
			<img src="src/assets/logo.svg" alt="Coffee Delivery Logo" style={{ width: '85px', height: '40px' }} />
			<Actions>
				<Location>
					<MapPin size={22} weight="fill" color={theme.colors.brand.purple} />
					<LocationCity>São Bernardo do Campo, SP</LocationCity>
				</Location>
				<Cart href="/checkout">
					<ShoppingCart size={22} weight="fill" color={theme.colors.brand.yellowDark} />
				</Cart>
			</Actions>
		</Container>
	);
}

export default Header;
