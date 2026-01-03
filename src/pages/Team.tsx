import Team from '../components/Team'
import { TheaterIcon } from '../components/Icons'

const TeamPage = () => {
  return (
    <div>
      <Team standalone={true} />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-evo-gray">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Why Us</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-4">
              THE <span className="text-evo-red">DIFFERENCE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-evo-red flex items-center justify-center">
<TheaterIcon className="w-12 h-12" />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Professional Talent</h3>
              <p className="text-gray-400">
                Highly skilled performers with years of training and professional experience.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-evo-red flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Reliable Service</h3>
              <p className="text-gray-400">
                Punctual, professional, and committed to delivering exceptional results.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-evo-red flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-400">
                Tailored packages designed specifically for your unique event needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage