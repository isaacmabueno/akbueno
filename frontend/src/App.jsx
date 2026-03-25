import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import theme from './theme'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Painting from './pages/Painting'
import Drawing from './pages/Drawing'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 10 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
