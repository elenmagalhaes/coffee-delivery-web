import styled from "styled-components";

interface IStyle {
	direction?: 'row' | 'column';
	justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
	align?: 'flex-start' | 'center' | 'flex-end';
	gap?: string;
	width?: string;
}

export const Flex = styled.div.withConfig({
	shouldForwardProp: (prop) => !['direction', 'justify', 'align', 'gap', 'width'].includes(prop),
}) <IStyle>`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ align }) => align || 'flex-start'};
	gap: ${({ gap }) => gap || '0'};
	width: ${({ width }) => width || 'auto'};
`;
