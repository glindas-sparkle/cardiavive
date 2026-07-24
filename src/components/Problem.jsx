import React from 'react'

export default function Problem() {
  return (
    <div id="problem">
      <div className="problem-layout">
        <div className="problem-image-col">
          <img
            src="/doctor-patient-1.png"
            alt="Doctor consulting with patient"
            className="problem-image"
          />
        </div>
        <div className="problem-inner">
          <p className="problem-quote">
            "Cardiac patients often <em>thrive in the clinic</em> and deteriorate at home — with no
            way to flag it until their next appointment."
          </p>
          <p className="problem-sub">
            Most cardiologists and PCPs deeply want to provide individualized between-visit care, but
            limited office staff, packed schedules, and competing priorities make it nearly impossible
            to deliver consistently. The gap between visits is where outcomes are lost, readmissions
            happen, and emergencies go undetected. Our founders lived this reality every day — and
            built Cardiavive to solve it.
          </p>
        </div>
      </div>
    </div>
  )
}
