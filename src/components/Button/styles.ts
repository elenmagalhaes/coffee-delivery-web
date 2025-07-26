import styled from "styled-components";
type BrandColor = 'yellow' | 'yellowDark' | 'yellowLight' | 'purple' | 'purpleDark' | 'purpleLight';
export const CartButtonBase = styled.button.withConfig({
	shouldForwardProp: (prop) => prop !== 'backgroundColor',
}) <{ full?: boolean; backgroundColor?: BrandColor }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, full, backgroundColor }) =>
		backgroundColor
			? theme.colors.brand[backgroundColor]
			: full
				? theme.colors.brand.yellowDark
				: theme.colors.brand.yellow};
  color: ${({ theme }) => theme.colors.base.white};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;

  &:hover:not(:disabled) {
    background: ${({ theme, backgroundColor }) =>
		backgroundColor
			? theme.colors.brand[backgroundColor]
			: theme.colors.brand.yellowDark};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
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
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 0 6px;
  z-index: 1;
`;

export const ButtonPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.colors.brand.yellow};
  color: ${({ theme }) => theme.colors.base.white};
  font-size: ${({ theme }) => theme.typography.size.medium};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.brand.yellowDark};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonPurple = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.colors.brand.purple};
  color: ${({ theme }) => theme.colors.base.white};
  font-size: ${({ theme }) => theme.typography.size.medium};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.brand.purpleDark};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonRemove = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  height: 40px;
  padding: 0 16px;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  font-size: ${({ theme }) => theme.typography.size.xsmall};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.brand.purple};
    font-size: 1rem;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.base.hover};
    color: ${({ theme }) => theme.colors.base.subtitle};
    svg {
      color: ${({ theme }) => theme.colors.brand.purpleDark};
    }
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
