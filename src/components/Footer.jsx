import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-logo">CARDI<span>AVIVE</span></div>
        <div style={{ marginTop: '5px', fontSize: '11px', letterSpacing: '1px', color: 'rgba(255,255,255,0.3)' }}>
          cardiavive.com
        </div>
      </div>
      <div style={{ textAlign: 'center', lineHeight: '1.9' }}>
        AI-Powered Remote Patient Monitoring &amp; Telemedicine &nbsp;·&nbsp; HIPAA Compliant
        <br />
        Founded by Dr. Konstadinos Plestis, MD &amp; Jacqueline McGee, NP, MBA
      </div>
      <div>
        <div style={{ display: 'flex', gap: '22px', marginBottom: '6px', justifyContent: 'flex-end' }}>
          <a href="#">Privacy</a>
          <a href="#">HIPAA</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        <div>© 2026 Cardiavive. All rights reserved.</div>
      </div>
    </footer>
  )
}
