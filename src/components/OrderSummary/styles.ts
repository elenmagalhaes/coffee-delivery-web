import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding-top: 1.5rem;
	border-top: 1px solid ${({ theme }) => theme.colors.base.button};
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TotalRow = styled(Row)`
	margin-top: 0.75rem;
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
