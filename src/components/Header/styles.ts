import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 1024px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    background: ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color['off-white']};
    width: 100%;
    padding: 1rem 2rem;
    z-index: 1;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  a {
    position: relative;
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

export const BadgeShippingCart = styled.span`
  position: absolute;
  top: -0.375rem;
  right: -0.375rem;
  height: 1.25rem;
  width: 1.25rem;
  min-width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.theme.color['yellow-900']};
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  font-size: 0.75rem;
`
