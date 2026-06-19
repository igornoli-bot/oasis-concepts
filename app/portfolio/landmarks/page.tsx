export default function LandmarksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <a href="/portfolio" className="text-white/60 hover:text-white">
          ← Back to Portfolio
        </a>

        <h1 className="mt-12 text-5xl lg:text-7xl font-semibold">
          Landmarks
        </h1>

        <p className="mt-6 text-white/60 max-w-2xl">
          Iconic architectural concepts, destination buildings and signature developments.
        </p>

        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-12 text-white/50">
          Coming soon
        </div>
      </div>
    </main>
  )
}