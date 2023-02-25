import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import {
  BadgeShippingCart,
  HeaderContainer,
  HeaderInfo,
  LocationTag,
} from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { theme } from '../../styles/theme'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={logo} alt="Logotipo do Coffee Delivery" />
      </NavLink>
      <HeaderInfo>
        <LocationTag>
          <MapPin size={22} weight="fill" color={theme.color['purple-900']} />
          <span>São Paulo, SP</span>
        </LocationTag>
        <NavLink to="/checkout" title="Carrinho de compras">
          <ShoppingCart
            size={22}
            weight="fill"
            color={theme.color['yellow-900']}
          />
          <BadgeShippingCart className="badge">3</BadgeShippingCart>
        </NavLink>
      </HeaderInfo>
    </HeaderContainer>
  )
}
