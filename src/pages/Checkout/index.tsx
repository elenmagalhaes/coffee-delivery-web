import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import coffeeImage from '../../assets/img/havaiano.svg'
import { theme } from '../../styles/theme'
import {
  Button,
  CartContainer,
  CheckoutContainer,
  CoffeeCell,
  FormContainer,
  InputItem,
  OrderCell,
} from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h4>Complete seu pedido</h4>
        <form action="">
          <div className="address-container">
            <MapPinLine size={22} color={theme.color['yellow-900']} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className="input-container">
            <InputItem type="text" className="cep" placeholder="CEP" />
            <InputItem type="text" className="address" placeholder="Rua" />
            <div className="address-info">
              <InputItem
                type="number"
                className="number"
                placeholder="Número"
              />
              <div className="complement-container">
                <InputItem
                  type="text"
                  className="complement"
                  placeholder="Complemento"
                />
                <em>Opcional</em>
              </div>
            </div>
            <div className="location-info">
              <InputItem
                type="text"
                className="neighborhood"
                placeholder="Bairro"
              />
              <InputItem type="text" className="city" placeholder="Cidade" />
              <InputItem type="text" className="uf" placeholder="UF" />
            </div>
          </div>
        </form>
        <div className="payment-method">
          <div className="payment-info">
            <CurrencyDollar size={22} color={theme.color['purple-500']} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </div>
          <div className="payment-methods-list">
            <div className="payment-card">
              <CreditCard size={16} color={theme.color['purple-500']} />
              <p>Cartão de crédito</p>
            </div>
            <div className="payment-card">
              <Bank size={16} color={theme.color['purple-500']} />
              <p>Cartão de débito</p>
            </div>
            <div className="payment-card">
              <Money size={16} color={theme.color['purple-500']} />
              <p>Dinheiro</p>
            </div>
          </div>
        </div>
      </FormContainer>
      <CartContainer>
        <h4>Cafés selecionados</h4>
        <section>
          <CoffeeCell>
            <img src={coffeeImage} />
            <div className="coffee-details">
              <p>Expresso Tradicional</p>
              <div className="buttons-container">
                <div className="amount-coffee">
                  <button type="button" className="decrease-content">
                    <Minus
                      size={16}
                      weight="fill"
                      color={theme.color['purple-500']}
                    />
                  </button>
                  <span>1</span>
                  <button type="button" className="increase-content">
                    <Plus
                      size={16}
                      weight="fill"
                      color={theme.color['purple-500']}
                    />
                  </button>
                </div>
                <div className="remove-coffee">
                  <Trash size={16} color={theme.color['purple-500']} />
                  <span>Remover</span>
                </div>
              </div>
            </div>
            <div className="unit-price">
              <span>R$ 9,90</span>
            </div>
          </CoffeeCell>
          <OrderCell>
            <div className="order-values">
              <p>Total de itens</p>
              <p className="price">R$ 29,70</p>
            </div>
            <div className="order-values">
              <p>Entrega</p>
              <p className="price">R$ 3,50</p>
            </div>
            <div className="order-values">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </OrderCell>
          <div className="submit-order">
            <Button type="button" className="cancel-btn">
              Cancelar
            </Button>
            <Button type="submit" className="confirm-btn">
              Confirmar pedido
            </Button>
          </div>
        </section>
      </CartContainer>
    </CheckoutContainer>
  )
}
