import type { IGlobalProviderProps } from './types'

// import GlobalStyle from 'styles/index'
import theme from 'styles/theme'

import { ThemeProvider } from 'styled-components'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ThemeProvider theme={theme}>
    <>
      {/* <GlobalStyle /> */}

      {children}
    </>
  </ThemeProvider>
)

export default GlobalProvider
