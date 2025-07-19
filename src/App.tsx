import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import ThreeDBackground from './components/ThreeDBackground'
import CursorFollower from './components/CursorFollower'

function App() {
  return (
    <>
      <ThreeDBackground>
        <CursorFollower />
        <Box position="relative" zIndex={1} minH="100vh" bg="background.dark">
          <Router>
            <Navbar />
            <Box as="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
            <Footer />
          </Router>
        </Box>
      </ThreeDBackground>
    </>
  )
}

export default App
