import { Link } from 'react-router-dom'
import { DanceIcon, DJIcon, VideoIcon } from './Icons'

const About = () => {
  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-evo-red/5 to-transparent"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-evo-gray relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:scale-110 transition-transform">
<DanceIcon className="w-24 h-24" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <span className="text-evo-red text-xs uppercase tracking-wider font-bold">Performance</span>
                  </div>
                </div>
                <div className="aspect-square bg-evo-red flex items-center justify-center">
                  <span className="font-impact text-4xl text-white">5+</span>
                  <span className="text-white/80 text-xs uppercase ml-2">Years</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-evo-gray relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:scale-110 transition-transform">
<DJIcon className="w-24 h-24" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <span className="text-evo-red text-xs uppercase tracking-wider font-bold">DJ</span>
                  </div>
                </div>
                <div className="aspect-[4/5] bg-evo-gray relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:scale-110 transition-transform">
<VideoIcon className="w-24 h-24" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <span className="text-evo-red text-xs uppercase tracking-wider font-bold">Video</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-evo-red"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Who We Are</span>
            <h2 className="font-impact text-5xl md:text-6xl text-white mt-4 mb-8 leading-tight">
              <span className="text-evo-red neon-red">ENTERTAINMENT</span><br />
              COMPANY
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We are committed to offering <span className="text-white font-semibold">authentic services</span> that 
              transform ordinary events into extraordinary celebrations. Our passionate team brings 
              energy, creativity, and professionalism to every performance.
            </p>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              From <span className="text-evo-red">dance performances</span> and <span className="text-evo-red">DJing</span> to 
              <span className="text-evo-red"> videography</span> and <span className="text-evo-red">social media promotion</span> — 
              we deliver the complete party experience.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-white/10">
              <div>
                <div className="font-impact text-3xl text-evo-red">500+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Events</div>
              </div>
              <div>
                <div className="font-impact text-3xl text-white">100K+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Reach</div>
              </div>
              <div>
                <div className="font-impact text-3xl text-white">24/7</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Vibes</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/bookings">
                <button className="btn-neon">
                  Book The Crew
                </button>
              </Link>
              <Link to="/team">
                <button className="btn-secondary">
                  Meet The Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About