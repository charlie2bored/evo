import { Link } from 'react-router-dom'

interface TeamProps {
  standalone?: boolean
}

const Team = ({ standalone = false }: TeamProps) => {
  const teamMembers = [
    {
      name: "Wiz",
      role: "Dance Director + Producer",
      credits: "Lil Uzi Vert, Tonight Show, Ciara + more",
      image: "/images/team/member1.jpg",
      social: "@wizdancealot"
    },
    {
      name: "Zah",
      role: "Dancer + Choreographer",
      credits: "Coi Leray, Brooklyn Nets Halftime Show, World of Dance '24 + more",
      image: "/images/team/member2.jpg",
      social: "@zah2xs"
    },
    {
      name: "Charlie2bored",
      role: "SWE + Contemporary + Hip-Hop Dancer",
      credits: "Website Development, Business of Dance + more",
      image: "/images/team/member3.jpg",
      social: "@charlie2bored"
    },
    {
      name: "JBalin",
      role: "Dancer + Choreographer",
      credits: "Credits Here",
      image: "/images/team/member4.jpg",
      social: "@jonathan.balin"
    },
    {
      name: "Autumn",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member5.jpg",
      social: "@urstruly.szn"
    },
    {
      name: "Riyaa",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member6.jpg",
      social: "@5starrr.riyaa"
    },
    {
      name: "Dija",
      role: "Dancer + Choreographer",
      credits: "Credits Here",
      image: "/images/team/member7.jpg",
      social: "@itspoppingdija"
    },
    {
      name: "Moody",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member8.jpg",
      social: "@moodyboy.__"
    },
    {
      name: "Boogz",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member9.jpg",
      social: "@lbjersey973_"
    },
    {
      name: "Bria",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member10.jpg",
      social: "@bria.marie_"
    },
    {
      name: "Eboni",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member11.jpg",
      social: "@eboniere"
    },
    {
      name: "Mel Mel",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member12.jpg",
      social: "@malibu.mehlee"
    },
    {
      name: "Sadi",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member13.jpg",
      social: "@team.member8"
    },
    {
      name: "Yaee",
      role: "Role Here",
      credits: "Credits Here",
      image: "/images/team/member14.jpg",
      social: "@yaeeee__"
    }
  ]

  return (
    <section id="team" className={`section-padding bg-black relative ${standalone ? 'pt-32' : ''}`}>
      {/* DEBUG: This should show if changes are working */}
      <div className="bg-yellow-400 text-black text-center py-4 font-bold text-xl">
        🔧 DEBUG: Team Component Updated - {new Date().toLocaleTimeString()}
      </div>

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-evo-red/5 to-transparent"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">The Crew</span>
            <h2 className="font-impact text-5xl md:text-7xl text-white mt-4">
              MEET <span className="text-evo-red neon-red">THE TEAM</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg max-w-md mt-6 lg:mt-0">
            Talented professionals dedicated to making your event extraordinary
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden card-hover"
            >
              {/* Card */}
              <div className="bg-evo-gray p-8 relative">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-evo-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-black rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-red-600 flex items-center justify-center text-white text-xl font-bold">' + member.name.charAt(0) + '</div>';
                      }}
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-impact text-2xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-evo-red group-hover:text-white font-bold text-sm uppercase tracking-wider mb-2 transition-colors">
                    {member.role}
                  </p>
                  <p className="text-white/40 group-hover:text-white/80 text-sm transition-colors">
                    {member.credits}
                  </p>

                  {/* Social */}
                  <div className="mt-6 pt-4 border-t border-white/10 group-hover:border-white/20">
                    <span className="text-white/40 group-hover:text-white text-sm transition-colors">
                      {member.social}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-20 relative overflow-hidden">
          <div className="bg-evo-red p-12 md:p-16">
            {/* Kinetic Background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="kinetic-text whitespace-nowrap font-impact text-[150px] text-white">
                JOIN THE CREW • JOIN THE CREW • JOIN THE CREW • 
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="font-impact text-4xl md:text-5xl text-white mb-4">
                  JOIN THE CREW
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Passionate about entertainment? We're always looking for talented individuals to join our team.
                </p>
              </div>
              <Link to="/bookings">
                <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all whitespace-nowrap">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team