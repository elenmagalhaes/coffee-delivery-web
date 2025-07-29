import styled from "styled-components";
import backgroundImage from "/assets/background.svg";

interface IStyle {
	colorType?: 'base' | 'brand';
	color: string;
}

export const PageContainer = styled.main`
	display: flex;
	flex-direction: column;
`;

export const Container = styled.section`
	background: url(${backgroundImage});
  background-size: cover;
`;

export const Banner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5.75rem 10rem;
	gap: 3.5rem;
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 4.125rem;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Features = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.25rem;
	
	> div {
		flex: 1 1 calc(50% - 0.625rem);
	}
`;

export const Feature = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const FeatureIcon = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== 'colorType',
}) <IStyle>`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  background: ${({ theme, colorType = 'base', color }) =>
		colorType === 'brand'
			? theme.colors.brand[color as keyof typeof theme.colors.brand]
			: theme.colors.base[color as keyof typeof theme.colors.base]
	};
`;

export const FeatureText = styled.span`
	font-size: ${({ theme }) => theme.typography.size.large};
`;

export const ImageSection = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`;

export const CoffeesContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2rem 10rem;
	gap: 3.5rem;
`;

export const CoffeesHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FiltersContainer = styled.div`
	display: flex;
	gap : 0.5rem;
`;

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  justify-content: flex-start;
  gap: 2.5rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 6px 36px;
  width: 17rem;
  height: 19.37rem;
  background: ${({ theme }) => theme.colors.base.card};
  padding: 1.25rem 1.5rem;

  img {
		margin-top: -3rem;
		display: block;
  }
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
`;

export const TagsContainer = styled.div`
	display: flex;
	gap: 0.25rem;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 0.5rem;
`;


export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	width: 100%;
`;

export const CardPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 0.25rem;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ProductCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;
