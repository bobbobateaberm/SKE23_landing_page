import { useState } from 'react'

function Footer() {


  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h2><span className='text-blue-500'>SKE23</span></h2>
          <p>Sites where holds community and memories all together...</p>
        </div>

        <div className="footer-section">
          <h4>Explore</h4>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <a href="#">Email</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SKE23 · All rights reserved
      </div>
    </footer>
  )
}

export default Footer
