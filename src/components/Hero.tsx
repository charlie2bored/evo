const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="text-center text-white max-w-4xl px-6">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded">
            Young Entertainment Company
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white block">THE CLAN OF</span>
          <span className="text-red-600 block">EVOLUTION</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-6">
          Experience the <span className="text-red-600 font-bold">Ultimate Party Experience</span>
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Jersey Club royalty bringing authentic party vibes to every event. From electrifying dance performances
          and world-class DJ sets to cinematic videography and exclusive streetwear drops.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors">
            Book The Crew
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-wider transition-colors">
            Shop Culture
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">100K+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">Social Reach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">Party Mode</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero