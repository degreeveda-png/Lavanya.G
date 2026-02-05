import React from 'react'
import '../Components/Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="fade-in">
      <p>© {new Date().getFullYear()} Veda Colleges. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
