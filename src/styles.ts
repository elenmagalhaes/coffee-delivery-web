import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: ${props => props.theme.typography.fonts.text};
		font-size: ${props => props.theme.typography.size.medium};
		background-color: ${props => props.theme.colors.base.background};
		font-weight: ${props => props.theme.typography.weight.regular};
		line-height: ${props => props.theme.typography.lineHeight.normal};
		color: ${props => props.theme.colors.base.text};
	}
`;