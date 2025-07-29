import styled from "styled-components";

interface IStyle {
	fontFamily?: 'title' | 'text';
	color?: 'title' | 'subtitle' | 'text' | 'label' | 'hover' | 'button' | 'input' | 'card' | 'background' | 'white' | 'yellow' | 'yellowDark' | 'yellowLight' | 'purple' | 'purpleDark' | 'purpleLight';
	size?: 'small' | 'xsmall' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'huge' | 'xhuge' | 'xxhuge';
	weight?: 'regular' | 'bold' | 'extrabold';
	lineHeight?: 'normal' | 'expanded';
}

const getColor = (color: string, theme: any) => {
	// Cores da base
	if (theme.colors.base[color]) {
		return theme.colors.base[color];
	}
	// Cores da brand
	if (theme.colors.brand[color]) {
		return theme.colors.brand[color];
	}
	// Fallback para cor padrão
	return theme.colors.base.text;
};

export const Typography = styled.span.withConfig({
	shouldForwardProp: (prop) => !['fontFamily', 'color', 'size', 'weight', 'lineHeight'].includes(prop),
}) <IStyle>`
	font-family: ${({ fontFamily, theme }) =>
		fontFamily ? theme.typography.fonts[fontFamily] : theme.typography.fonts.text
	};
	color: ${({ color, theme }) =>
		color ? getColor(color, theme) : theme.colors.base.text
	};
	font-size: ${({ size, theme }) =>
		size ? theme.typography.size[size] : theme.typography.size.medium
	};
	font-weight: ${({ weight, theme }) =>
		weight ? theme.typography.weight[weight] : theme.typography.weight.regular
	};
	line-height: ${({ lineHeight, theme }) =>
		lineHeight ? theme.typography.lineHeight[lineHeight] : theme.typography.lineHeight.normal
	};
`;
