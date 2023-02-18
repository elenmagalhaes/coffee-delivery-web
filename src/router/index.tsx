import { Route, Routes } from 'react-router-dom'
import { WrapperLayout } from '../layouts/WrapperLayout'
import { Checkout } from '../pages/Checkout'
import { CheckoutSuccess } from '../pages/CheckoutSuccess'
import { Home } from '../pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WrapperLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  )
}
