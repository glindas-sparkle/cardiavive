import React, { useState } from 'react'

// ─────────────────────────────────────────────────────────────
//  CONTACT FORM — Edit this section freely in HTML/CSS/JS
//
//  To change:
//    • Heading / copy     → edit the JSX text nodes below
//    • Form fields        → add/remove <input> or <select> elements
//    • Colours / spacing  → edit src/styles/main.css  (.cta-* rules)
//    • Submit logic       → update handleSubmit()
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // ── Replace this block with your real form submission logic ──
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    console.log('Form submitted:', form)
    setStatus('success')
    setForm({ name: '', email: '', org: '' })
    // ─────────────────────────────────────────────────────────────
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

        {/* ── Form ── */}
        <form className="cta-form" onSubmit={handleSubmit} noValidate>
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
          <button className="cta-submit" type="submit">
            Request a Demo
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
            Something went wrong. Please try again.
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
