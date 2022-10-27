import { ThemeProvider } from 'styled-components'
import { Router } from './routes/routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Router />
    </ThemeProvider>
  )
}

export default App
