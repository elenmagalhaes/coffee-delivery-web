import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { theme } from './theme/theme';

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Wrapper from './components/Wrapper';
import CheckoutFilled from './pages/CheckoutFilled'

function App() {
  return (
   <ThemeProvider theme={theme}>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-filled" element={<CheckoutFilled />} />
        </Route>        
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
   </ThemeProvider>
  )
}

export default App
