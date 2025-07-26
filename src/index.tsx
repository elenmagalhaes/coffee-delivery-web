import Main from '@/pages/Main/index'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Main />
	</StrictMode>,
)
