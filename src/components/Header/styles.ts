import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  a {
    border-radius: 6px;
    padding: 0.5rem;
    background: ${(props) => props.theme.color['yellow-100']};

    svg {
      display: flex;
    }
  }
`

export const LocationTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme.color['purple-100']};

  span {
    color: ${(props) => props.theme.color['purple-900']};
  }
`
