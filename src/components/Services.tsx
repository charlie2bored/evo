import { Link } from 'react-router-dom'
import { DanceIcon, DJIcon, VideoIcon, SocialIcon, CateringIcon, PackageIcon } from './Icons'

const Services = () => {
  const services = [
    {
      name: "Performance",
      subtitle: "Dance Crew",
      description: "Professional dance performances that electrify any event. Hip-hop, contemporary, and cultural routines.",
      icon: <DanceIcon className="w-12 h-12" />,
      features: ["Custom Choreography", "Group Performances", "Solo Acts"]
    },
    {
      name: "DJ Services",
      subtitle: "Atmosphere",
      description: "Expert DJs with extensive music libraries keeping your party alive all night long.",
      icon: <DJIcon className="w-12 h-12" />,
      features: ["Live Mixing", "MC Services", "Sound Equipment"]
    },
    {
      name: "Videography",
      subtitle: "Media",
      description: "Cinematic video production capturing every moment of your special event.",
      icon: <VideoIcon className="w-12 h-12" />,
      features: ["4K Recording", "Drone Shots", "Same-Day Edits"]
    },
    {
      name: "Social<br />Media",
      subtitle: "Hype",
      description: "Strategic promotion to amplify your event's reach and engagement online.",
      icon: <SocialIcon className="w-12 h-12" />,
      features: ["Event Promo", "Live Coverage", "Content Creation"]
    },
    {
      name: "Catering",
      subtitle: "Atmosphere",
      description: "Delicious food service with diverse menus tailored to your event's needs.",
      icon: <CateringIcon className="w-12 h-12" />,
      features: ["Custom Menus", "Full Service", "Bar Options"]
    },
    {
      name: "Full Package",
      subtitle: "All-In-One",
      description: "Complete event solutions combining all our services for seamless entertainment.",
      icon: <PackageIcon className="w-12 h-12" />,
      features: ["Everything Included", "Event Planning", "Coordination"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-evo-gray relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">What We Offer</span>
          <h2 className="font-impact text-5xl md:text-7xl text-white mt-4 mb-6">
            OUR <span className="text-evo-red neon-red">SERVICES</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Complete entertainment solutions designed to make your event unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black p-8 relative overflow-hidden card-hover card-glow"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-evo-red/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-evo-red/30 transition-colors"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Subtitle */}
                <span className="text-evo-red text-xs uppercase tracking-widest font-bold">
                  {service.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-impact text-3xl text-white mt-2 mb-4 group-hover:text-evo-red transition-colors" dangerouslySetInnerHTML={{__html: service.name}}>
                </h3>

                {/* Description */}
                <p className="text-white/40 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs text-white/60 bg-white/5 px-3 py-1 uppercase tracking-wider">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow Link */}
                <Link 
                  to="/bookings" 
                  className="inline-flex items-center text-evo-red text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Book Now
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/bookings">
            <button className="btn-neon">
              Get a Custom Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services