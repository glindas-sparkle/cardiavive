import React from 'react'

export default function Founders() {
  return (
    <section id="founders">
      <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
        <div className="section-label">Our Founders</div>
        <h2 className="section-title">Built by Clinicians<br /><em>Who Lived the Problem</em></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Decades of frontline cardiac experience gave our founders an intimate understanding of
          where the system fails patients — and the conviction to build something better.
        </p>
      </div>

      <div className="founders-grid">
        <div className="founder-card">
          <img
            src="/konstadinos-plestis.png"
            alt="Konstadinos Plestis"
            className="founder-avatar md"
            style={{ objectFit: 'cover' }}
          />
          <div>
            <div className="founder-name">Konstadinos Plestis, MD</div>
            <div className="founder-role">Co-Founder &amp; Chief Medical Officer</div>
            <p className="founder-bio">
              A renowned cardiac surgeon with decades of frontline experience treating the most
              complex cardiac patients. Dr. Plestis built Cardiavive after years of watching
              patients thrive in the clinic and decline at home — determined to close the gap
              through technology-enabled clinical co-management.
            </p>
          </div>
        </div>

        <div className="founder-card">
          <img
            src="/jacqueline-mcgee.png"
            alt="Jacqueline McGee"
            className="founder-avatar np"
            style={{ objectFit: 'cover' }}
          />
          <div>
            <div className="founder-name">Jacqueline McGee, NP, MBA</div>
            <div className="founder-role">Co-Founder &amp; Chief Executive Officer</div>
            <p className="founder-bio">
              A seasoned nurse practitioner and healthcare executive who worked alongside Dr. Plestis
              for years. Her combined clinical expertise and business acumen shape Cardiavive's care
              model, partner relationships, and patient experience from the ground up.
            </p>
          </div>
        </div>
      </div>

      <div className="founders-quote">
        <p className="quote-text">
          "We built Cardiavive because we know what happens in the{' '}
          <em>silence between appointments</em>.<br />
          Our patients deserve a partner in that space — one that watches, learns, and acts when
          it matters most."
        </p>
        <div className="quote-attr">
          — Dr. Konstadinos Plestis, MD &amp; Jacqueline McGee, NP, MBA &nbsp;·&nbsp; Co-Founders, Cardiavive
        </div>
      </div>
    </section>
  )
}
