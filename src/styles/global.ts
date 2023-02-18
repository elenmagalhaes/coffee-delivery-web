import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${(props) => props.theme.color['purple-500']};
    }

    body {
        background: var(--off-white);
        color: ${(props) => props.theme.color['gray-700']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${(props) => props.theme.typography.font.primary};
        font-weight: ${(props) => props.theme.typography.weight.regular};
        font-size: 1rem;
    }
`
