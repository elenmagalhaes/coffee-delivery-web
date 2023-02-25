import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin: 2.5rem 10rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;
  align-items: flex-start;

  h4 {
    font-family: ${(props) => props.theme.typography.font.secondary};
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`

export const FormContainer = styled.article`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 23.25rem;
    padding: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-100']};

    .address-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;

      h4 {
        font-family: ${(props) => props.theme.typography.font.primary};
        font-weight: ${(props) => props.theme.typography.weight.regular};
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.color['gray-800']};
      }

      p {
        margin-top: 0.125rem;
        font-family: ${(props) => props.theme.typography.font.primary};
        font-weight: ${(props) => props.theme.typography.weight.regular};
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme.color['gray-700']};
      }
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .address-info,
    .location-info {
      display: flex;
      justify-content: flex-start;
      gap: 0.75rem;
      width: 100%;

      .complement-container {
        position: relative;
        width: 100%;

        em {
          position: absolute;
          top: 0.95rem;
          right: 0.75rem;
          font-size: 0.75rem;
          color: ${(props) => props.theme.color['gray-600']};
        }
      }
    }
  }

  .payment-method {
    margin-top: 0.75rem;
    height: 12.93rem;
    padding: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-100']};

    .payment-info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;

      h4 {
        font-family: ${(props) => props.theme.typography.font.primary};
        font-weight: ${(props) => props.theme.typography.weight.regular};
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.color['gray-800']};
      }

      p {
        margin-top: 0.125rem;
        font-family: ${(props) => props.theme.typography.font.primary};
        font-weight: ${(props) => props.theme.typography.weight.regular};
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme.color['gray-700']};
      }
    }

    .payment-methods-list {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;

      .payment-card {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        border: 1px solid transparent;
        border-radius: 6px;
        background: ${(props) => props.theme.color['gray-300']};
        cursor: pointer;

        &:hover {
          border: 1px solid ${(props) => props.theme.color['purple-500']};
        }

        p {
          text-transform: uppercase;
          font-size: 0.75rem;
          line-height: 130%;
          color: ${(props) => props.theme.color['gray-700']};
        }

        svg {
          margin-bottom: 1px;
        }
      }
    }
  }
`

const InputBase = styled.input`
  height: 2.62rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color['gray-300']};
  color: ${(props) => props.theme.color['gray-700']};
  background: ${(props) => props.theme.color['gray-200']};

  &::placeholder {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-600']};
  }
`

export const InputItem = styled(InputBase)`
  &.address,
  &.complement {
    width: 100%;
  }

  &.number,
  &.neighborhood {
    width: 12.5rem;
  }

  &.city {
    width: 17.25rem;
  }

  &.uf {
    width: 3.75rem;
  }
`

export const CartContainer = styled.aside`
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 22rem;
    padding: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-100']};

    .submit-order {
      width: 100%;
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
  }
`

export const CoffeeCell = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color['gray-300']};
  background: ${(props) => props.theme.color['gray-100']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .coffee-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;

    p {
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.color['gray-800']};
    }

    .buttons-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      .amount-coffee {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.25rem;

        border-radius: 6px;
        background: ${(props) => props.theme.color['gray-300']};
        color: ${(props) => props.theme.color['gray-900']};

        button.decrease-content {
          background: transparent;
          padding: 0.5rem 0.25rem 0.5rem 0.5rem;
          border: 0;
          cursor: pointer;
        }

        button.increase-content {
          background: transparent;
          border: 0;
          padding: 0.5rem 0.5rem 0.5rem 0.25rem;
          cursor: pointer;
        }

        svg {
          display: flex;
        }

        span {
          width: 1.25rem;
          text-align: center;
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

      .remove-coffee {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem;
        border: 1px solid transparent;
        cursor: pointer;

        :hover {
          border: 1px solid ${(props) => props.theme.color['purple-500']};
        }

        text-transform: uppercase;
        border-radius: 6px;
        font-size: 0.75rem;
        line-height: 130%;
        background: ${(props) => props.theme.color['gray-300']};
        color: ${(props) => props.theme.color['gray-900']};

        span {
          text-align: center;
        }
      }
    }
  }

  .unit-price {
    flex: 1;
    font-size: 1rem;
    text-align: right;
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }

  & + div {
    margin-top: 1.5rem;
  }
`

export const OrderCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1.5rem;
  width: 100%;

  .order-values {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 130%;

    p {
      font-size: 0.875rem;
    }

    .price {
      font-size: 1rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }
`

export const Button = styled.button`
  border: 0;
  background: transparent;
  padding: 1rem;
  height: 2.87rem;
  color: ${(props) => props.theme.color.white};
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: ${(props) => props.theme.typography.weight.bold};
  cursor: pointer;

  &.cancel-btn {
    background: ${(props) => props.theme.color['gray-600']};
    flex: 1;

    :hover {
      background: ${(props) => props.theme.color['gray-700']};
    }
  }

  &.confirm-btn {
    background: ${(props) => props.theme.color['yellow-500']};

    :hover {
      background: ${(props) => props.theme.color['yellow-900']};
    }
  }
`
