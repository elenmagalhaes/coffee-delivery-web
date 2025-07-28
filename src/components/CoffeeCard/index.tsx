import type { Coffee } from "@/store/cart";
import * as S from "./styles";

interface CoffeeCardProps {
	coffee: Coffee;
	variant?: "default" | "checkout";
	quantity?: number;
	actions?: React.ReactNode;
	onQuantityChange?: (quantity: number) => void;
	onRemove?: () => void;
}

const CoffeeCard = ({
	coffee,
	variant = "default",
	quantity,
	actions
}: CoffeeCardProps) => {
	const formattedPrice = coffee.price.toFixed(2).replace(".", ",");
	const totalPrice = quantity ? (coffee.price * quantity).toFixed(2).replace(".", ",") : formattedPrice;

	if (variant === "checkout") {
		return (
			<S.CheckoutCoffeeCard>
				<S.CheckoutCoffeeImage src={coffee.image} alt={coffee.name} />
				<S.CheckoutCoffeeContent>
					<S.CheckoutCoffeeHeader>
						<S.CheckoutCoffeeInfo>
							<S.CheckoutCoffeeTitle>{coffee.name}</S.CheckoutCoffeeTitle>
						</S.CheckoutCoffeeInfo>
						<S.CheckoutCoffeePrice>
							R$ {totalPrice}
						</S.CheckoutCoffeePrice>
					</S.CheckoutCoffeeHeader>
					{actions && (
						<S.CheckoutCoffeeActions>
							{actions}
						</S.CheckoutCoffeeActions>
					)}
				</S.CheckoutCoffeeContent>
			</S.CheckoutCoffeeCard>
		);
	}

	return (
		<S.CoffeeCardContainer>
			<S.CoffeeImage src={coffee.image} alt={coffee.name} />

			<S.CoffeeTagsContainer>
				{coffee.tags.map((tag, index) => (
					<S.CoffeeTag key={index}>{tag}</S.CoffeeTag>
				))}
			</S.CoffeeTagsContainer>

			<S.CoffeeName>{coffee.name}</S.CoffeeName>

			<S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>

			<S.CoffeePriceContainer>
				<S.PriceLabel>R$</S.PriceLabel>
				<S.PriceValue>{formattedPrice}</S.PriceValue>
			</S.CoffeePriceContainer>

			{actions && (
				<S.CoffeeActionsContainer>
					{actions}
				</S.CoffeeActionsContainer>
			)}
		</S.CoffeeCardContainer>
	);
};

export default CoffeeCard;