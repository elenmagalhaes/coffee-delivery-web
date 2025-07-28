import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.base.card};
	border-radius: 0.375rem 0.375rem 2.25rem 0.375rem;
	padding: 1.25rem;
	width: 16rem;
	text-align: center;
	position: relative;
`;

export const CoffeeImage = styled.img`
	width: 7.5rem;
	height: 7.5rem;
	margin-top: -2.5rem;
	margin-bottom: 0.75rem;
	object-fit: cover;
`;

export const CoffeeTagsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	margin-bottom: 1rem;
	flex-wrap: wrap;
	justify-content: center;
`;

export const CoffeeTag = styled.span`
	background-color: ${({ theme }) => theme.colors.brand.yellowLight};
	color: ${({ theme }) => theme.colors.brand.yellowDark};
	font-size: ${({ theme }) => theme.typography.size.xsmall};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-transform: uppercase;
	padding: 0.25rem 0.5rem;
	border-radius: 6.25rem;
`;

export const CoffeeName = styled.h3`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xlarge};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.base.subtitle};
	margin-bottom: 0.5rem;
	line-height: 1.3;
`;

export const CoffeeDescription = styled.p`
	font-size: ${({ theme }) => theme.typography.size.medium};
	color: ${({ theme }) => theme.colors.base.label};
	line-height: 1.3;
	margin-bottom: 2rem;
`;

export const CoffeePriceContainer = styled.div`
	display: flex;
	align-items: baseline;
	gap: 0.125rem;
`;

export const PriceLabel = styled.span`
	font-size: ${({ theme }) => theme.typography.size.medium};
	color: ${({ theme }) => theme.colors.base.text};
	font-weight: ${({ theme }) => theme.typography.weight.regular};
`;

export const PriceValue = styled.span`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xxlarge};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.base.text};
`;

export const CoffeeActionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 1rem;
`;

// Estilos para variante checkout
export const CheckoutCoffeeCard = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1.25rem;
	padding: 1.5rem 0.25rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
`;

export const CheckoutCoffeeImage = styled.img`
	width: 4rem;
	height: 4rem;
	object-fit: cover;
`;

export const CheckoutCoffeeContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.5rem;
`;

export const CheckoutCoffeeHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 0.5rem;
`;

export const CheckoutCoffeeInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const CheckoutCoffeeTitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.large};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const CheckoutCoffeePrice = styled.div`
	font-size: ${({ theme }) => theme.typography.size.large};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.base.text};
`;

export const CheckoutCoffeeActions = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
