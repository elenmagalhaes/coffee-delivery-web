import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/Main/index'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Main />
	</StrictMode>,
)
