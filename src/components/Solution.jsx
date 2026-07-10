import React from 'react'

const features = [
  {
    icon: '/icon-ai-rpm.png',
    title: 'AI-Powered RPM',
    desc: 'Patients use their Cardiavive device at home to capture blood pressure, heart rate, and weight. Our AI analyzes every reading in real time — identifying trends and flagging concerns before they escalate.',
    accent: false,
  },
  {
    icon: '/icon-clinical-co-management.png',
    title: 'Clinical Co-Management',
    desc: "Cardiavive's clinical team supports medication adjustments and care decisions between visits — keeping referring cardiologists and PCPs fully informed and in control at every step.",
    accent: true,
    badge: '★ Zero Cost to Partners',
  },
  {
    icon: '/icon-integrated-telemedicine.png',
    title: 'Integrated Telemedicine',
    desc: 'When action is needed, patients and care teams connect instantly through our built-in telemedicine platform — timely care, right when it counts, without waiting for the next scheduled visit.',
    accent: false,
  },
  {
    icon: '/icon-bp-heartrate.png',
    title: 'BP & Heart Rate Monitoring',
    desc: 'Longitudinal blood pressure and heart rate trends give clinicians the data to optimize therapy between visits — critical for post-surgical, post-MI, hypertensive, and heart failure patients.',
    accent: false,
  },
  {
    icon: '/icon-weight-fluid.png',
    title: 'Weight & Fluid Management',
    desc: 'Daily weight is the earliest indicator of fluid retention. Cardiavive flags concerning weight trends before they become hospitalizations — especially vital in heart failure and post-surgical patients.',
    accent: false,
  },
]

export default function Solution() {
  return (
    <section id="solution">
      <div style={{ maxWidth: '640px' }}>
        <div className="section-label">Our Solution</div>
        <h2 className="section-title">Three Capabilities.<br /><em>One Seamless Platform.</em></h2>
        <p className="section-sub">
          Cardiavive combines AI-powered monitoring, clinical co-management, and integrated telemedicine.
        </p>
      </div>
      <div className="features-grid">
        {features.map((f) => (
          <div className={`feature-card${f.accent ? ' accent' : ''}`} key={f.title}>
            <div className="feature-icon-wrap">
              <img
                src={f.icon}
                alt={f.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
            {f.badge && <div className="medicare-badge">{f.badge}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
