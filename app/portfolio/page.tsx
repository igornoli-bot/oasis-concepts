export default function PortfolioPage() {
  const categories = [
    {
      title: "Villas",
      description:
        "Private residences, tropical villas, container architecture and luxury living concepts.",
      image: "/images/villa-pool.jpg",
      href: "/portfolio/villas",
    },
    {
      title: "Masterplans",
      description:
        "Large-scale land planning, resort layouts and development strategies.",
      image: "/images/render-mallorca.png",
      href: "/portfolio/masterplans",
    },
    {
      title: "Landmarks",
      description:
        "Iconic architectural concepts, destination buildings and signature developments.",
      image: "/images/container-villa.png",
      href: "/portfolio/landmarks",
    },
  ]

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="text-white/60 hover:text-white transition">
          ← Back to Home
        </a>

        <div className="mt-12 mb-16 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl lg:text-7xl font-semibold leading-tight">
            Explore visual concepts by category.
          </h1>

          <p className="mt-6 text-lg text-white/60">
            A curated collection of AI-assisted architectural concepts for
            villas, masterplans and landmark developments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group rounded-[36px] overflow-hidden border border-white/10 bg-white/[0.04] hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Category
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold">
                    {category.title}
                  </h2>

                  <p className="mt-4 text-white/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}