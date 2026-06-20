'use client'

import { useState } from 'react'

export default function VillasPage() {
const [selectedProject, setSelectedProject] = useState<any | null>(null)
const projects = [
  {
    title: "Luxury Pool Villa",
    category: "Private Residence",
 location: "Confidential",
  status: "Concept Development",   
   timeline: "24-48h concept delivery",
    description:
      "Two-storey tropical villa with pool integration, open living spaces and garden connection.",
    image: "/images/villa-pool.jpg",
    secondaryImage: "/images/interior-luxury.png",
    services: [
  "3D site mapping",
  "Concept consultancy",
  "Private client brief",
  "Confidential development study",
],
  },
   {
    title: "Tropical Courtyard Villa",
    category: "Private Residence",
 location: "Chiang Mai, Thailand",
  status: "Delivered Concept",   
   timeline: "24-48h concept delivery",
    description:
      "A contemporary tropical retreat centered around a private pool, featuring open-plan living spaces, floor-to-ceiling glass, and seamless indoor-outdoor living.",
    image: "/images/thailand1.png",
    secondaryImage: "/images/thailand2.png",
    services: [
  "3D site mapping",
  "Concept consultancy",
  "Private client brief",
  "Confidential development study",
],
  },
   {
    title: "Contemporary Jungle Villa",
    category: "Private Residence",
 location: "Monteverde, Costa Rica",
  status: "Delivered Concept",   
   timeline: "24-48h concept delivery",
    description:
      "A contemporary jungle retreat featuring open-plan living spaces, floor-to-ceiling glass, and seamless indoor-outdoor living.",
    image: "/images/costarica2.png",
    secondaryImage: "/images/costarica3.png",
    services: [
  "3D site mapping",
  "Concept consultancy",
  "Private client brief",
  "Confidential development study",
],
  },
  {
    title: "Mountain Container Villa",
    category: "Modular Residence",
    location: "Confidential",
  status: "Delivered Concept",  
    description: "Rural container villa concept with pool, warm interiors and mountain landscape views.",
    image: "/images/container-villa.png",
    secondaryImage: "/images/view-container.png",
    services: [
  "3D site mapping",
  "Concept consultancy",
  "Private client brief",
  "Confidential development study",
],
  },
  {
    title: "Modern Rural House",
    category: "Rural Living",
    location: "Spain",
  status: "Delivered Concept",  
    description: "Contemporary countryside home concept blending modern architecture with natural surroundings.",
    image: "/images/casa-rural.png",
    secondaryImage: "/images/interior-rural.png",
    services: [
  "3D site mapping",
  "Concept consultancy",
  "Private client brief",
  "Confidential development study",
],
  },
]

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-4 mb-10">
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
          Villas
        </h1>

        <p className="mt-6 text-white/60 max-w-2xl">
          Private residences, tropical villas, container architecture and luxury living concepts.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
<div
  key={project.title}
  onClick={() => setSelectedProject(project)}
  className="relative rounded-[32px] overflow-hidden border border-white/10 cursor-pointer group bg-white/[0.04]"
>
  <img
    src={project.image}
    alt={project.title}
    className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
  />

  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-8">
    <p className="text-sm uppercase tracking-[0.2em] text-white/50">
      {project.category}
    </p>

    <h2 className="mt-4 text-3xl font-semibold">
      {project.title}
    </h2>

    <p className="mt-4 text-white/70 leading-relaxed">
      {project.description}
    </p>

    <span className="mt-6 text-white font-medium">
      View Project →
    </span>
  </div>
</div>
          ))}
        </div>
      </div>
      {selectedProject && (
  <div>
    Popup
  </div>
)}
{selectedProject && (
  <div
  className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto p-4 md:p-6"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="my-6 mx-auto max-w-6xl w-full rounded-[32px] overflow-hidden bg-neutral-950 border border-white/10 grid lg:grid-cols-2"
      onClick={(e) => e.stopPropagation()}
    >
<div className="grid gap-4">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="h-72 md:h-full md:min-h-[420px] w-full object-cover"
  />

  {selectedProject.secondaryImage && (
    <img
      src={selectedProject.secondaryImage}
      alt={`${selectedProject.title} secondary`}
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
    {selectedProject.services?.map((service: string) => (
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

        <div className="mt-8 grid gap-4 text-sm text-white/60">
          <div>
            <span className="text-white/40">Type:</span>{" "}
            {selectedProject.category}
          </div>

          <div>
            <span className="text-white/40">Delivery:</span>{" "}
            24-48h concept delivery
          </div>
        </div>

        <a
          href="https://wa.me/971585503831"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-10 px-6 py-4 rounded-2xl bg-white text-black font-medium"
        >
          Request Similar Concept
        </a>
      </div>
    </div>
  </div>
)}
    </main>
  )
}