import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  CatalogContainer,
  FilterList,
  CatalogHeader,
  FilterItem,
  CatalogList,
  CoffeeCard,
  TagContainer,
  CoffeTitle,
  CoffeDescription,
  PriceContainer,
  BuyContainer,
  Price,
  QuantityCounter,
} from './styles'
import CoffeeTraditional from '../../assets/img/coffee-tradicional.svg'
import { theme } from '../../styles/theme'

export const Home = () => {
  return (
    <CatalogContainer>
      <CatalogHeader>
        <h2>Nossos cafés</h2>
        <FilterList>
          <FilterItem>tradicional</FilterItem>
          <FilterItem>especial</FilterItem>
          <FilterItem>com leite</FilterItem>
          <FilterItem>alcoólico</FilterItem>
          <FilterItem>gelado</FilterItem>
        </FilterList>
      </CatalogHeader>
      <CatalogList className="catalog-list">
        <CoffeeCard className="product-item">
          <img src={CoffeeTraditional} alt="" />
          <TagContainer>
            <FilterItem>tradicional</FilterItem>
            <FilterItem>expresso</FilterItem>
          </TagContainer>
          <CoffeTitle>Expresso tradicional</CoffeTitle>
          <CoffeDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeDescription>
          <PriceContainer>
            <Price>
              <span>R$</span>
              <div>9,90</div>
            </Price>
            <BuyContainer className="quantity">
              <QuantityCounter>
                <Minus
                  size={16}
                  weight="fill"
                  color={theme.color['purple-500']}
                />
                1
                <Plus
                  size={16}
                  weight="fill"
                  color={theme.color['purple-500']}
                />
              </QuantityCounter>
              <NavLink to="/checkout">
                <ShoppingCart size={22} weight="fill" color="white" />
              </NavLink>
            </BuyContainer>
          </PriceContainer>
        </CoffeeCard>
      </CatalogList>
    </CatalogContainer>
  )
}
