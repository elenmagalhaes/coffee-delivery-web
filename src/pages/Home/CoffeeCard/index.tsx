import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Tag } from '../../../components/Tag'
import { theme } from '../../../styles/theme'
import { CardContainer, CardFooter, TagContainer } from './styles'
import { CoffeCardProps } from './types'

export const CoffeeCard = ({ product }: CoffeCardProps) => {
  const [coffee, setCoffee] = useState(product)

  const handleIncreaseAmount = () => {
    setCoffee((state) => {
      return {
        ...state,
        amount: coffee.amount + 1,
      }
    })
  }

  const handleDecreaseAmount = () => {
    setCoffee((state) => {
      return {
        ...state,
        amount: state.amount !== 0 ? state.amount - 1 : state.amount,
      }
    })
  }

  const isAmountZero = coffee.amount === 0 ? 'disabled' : ''

  return (
    <CardContainer>
      <img src={coffee.image} />
      <TagContainer>
        {coffee.tags &&
          coffee.tags.map((tag: string) => {
            return (
              <Tag
                key={tag}
                value={tag}
                backgroundColor={theme.color['yellow-100']}
              />
            )
          })}
      </TagContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CardFooter>
        <div className="price-container">
          <span>R$</span>
          <div>{product.price}</div>
        </div>
        <div className="buy-container">
          <div className="counter-container">
            <button type="button" className="decrease-content">
              <Minus
                size={16}
                weight="fill"
                color={theme.color['purple-500']}
                onClick={handleDecreaseAmount}
              />
            </button>
            <span>{coffee.amount}</span>
            <button type="button" className="increase-content">
              <Plus
                size={16}
                weight="fill"
                color={theme.color['purple-500']}
                onClick={handleIncreaseAmount}
              />
            </button>
          </div>
          <NavLink to="/checkout" className={isAmountZero}>
            <ShoppingCart size={22} weight="fill" color="white" />
          </NavLink>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
