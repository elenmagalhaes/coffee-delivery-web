import { NavLink } from 'react-router-dom'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Tag } from '../../components/Tag'
import {
  CatalogContainer,
  CatalogHeader,
  CatalogList,
  CoffeeCard,
  TagContainer,
  CardFooter,
} from './styles'
import { theme } from '../../styles/theme'
import { PRODUCTS_CATALOG, FILTER_LIST_ITEMS } from '../../constants'
import { Banner } from '../../components/Banner'

export const Home = () => {
  const handleDecreaseAmount = () => console.log('diminui quantidade')
  const handleIncreaseAmount = () => console.log('aumenta quantidade')
  return (
    <>
      <Banner />
      <CatalogContainer>
        <CatalogHeader>
          <h2>Nossos cafés</h2>
          <div className="filter-list">
            {FILTER_LIST_ITEMS.map((item) => {
              return <Tag key={item} value={item} />
            })}
          </div>
        </CatalogHeader>
        <CatalogList>
          {PRODUCTS_CATALOG.map((product) => {
            return (
              <CoffeeCard key={product.id} className="product-item">
                <img src={product.image} alt="" />
                <TagContainer>
                  {product.tags &&
                    product.tags.map((tag: string) => {
                      return (
                        <Tag
                          key={tag}
                          value={tag}
                          backgroundColor={theme.color['yellow-100']}
                        />
                      )
                    })}
                </TagContainer>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <CardFooter>
                  <div className="price-container">
                    <span>R$</span>
                    <div>{product.price}</div>
                  </div>
                  <div className="buy-container">
                    <div className="counter-container">
                      <Minus
                        size={16}
                        weight="fill"
                        color={theme.color['purple-500']}
                        onClick={handleDecreaseAmount}
                      />
                      1
                      <Plus
                        size={16}
                        weight="fill"
                        color={theme.color['purple-500']}
                        onClick={handleIncreaseAmount}
                      />
                    </div>
                    <NavLink to="/checkout">
                      <ShoppingCart size={22} weight="fill" color="white" />
                    </NavLink>
                  </div>
                </CardFooter>
              </CoffeeCard>
            )
          })}
        </CatalogList>
      </CatalogContainer>
    </>
  )
}
