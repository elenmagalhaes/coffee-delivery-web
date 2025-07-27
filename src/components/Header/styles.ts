import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 10rem;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const Location = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	border-radius: 0.375rem;
	padding: 0.625rem 0.5rem;
	color: ${({ theme }) => theme.colors.brand.purpleDark};
	background: ${({ theme }) => theme.colors.brand.purpleLight};
`;

export const LocationCity = styled.span`
	font-size: ${({ theme }) => theme.typography.size.medium};
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const Cart = styled.a`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	background: ${({ theme }) => theme.colors.brand.yellowLight};
	position: relative;
`;

export const CartBadge = styled.span`
	position: absolute;
	top: -8px;
	right: -8px;
	background: ${({ theme }) => theme.colors.brand.yellowDark};
	color: ${({ theme }) => theme.colors.base.white};
	border-radius: 50%;
	min-width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.typography.size.xsmall};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	padding: 0 6px;
	z-index: 1;
`;
