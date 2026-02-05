import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Section from './Components/Section.jsx'
import Article from './Components/Article.jsx'
import Aside from './Components/Aside.jsx'
import Article2 from './Components/Article2.jsx'
import Footer from './Components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  
<App />
    <Section />
  
    <Aside />
    <Article />
    <Article2 />

    <Footer />
 

  </StrictMode>,
)
