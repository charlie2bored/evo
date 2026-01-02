import Contact from '../components/Contact'

const Events = () => {
  const pastEvents = [
    {
      title: "Sarah & Michael's Wedding",
      type: "Wedding Reception",
      description: "Full entertainment package with dance, DJ, and videography.",
      quote: "Absolutely incredible! Our guests are still talking about it!"
    },
    {
      title: "TechCorp Annual Gala",
      type: "Corporate Event",
      description: "200+ attendees with professional DJ and dance performances.",
      quote: "Transformed our company event into an unforgettable experience."
    },
    {
      title: "Emma's Sweet 16",
      type: "Birthday Party",
      description: "Custom choreography, DJ mixing, and professional videography.",
      quote: "Best party ever! Everyone had such a great time."
    }
  ]

  return (
    <div>
      <Contact standalone={true} />

      {/* Past Events Section */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Portfolio</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-4">
              RECENT <span className="text-evo-red">EVENTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="group">
                {/* Event Image Placeholder */}
                <div className="aspect-video bg-evo-gray mb-6 flex items-center justify-center group-hover:bg-evo-red/20 transition-colors">
                  <span className="text-5xl opacity-50">📸</span>
                </div>

                {/* Event Info */}
                <div className="border-l-4 border-evo-red pl-4">
                  <span className="text-evo-red text-xs uppercase tracking-wider font-bold">{event.type}</span>
                  <h3 className="font-display text-2xl text-white mt-2 mb-3">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  <p className="text-gray-300 italic text-sm">"{event.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-evo-gray">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">FAQ</span>
              <h2 className="font-display text-5xl text-white mt-4 mb-8">
                COMMON<br />
                <span className="text-evo-red">QUESTIONS</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Have questions about booking? Here are answers to some of our most frequently asked questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-black p-6">
                <h4 className="text-white font-bold mb-2">How far in advance should I book?</h4>
                <p className="text-gray-400 text-sm">We recommend booking at least 2-4 weeks in advance for standard events, and 2-3 months for weddings or large corporate events.</p>
              </div>
              <div className="bg-black p-6">
                <h4 className="text-white font-bold mb-2">Do you travel for events?</h4>
                <p className="text-gray-400 text-sm">Yes! We serve events nationwide. Travel fees may apply for locations outside our primary service area.</p>
              </div>
              <div className="bg-black p-6">
                <h4 className="text-white font-bold mb-2">Can I customize my package?</h4>
                <p className="text-gray-400 text-sm">Absolutely! We create custom packages tailored to your specific needs and budget. Contact us to discuss your vision.</p>
              </div>
              <div className="bg-black p-6">
                <h4 className="text-white font-bold mb-2">What's included in the pricing?</h4>
                <p className="text-gray-400 text-sm">Pricing varies by service and event size. All quotes include equipment, setup, and professional staff. Request a quote for detailed pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events