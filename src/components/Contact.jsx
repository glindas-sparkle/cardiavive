import React, { useState } from 'react'

// ─────────────────────────────────────────────────────────────
//  CONTACT FORM 
// ─────────────────────────────────────────────────────────────

const FORM_NAME = 'contact'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...form }),
    })
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', org: '' })
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section id="contact">
      <div className="cta-wrap">
        {/* ── Label ── */}
        <span className="cta-label">Get Started</span>

        {/* ── Heading ── */}
        <h2 className="cta-title">
          Ready to <em>Bridge the Gap</em>
          <br />for Your Patients?
        </h2>

        {/* ── Sub-copy ── */}
        <p className="cta-sub">
          Whether you're a cardiologist, PCP, or hospital system — partnering with Cardiavive is
          simple, free, and built entirely around your patients' outcomes. Let's talk.
        </p>
        {/* ── Additional Contact Info ── */}
          <p class="cta-sub" style="padding-top:10px;">Jacqueline.mcgee@cardiavive.com ・ 215-610-8268</p>
        

        {/* ── Form ── */}
        <form
          className="cta-form"
          name={FORM_NAME}
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          {/* Required by Netlify for JS-rendered forms */}
          <input type="hidden" name="form-name" value={FORM_NAME} />

          <input
            className="cta-input"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="cta-input"
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="cta-input"
            type="text"
            name="org"
            placeholder="Organization"
            value={form.org}
            onChange={handleChange}
          />
          <button className="cta-submit" type="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Request a Demo'}
          </button>
        </form>

        {/* ── Success / error feedback ── */}
        {status === 'success' && (
          <p className="cta-note" style={{ color: '#7dffc8', marginTop: '12px' }}>
            ✓ Thanks! We'll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="cta-note" style={{ color: '#ffaaaa', marginTop: '12px' }}>
            Something went wrong — please try again or email us directly.
          </p>
        )}

        {/* ── Fine print ── */}
        <p className="cta-note" style={{ marginTop: status ? '8px' : undefined }}>
          No commitment required &nbsp;·&nbsp; HIPAA compliant &nbsp;·&nbsp; Zero cost to
          partners &nbsp;·&nbsp; Response within 24 hours
        </p>
      </div>
    </section>
  )
}
