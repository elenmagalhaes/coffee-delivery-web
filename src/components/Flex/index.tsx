import styled from "styled-components";

interface IStyle {
	direction?: 'row' | 'column';
	justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
	align?: 'flex-start' | 'center' | 'flex-end';
	gap?: string;
	width?: string;
}

export const Flex = styled.div<IStyle>`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justify }) => justify || 'center'};
	align-items: ${({ align }) => align || 'center'};
	gap: ${({ gap }) => gap || '0'};
	width: ${({ width }) => width || 'auto'};
`;
