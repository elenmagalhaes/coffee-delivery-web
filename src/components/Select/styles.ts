import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
  height: 32px;
  padding: 0 8px;
  gap: 4px;
`;

export const SelectButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.brand.purple};
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.base.hover};
    color: ${({ theme }) => theme.colors.brand.purpleDark};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SelectValue = styled.span`
  min-width: 16px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.medium};
  color: ${({ theme }) => theme.colors.base.title};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
`;
