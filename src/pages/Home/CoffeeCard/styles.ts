import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 16rem;
  height: 19.47rem;
  padding: 1.25rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.color['gray-100']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    min-width: 7.5rem;
    margin-top: -3rem;
  }

  h3 {
    font-family: ${(props) => props.theme.typography.font.secondary};
    font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-800']};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-600']};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.25rem;
  row-gap: 0.25rem;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-800']};

    span {
      font-size: 0.875rem;
    }

    div {
      font-family: ${(props) => props.theme.typography.font.secondary};
      font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
      font-size: 2rem;
      color: ${(props) => props.theme.color['gray-700']};
    }
  }

  .buy-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    a {
      background: ${(props) => props.theme.color['purple-900']};
      border-radius: 6px;
      padding: 0.5rem;

      svg {
        display: flex;
      }

      &:not(&.disabled):hover {
        background: ${(props) => props.theme.color['purple-500']};
      }

      &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        background: ${(props) => props.theme.color['purple-100']};
      }
    }
  }

  .counter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-300']};
    color: ${(props) => props.theme.color['gray-900']};

    button.decrease-content {
      background: transparent;
      border: 0;
      padding: 0.75rem 0.25rem 0.75rem 0.5rem;
      cursor: pointer;
    }

    button.increase-content {
      background: transparent;
      border: 0;
      padding: 0.75rem 0.5rem 0.75rem 0.25rem;
      cursor: pointer;
    }

    span {
      width: 1.25rem;
      text-align: center;
    }

    svg {
      display: flex;
    }

    button:hover {
      svg {
        fill: ${(props) => props.theme.color['purple-900']};
      }
    }

    button:focus {
      outline: none;
      box-shadow: none;
    }
  }
`
