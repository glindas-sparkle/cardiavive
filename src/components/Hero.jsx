import React from 'react'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Founded by a Cardiac Surgeon &amp; Nurse Practitioner
        </div>
        <h1 className="hero-h1">
          Cardiac Care,<br />
          <em>Between Every Visit</em>
        </h1>
        <p className="hero-tagline">Bridging the Gap in Care.</p>
        <p className="hero-desc">
          Cardiavive is an AI-powered Remote Patient Monitoring and telemedicine platform that acts as
          the between-visit clinical extension team your cardiac patients always needed — and your
          practice could never staff. We monitor, co-manage, and connect, so nothing falls through the gap.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Request a Demo</a>
          <a href="#how" className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L10 8L6.5 10.5" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            How It Works
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">AI-RPM</div>
            <div className="hero-stat-label">Powered Monitoring</div>
          </div>
          <div>
            <div className="hero-stat-num">$0</div>
            <div className="hero-stat-label">Cost to Partners</div>
          </div>
          <div>
            <div className="hero-stat-num">MD + NP</div>
            <div className="hero-stat-label">Clinician-Founded</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="float-card float-card-1">
          <div className="float-label">Weight Trend</div>
          <div className="float-val" style={{ color: '#E07020' }}>+2.1 lbs ↑</div>
        </div>
        <div className="float-card float-card-2">
          <div className="float-label">Care Team Action</div>
          <div className="float-val" style={{ color: '#0AA060', fontSize: '14px' }}>Diuretic adjusted ✓</div>
        </div>
        <div className="monitor-card">
          <div className="monitor-header">
            <div className="monitor-patient">
              <div className="monitor-avatar">RM</div>
              <div>
                <div className="monitor-patient-name">Robert M. — Post-Op Day 14</div>
                <div className="monitor-patient-id">Cardiac Surgery · Remote Session</div>
              </div>
            </div>
            <div className="monitor-live">
              <span className="live-dot" /> Live
            </div>
          </div>
          <div className="session-bar">
            <div className="session-label">Today's Reading · 8:17 AM</div>
            <div className="session-row">
              <span className="session-text">Device placed · Reading captured</span>
              <span className="session-ok">✓ Transmitted</span>
            </div>
            <div className="session-progress">
              <div className="session-progress-fill" />
            </div>
          </div>
          <div className="vitals-grid">
            <div className="vital-card">
              <div className="vital-icon">🩸</div>
              <div className="vital-value">142<span>/90</span></div>
              <div className="vital-name">Blood Pressure</div>
              <div className="vital-warn">↑ Elevated</div>
            </div>
            <div className="vital-card">
              <div className="vital-icon">❤️</div>
              <div className="vital-value">78<span> bpm</span></div>
              <div className="vital-name">Heart Rate</div>
              <div className="vital-ok">▲ Normal</div>
            </div>
            <div className="vital-card">
              <div className="vital-icon">⚖️</div>
              <div className="vital-value">194<span> lbs</span></div>
              <div className="vital-name">Weight</div>
              <div className="vital-warn">↑ +2.1 lbs</div>
            </div>
          </div>
          <div className="monitor-footer">
            <div className="monitor-footer-text">Clinician reviewing · BP &amp; fluid flagged</div>
            <button className="monitor-btn">View Trend History</button>
          </div>
        </div>
      </div>
    </section>
  )
}
