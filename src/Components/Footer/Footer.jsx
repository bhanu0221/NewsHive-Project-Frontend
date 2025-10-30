import React from 'react'
import '../Footer/Footer.css';
function Footer() {
  return (
    <footer className='footer'>
      <p>© 2025 <strong>Daily NewsHive</strong>. All rights reserved.</p>
      <p>"Daily news platform bringing you the latest headlines with accuracy and clarity."</p>
      <strong>Created by Anup shahi</strong>

      <div className="footer-links">


        <a
          href="https://github.com/bhanu0221"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/anup-shahi-50486530a"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
