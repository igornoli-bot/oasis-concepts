'use client'

import { useState } from 'react'
export default function MasterplansPage() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const projects = [
  {
    title: "Mallorca Masterplan",
    category: "Resort Planning",
    status: "Delivered Concept",
    timeline: "48-72h concept delivery",
    location: "Mallorca, Spain",
    description: "Luxury development masterplan integrating villas, green areas, water features and hospitality spaces.",
    image: "/images/render-mallorca.png",
    secondaryImage: "/images/render-mallorca.png",
    services: [
  "3D masterplan visualization",
  "Site layout consultancy",
  "Development strategy",
  "Confidential client brief",
],
  },
]

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
<div className="flex gap-6 mb-10">
  <a
    href="/"
    className="text-white/60 hover:text-white transition"
  >
    ← Back to Home
  </a>

  <a
    href="/portfolio"
    className="text-white/60 hover:text-white transition"
  >
    ← Back to Portfolio
  </a>
</div>
        <h1 className="mt-12 text-5xl lg:text-7xl font-semibold">
          Masterplans
        </h1>

        <p className="mt-6 text-white/60 max-w-2xl">
          Large-scale land planning, resort layouts and development strategies.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} onClick={() => setSelectedProject(project)}className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04]cursor-pointer hover:scale-[1.02] transition">
              <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
  {project.category}
</p>

<p className="mt-4 text-white/60 leading-relaxed">
  {project.description}
</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
  <div
  
    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="max-w-6xl w-full rounded-[32px] overflow-hidden bg-neutral-950 border border-white/10 grid lg:grid-cols-2"
      onClick={(e) => e.stopPropagation()}
    >
<div className="grid gap-4">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="h-full min-h-[420px] w-full object-cover"
  />

  {selectedProject.secondaryImage && (
    <img
      src={selectedProject.secondaryImage}
alt={` ${selectedProject.title} secondary `}
      className="h-56 w-full object-cover"
    />
  )}
</div>
      <div className="p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
          {selectedProject.category}
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          {selectedProject.title}
        </h2>

        <p className="mt-6 text-white/60 leading-relaxed">
          {selectedProject.description}
        </p>

        <div className="mt-8 border-t border-white/10 pt-8">
  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
    Project Information
  </p>

  <div className="mt-6 grid grid-cols-2 gap-6">

    <div>
      <p className="text-white/40 text-sm">Project Type</p>
      <p className="mt-2">{selectedProject.category}</p>
    </div>

    <div>
      <p className="text-white/40 text-sm">Status</p>
      <p className="mt-2">{selectedProject.status}</p>
    </div>

    <div>
      <p className="text-white/40 text-sm">Location</p>
      <p className="mt-2">{selectedProject.location}</p>
    </div>

  </div>
</div>

        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Included Scope
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
{selectedProject.services?.map((service) => (
                  <span
                key={service}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 bg-white/[0.04]"
              >
                {service}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-white/40 italic">
            Some project details remain confidential due to client privacy.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  )
}