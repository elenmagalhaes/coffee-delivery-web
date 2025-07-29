import styled from "styled-components";

interface IStyle {
	height?: string;
	gap?: string;
	borderRadius?: string;
	colorType?: "base" | "brand";
	color?: string;
	selected?: boolean;
}

interface IInput {
	width?: string;
}

export const PageContainer = styled.main`
	display: flex;
	flex-direction: column;
`;

export const Container = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 2.5rem 10rem;
	gap: 2rem;
`;

export const Title = styled.div`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xlarge};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 1rem;
`;

export const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	gap: 1rem;
`;

export const Sections = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const Card = styled.div.withConfig({
	shouldForwardProp: (prop) => !['height', 'borderRadius'].includes(prop),
}) <IStyle>`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	background-color: ${({ theme }) => theme.colors.base.card};
	height: ${({ height }) => height || "auto"};
	border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
	gap: ${({ gap }) => gap || "0"};
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const CardTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const CardTitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.large};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const CardSubtitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.medium};
	color: ${({ theme }) => theme.colors.base.text};
`;

export const SectionContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;

export const Input = styled.input.withConfig({
	shouldForwardProp: (prop) => prop !== 'width',
}) <IInput>`
	height: 2.625rem;
	padding: 0.75rem;
	border-radius: 0.75rem;
	width: ${({ width }) => width || "100%"};
	color: ${({ theme }) => theme.colors.base.text};
	border: 1px solid ${({ theme }) => theme.colors.base.button};
	background-color: ${({ theme }) => theme.colors.base.input};

	&::placeholder {
		color: ${({ theme }) => theme.colors.base.label};
	}

	&:focus {
		border-color: ${({ theme }) => theme.colors.brand.yellowDark};
		outline: none;
	}
`;

export const PaymentSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.75rem;
`;

export const PaymentCard = styled.button.withConfig({
	shouldForwardProp: (prop) => !['colorType', 'color', 'selected'].includes(prop),
}) <IStyle & { selected?: boolean }>`
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.typography.fonts.text};
	font-size: ${({ theme }) => theme.typography.size.xsmall};
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	background-color: ${({ theme, selected }) =>
		selected ? theme.colors.brand.purpleLight : theme.colors.base.button};
	color: ${({ theme }) => theme.colors.base.text};
	text-transform: uppercase;
	border: ${({ theme, selected }) =>
		selected ? `1px solid ${theme.colors.brand.purple}` : "1px solid transparent"};
	padding: 1rem;
	border-radius: 0.375rem;
	gap: 0.75rem;
	flex: 1;
	cursor: pointer;
	transition: all 0.2s ease;
	min-height: 3.1875rem;

	&:hover:not(:disabled) {
		background-color: ${({ theme }) => theme.colors.base.hover};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand.purple};
	}

	svg {
		color: ${({ theme }) => theme.colors.brand.purple};
	}
`;

export const ButtonContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	gap: 0.75rem;
`;

export const CancelButton = styled.button`
	flex: 1;
	height: 2.875rem;
	border: none;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.base.label};
	color: ${({ theme }) => theme.colors.base.white};
	font-size: ${({ theme }) => theme.typography.size.medium};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-transform: uppercase;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.base.hover};
	}
`;

export const ConfirmButton = styled.button`
	flex: 1;
	height: 2.875rem;
	border: none;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.brand.yellow};
	color: ${({ theme }) => theme.colors.base.white};
	font-size: ${({ theme }) => theme.typography.size.medium};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-transform: uppercase;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.brand.yellowDark};
	}
`;