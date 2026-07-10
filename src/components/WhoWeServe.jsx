import React from 'react'

const cards = [
  {
    cls: 'patients',
    title: 'Patients',
    desc: "Referred by your doctor, you receive a Cardiavive monitoring device at no cost. Use it at home on your own schedule — and let our clinical team support your care between every visit. Whether you're recovering from cardiac surgery, healing post-MI, managing blood pressure, or living with heart failure, Cardiavive is watching over you.",
    tag: 'No Cost to Patients',
  },
  {
    cls: 'cardios',
    title: 'Cardiologists & PCPs',
    desc: 'Refer patients to Cardiavive at no cost and with no contracts. We monitor, support medication adjustments, and keep you informed — acting as a trusted clinical partner in your patients\' care between every visit, without adding a single burden to your team or schedule.',
    tag: 'No Contracts Required',
  },
  {
    cls: 'hospitals',
    title: 'Hospital Groups',
    desc: 'Refer cardiac patients at discharge or between visits. Cardiavive handles all monitoring and clinical co-management at zero cost to your system — reducing readmissions, extending your care continuum, and delivering the individualized between-visit care your patients need.',
    tag: 'Reduces Readmissions',
  },
]

export default function WhoWeServe() {
  return (
    <section id="serve">
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div className="section-label">Who We Serve</div>
        <h2 className="section-title">The <em>Full Cardiac Continuum</em></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Cardiavive supports patients recovering from cardiac surgery, post-MI, managing hypertension,
          and living with heart failure — and the cardiologists, PCPs, and hospital systems who care for them.
        </p>
      </div>
      <div className="serve-grid">
        {cards.map((c) => (
          <div className={`serve-card ${c.cls}`} key={c.title}>
            <div className="serve-title"style={{ padding: '10px 0 0 0'; }}>{c.title}</div>
            <p className="serve-desc">{c.desc}</p>
            <span className="serve-tag">{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
