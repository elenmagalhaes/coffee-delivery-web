import { useApp } from "@/hooks";
import { theme } from "@/theme/theme";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Typography } from "../Typography";
import { Actions, Cart, CartBadge, Container, Location } from "./styles";

const Header = () => {
	const { totalItems } = useApp();

	return (
		<Container>
			<Link to="/">
				<img src="/assets/logo.svg" alt="Coffee Delivery Logo" width="85px" height="40px" />
			</Link>
			<Actions>
				<Location>
					<MapPin size={22} weight="fill" color={theme.colors.brand.purple} />
					<Typography color="purpleDark">São Bernardo do Campo, SP</Typography>
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
