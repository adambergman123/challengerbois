import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import NavBar from './Components/NavBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './Components/Home/Home'
import Test from './Components/Test'
import Highlights from './Components/Highlights/Highlights'
import About from './Components/About/About'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: red[100],
    },
  },
})

const Application = styled.div`
  //remove this css
  margin-top: 80px;
`

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location.pathname])

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Application>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              {/* Ovanstående nödvändigt för att framer motion page transtion skulle fungera som det ska */}
              <Route exact path='/' component={Home} />
              <Route path='/test' component={Test} />
              <Route path='/highlights' component={Highlights} />
              <Route path='/about' component={About} />
            </Switch>
            {/*<TiltComponent />*/}
          </AnimatePresence>
        </Application>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
