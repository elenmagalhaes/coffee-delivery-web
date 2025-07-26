import styled from "styled-components";
import backgroundImage from "../../assets/background.svg";


interface IStyle {
	colorType?: 'base' | 'brand';
	color: string;
}


export const PageContainer = styled.main`
	display: flex;
	flex-direction: column;
`;

export const Banner = styled.section`
	background: url(${backgroundImage});
  background-size: cover;
  width: 100%;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3.5rem;
	padding: 5.75rem 10rem;
`;

export const TextSection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 4.125rem;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xxhuge};
	font-weight: ${({ theme }) => theme.typography.weight.extrabold};
	line-height: ${({ theme }) => theme.typography.lineHeight.normal};
	color: ${({ theme }) => theme.colors.base.title};
`;

export const Subtitle = styled.p`
	font-family: ${({ theme }) => theme.typography.fonts.text};
	font-size: ${({ theme }) => theme.typography.size.xxlarge};
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	line-height: ${({ theme }) => theme.typography.lineHeight.expanded};
	color: ${({ theme }) => theme.colors.base.subtitle};
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

// ...existing code...
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

export const CoffeesContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 10rem;
	gap: 2.125rem;
`;

export const CoffeesHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CoffeesTitle = styled.div`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xhuge};
	font-weight: ${({ theme }) => theme.typography.weight.extrabold};
	line-height: ${({ theme }) => theme.typography.lineHeight.normal};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const TagsContainer = styled.div`
	display: flex;
	gap : 0.5rem;
`;