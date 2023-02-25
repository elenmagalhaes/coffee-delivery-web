import styled from 'styled-components'

interface TagItemProps {
  backgroundColor?: string
}

export const TagItem = styled.div<TagItemProps>`
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: ${(props) => props.theme.typography.weight.bold};
  line-height: 130%;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color['yellow-500']};
  color: ${(props) => props.theme.color['yellow-900']};
  cursor: pointer;

  ${(props) =>
    props.backgroundColor &&
    `
      border: 0;
      color: ${(props: any) => props.theme.color['yellow-900']};
      background-color: ${props.backgroundColor};
    `}

  &:hover {
    color: ${(props: any) => props.theme.color['yellow-900']};
    background: ${(props: any) => props.theme.color['yellow-100']};
  }
`
