import { theme } from '@/theme/theme'
import 'styled-components'

type ThemeType = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
