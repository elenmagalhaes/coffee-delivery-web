import styled from "styled-components";

export const RemoveButtonContainer = styled.button`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	height: 2.375rem;
	padding: 0 0.5rem;
	border: none;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.base.button};
	color: ${({ theme }) => theme.colors.base.text};
	font-size: ${({ theme }) => theme.typography.size.xsmall};
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
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
