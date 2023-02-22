import { Tag } from '../../components/Tag'
import { CatalogContainer, CatalogHeader, CatalogList } from './styles'
import { PRODUCTS_CATALOG, FILTER_LIST_ITEMS } from '../../constants'
import { Banner } from '../../components/Banner'
import { CoffeeCard } from './CoffeeCard'
import { useState } from 'react'
import { Product } from './CoffeeCard/types'

export const Home = () => {
  const [filteredList, setFilteredList] = useState<Product[]>(PRODUCTS_CATALOG)

  const filterProductsList = (value: string) => {
    const productsListFiltered: Product[] = PRODUCTS_CATALOG.filter(
      (product) => {
        return product.tags.includes(value)
      },
    )
    setFilteredList(productsListFiltered || [])
  }

  return (
    <>
      <Banner />
      <CatalogContainer>
        <CatalogHeader>
          <h2>Nossos cafés</h2>
          <div className="filter-container">
            {FILTER_LIST_ITEMS.map((item) => {
              return (
                <Tag
                  key={item}
                  value={item}
                  onFilterList={filterProductsList}
                />
              )
            })}
          </div>
        </CatalogHeader>
        <CatalogList>
          {filteredList &&
            filteredList.map((product) => {
              return <CoffeeCard key={product.id} product={product} />
            })}
        </CatalogList>
      </CatalogContainer>
    </>
  )
}
