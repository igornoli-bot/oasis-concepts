'use client'

import { useState } from 'react'

export default function BriefPage() {
  const [projectType, setProjectType] = useState('')
  const [landSize, setLandSize] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [style, setStyle] = useState('')
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')

  const sendWhatsApp = () => {
    const message = `Hello Horizon Habitat,

Project Type: ${projectType}
Land Size: ${landSize}
Bedrooms: ${bedrooms}
Style: ${style}
Location: ${location}

Additional Information:
${notes}`

    window.open(
      `https://wa.me/971585503831?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <a
          href="/"
          className="text-white/60 hover:text-white"
        >
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-semibold">
          Request a Concept
        </h1>

        <p className="mt-6 text-white/60">
          Share your project requirements and we will prepare a tailored concept proposal.
        </p>

        <div className="mt-12 space-y-6">

          <input
            placeholder="Project Type (Villa, Resort, Resort...)"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4"
          />

          <input
            placeholder="Land Size (m²)"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4"
          />

          <input
            placeholder="Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4"
          />

          <input
            placeholder="Reference Style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4"
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4"
          />

          <textarea
            placeholder="Additional Information"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 h-40"
          />

          <button
            onClick={sendWhatsApp}
            className="w-full rounded-2xl bg-white text-black font-semibold p-4"
          >
            Send via WhatsApp
          </button>

        </div>

      </div>
    </main>
  )
}