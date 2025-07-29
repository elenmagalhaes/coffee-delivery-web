import styled from "styled-components";

interface IStyle {
	colorType?: 'base' | 'brand';
	color: string;
}

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 5rem 10rem;
	width: 100%;
	min-height: 100vh;
	
	@media (max-width: 1200px) {
		padding: 3rem 2rem;
	}
	
	@media (max-width: 768px) {
		padding: 2rem 1rem;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 100%;
	gap: 6.375rem; /* 102px */
	margin-top: 2.5rem;
	
	@media (max-width: 1200px) {
		gap: 3rem;
		flex-direction: column;
		align-items: flex-start;
	}
	
	@media (max-width: 768px) {
		gap: 2rem;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 4.125rem;
	max-width: 30.75rem; /* 492px */
	
	img {
		width: 100%;
		height: auto;
		max-width: 30.75rem;
	}
	
	@media (max-width: 1200px) {
		max-width: 100%;
		align-items: center;
		
		img {
			max-width: 25rem;
		}
	}
	
	@media (max-width: 768px) {
		img {
			max-width: 20rem;
		}
	}
`;

export const Title = styled.div`
font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xhuge};
	font-weight: ${({ theme }) => theme.typography.weight.extrabold};
	color: ${({ theme }) => theme.colors.brand.yellowDark};
`;

export const Subtitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.xxlarge};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 32.875rem; /* 526px */
	min-width: 32.875rem;
	padding: 2.5rem;
	border-radius: 0.375rem 2.25rem;
	background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
	position: relative;
	
	&::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		right: 1px;
		bottom: 1px;
		background: ${({ theme }) => theme.colors.base.background};
		border-radius: calc(0.375rem - 1px) calc(2.25rem - 1px);
		z-index: 0;
	}
	
	> * {
		position: relative;
		z-index: 1;
	}
	
	@media (max-width: 1200px) {
		width: 100%;
		min-width: auto;
		max-width: 32.875rem;
	}
	
	@media (max-width: 768px) {
		padding: 2rem;
		gap: 1.5rem;
	}
`;

export const Circle = styled.div.withConfig({
	shouldForwardProp: (prop) => !["colorType", "color"].includes(prop),
}) <IStyle>`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	 background: ${({ theme, colorType = 'base', color }) =>
		colorType === 'brand'
			? theme.colors.brand[color as keyof typeof theme.colors.brand]
			: theme.colors.base[color as keyof typeof theme.colors.base]
	};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AddressItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
`;

export const AddressText = styled.div`
	font-size: ${({ theme }) => theme.typography.size.large};
	color: ${({ theme }) => theme.colors.base.text};
`;