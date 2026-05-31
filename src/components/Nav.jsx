import React from 'react'

function NavLogo() {
  return (
    <svg className="nav-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="34" height="34" rx="8" fill="#FFFFFF" stroke="#0D8A9E" strokeWidth="1.5"/>
      <line x1="1" y1="18" x2="35" y2="18" stroke="#DDE8EC" strokeWidth="0.6"/>
      <path d="M2,18 L7,18 L10,12 L13,24 L16,7 L19,29 L22,18 L27,18 L30,14 L34,18"
        stroke="#0A5E6E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="16" cy="7" r="2.2" fill="#D93050"/>
    </svg>
  )
}

export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <NavLogo />
        <span className="nav-logo-text">CARDI<span>AVIVE</span></span>
      </a>
      <ul className="nav-links">
        <li><a href="#how">How It Works</a></li>
        <li><a href="#solution">Our Solution</a></li>
        <li><a href="#serve">Who We Serve</a></li>
        <li><a href="#founders">Our Founders</a></li>
        <li><a href="#contact" className="nav-cta">Get Started</a></li>
      </ul>
    </nav>
  )
}
