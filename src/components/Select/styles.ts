import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.base.button};
  border-radius: 0.375rem;
  height: 2.375rem;
  padding: 0 0.5rem;
  gap: 0.25rem;
`;

export const SelectButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.brand.purple};
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
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
  min-width: 1.25rem;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.medium};
  color: ${({ theme }) => theme.colors.base.title};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
`;
