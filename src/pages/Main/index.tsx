import { GlobalStyle } from '@/styles';
import { theme } from '@/theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Wrapper from '@/components/Wrapper';
import Checkout from '@/pages/Checkout';
import CheckoutFilled from '@/pages/CheckoutFilled';
import Home from '@/pages/Home';

function Main() {
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

export default Main
