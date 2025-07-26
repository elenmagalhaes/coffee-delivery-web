import styled from "styled-components";

interface IStyle {
	config?: {
		backgroundColor?: string;
		backgroundColorType?: 'base' | 'brand';
		borderColor?: string;
		borderColorType?: 'base' | 'brand';
		color?: string;
		colorType?: 'base' | 'brand';
	};
}

export const TagContainer = styled.a<IStyle>`
	cursor: pointer;
	background: ${({ theme, config }) =>
		config?.backgroundColorType === 'brand'
			? theme.colors.brand[config?.backgroundColor as keyof typeof theme.colors.brand]
			: theme.colors.base[config?.backgroundColor as keyof typeof theme.colors.base]
	};
	border: 1px solid ${({ theme, config }) => config?.borderColorType === 'brand'
		? theme.colors.brand[config?.borderColor as keyof typeof theme.colors.brand]
		: theme.colors.base[config?.borderColor as keyof typeof theme.colors.base]
	};
	padding: 0.25rem 0.75rem;
	border-radius: 6.25rem;
`;

export const TagText = styled.span<IStyle>`
	font-size: ${({ theme }) => theme.typography.size.small};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-transform: uppercase;
	color: ${({ theme, config }) =>
		config?.colorType === 'brand'
			? theme.colors.brand[config?.color as keyof typeof theme.colors.brand]
			: theme.colors.base[config?.color as keyof typeof theme.colors.base]
	};
`;
