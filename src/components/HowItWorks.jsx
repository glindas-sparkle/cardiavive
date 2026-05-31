import React from 'react'

const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Patient Referral',
    desc: 'Cardiologists, PCPs, and hospital systems refer cardiac patients to Cardiavive at discharge or between visits — no contracts, no cost to your practice.',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Device Delivery',
    desc: 'Patients receive their Cardiavive monitoring device at home at no cost. When ready, they place the device and capture their BP, heart rate, and weight.',
  },
  {
    num: '03',
    icon: '🤖',
    title: 'AI Analysis',
    desc: 'Every reading is analyzed by our AI in real time — identifying trends, flagging concerns, and surfacing the right information to Cardiavive\'s clinical team instantly.',
  },
  {
    num: '04',
    icon: '🩺',
    title: 'Clinical Co-Management',
    desc: 'Cardiavive\'s clinicians support medication adjustments and care decisions between visits — keeping the referring provider informed and in control at all times.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="how-header">
        <div className="section-label">The Process</div>
        <h2 className="section-title">How <em>Cardiavive</em> Works</h2>
        <p className="section-sub">
          From referral to clinical co-management — Cardiavive becomes the seamless clinical
          extension of your care team, keeping every cardiac patient supported between every visit.
        </p>
      </div>
      <div className="steps-track">
        {steps.map((step) => (
          <div className="step" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
