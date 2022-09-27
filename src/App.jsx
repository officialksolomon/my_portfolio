import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Nav } from 'react-bootstrap'
import Home from './components/Home'
import Skills from './components/Skills'
import Navigation from './components/Navigation'
import Social from './components/Social/Social'
import Footer from './components/Footer/Footer'
import Works from './components/Works/Works'

function App () {
  const [count, setCount] = useState(0)

  return (
    <Container fluid className="m-0 p-0">
      <Navigation />
      <Home />
      <Skills />
      <Works />
      <Social />
      <Footer />
    </Container>
  )
}

export default App
