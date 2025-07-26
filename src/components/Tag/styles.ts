import styled from "styled-components";

type BrandColor = 'yellow' | 'yellowDark' | 'yellowLight' | 'purple' | 'purpleDark' | 'purpleLight';
type BaseColor = 'white' | 'background' | 'card' | 'input' | 'button' | 'hover' | 'label' | 'text' | 'subtitle' | 'title';
type ColorVariant = BrandColor | BaseColor;
type TagVariant = 'default' | 'filled' | 'outlined';

interface TagContainerProps {
	variant?: TagVariant;
	color?: ColorVariant;
	active?: boolean;
	clickable?: boolean;
}

interface TagTextProps {
	variant?: TagVariant;
	color?: ColorVariant;
	active?: boolean;
}

const getColorValue = (theme: any, color: ColorVariant) => {
	// Cores do brand
	const brandColors: BrandColor[] = ['yellow', 'yellowDark', 'yellowLight', 'purple', 'purpleDark', 'purpleLight'];

	if (brandColors.includes(color as BrandColor)) {
		return theme.colors.brand[color as keyof typeof theme.colors.brand];
	}

	// Cores do base
	return theme.colors.base[color as keyof typeof theme.colors.base];
};

const getTagStyles = (variant: TagVariant = 'default', color: ColorVariant = 'yellow') => {
	const styles = {
		default: {
			background: 'transparent',
			border: 'yellowLight',
			textColor: 'yellowDark'
		},
		filled: {
			background: 'yellowLight',
			border: 'yellowLight',
			textColor: 'yellowDark'
		},
		outlined: {
			background: 'transparent',
			border: color,
			textColor: color
		}
	};

	return styles[variant];
}; export const TagContainer = styled.a.withConfig({
	shouldForwardProp: (prop) => !['variant', 'color', 'clickable', 'active'].includes(prop as string),
}) <TagContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.3125rem;
  padding: 0 0.5rem;
  border-radius: 100px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  background: ${({ theme, variant = 'default', color = 'yellow', active = false }) => {
		if (active) {
			return getColorValue(theme, 'yellowDark');
		}
		const styles = getTagStyles(variant, color);
		return styles.background === 'transparent'
			? 'transparent'
			: getColorValue(theme, styles.background as ColorVariant);
	}};
  border: 1px solid ${({ theme, variant = 'default', color = 'yellow', active = false }) => {
		if (active) {
			return getColorValue(theme, 'yellowDark');
		}
		const styles = getTagStyles(variant, color);
		return getColorValue(theme, styles.border as ColorVariant);
	}};
  text-decoration: none;
  gap: 0.25rem;
  transition: background 0.2s, border 0.2s, color 0.2s;
`;

export const TagText = styled.span.withConfig({
	shouldForwardProp: (prop) => !['variant', 'color', 'active'].includes(prop as string),
}) <TagTextProps>`
	font-size: ${({ theme }) => theme.typography.size.small};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-transform: uppercase;
	color: ${({ theme, variant = 'default', color = 'yellow', active = false }) => {
		if (active) {
			return getColorValue(theme, 'white');
		}
		const styles = getTagStyles(variant, color);
		return getColorValue(theme, styles.textColor as ColorVariant);
	}};
`;
