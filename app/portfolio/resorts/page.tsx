  'use client'

import { useState } from 'react'

export default function ResortsPage() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null)
    const projects = [
    {
  title: "Hvar Resort Concept",
  category: "Resort development",
  location: "Hvar, Croatia",
  status: "delivered concept",
  delivery: "48 Hours",
  description:  "A cliffside retreat on the Croatian coast. Luxury resort concept nestled into the hills of Hvar, Croatia.",
  image: "/images/Hvar-resort.png",
  secondaryImage: "/images/Hvar-resort2.png",
  thirdImage: "/images/hvar-house.png",
  services: [
    "Resort concept visualization",
    "Hospitality layout consultancy",
    "3D landscape visualization",
    "Confidential client brief",
  ],
},
  ]
   return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <a href="/" className="text-white/60 hover:text-white transition">
            ← Back to Home
          </a>

          <a href="/portfolio" className="text-white/60 hover:text-white transition">
            ← Back to Portfolio
          </a>
        </div>

        <h1 className="mt-12 text-5xl lg:text-7xl font-semibold">
          Resorts
        </h1>

        <p className="mt-6 text-white/60 max-w-2xl">
          Hospitality concepts, boutique resorts, wellness retreats and destination developments.
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:bg-black/70 md:opacity-0 md:group-hover:opacity-100 transition duration-300 flex flex-col justify-end md:justify-center items-center text-center p-6 md:p-8">
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50">
                  {project.category}
                </p>

                <h2 className="mt-2 md:mt-4 text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h2>

                <p className="hidden md:block mt-4 text-white/70 leading-relaxed">
                  {project.description}
                </p>

                <span className="mt-3 md:mt-6 text-white font-medium text-sm md:text-base">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

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

              <div className="grid grid-cols-2 gap-4">
                {selectedProject.secondaryImage && (
                  <img
                    src={selectedProject.secondaryImage}
                    alt={`${selectedProject.title} secondary`}
                    className="h-48 w-full object-cover"
                  />
                )}

                {selectedProject.thirdImage && (
                  <img
                    src={selectedProject.thirdImage}
                    alt={`${selectedProject.title} third`}
                    className="h-48 w-full object-cover"
                  />
                )}
              </div>
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

                  <div>
                    <p className="text-white/40 text-sm">Delivery</p>
                    <p className="mt-2">{selectedProject.delivery}</p>
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
                  Due to client confidentiality, project location, site dimensions and commercial information remain undisclosed.
                </p>
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