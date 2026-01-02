import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete entertainment solutions designed to make your event unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Performance", icon: "💃", desc: "Professional dance performances that electrify any event" },
              { name: "DJ Services", icon: "🎧", desc: "Expert DJs with extensive music libraries keeping your party alive" },
              { name: "Videography", icon: "📹", desc: "Cinematic video production capturing every moment of your special event" },
              { name: "Social Media", icon: "📱", desc: "Strategic promotion to amplify your event's reach and engagement online" },
              { name: "Catering", icon: "🍽️", desc: "Delicious food service with diverse menus tailored to your event's needs" },
              { name: "Full Package", icon: "✨", desc: "Complete event solutions combining all our services for seamless entertainment" }
            ].map((service, index) => (
              <div key={index} className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <Link to="/bookings" className="text-red-600 hover:text-red-400 font-bold uppercase tracking-wider">
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Merch Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SHOP THE <span className="text-red-600">CULTURE</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Rep the movement with exclusive streetwear drops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Grow The Culture Tee', price: 35, image: '👕' },
              { name: 'Jersey Club Worldwide Tee', price: 40, image: '👕' },
              { name: 'EVO Logo Hoodie', price: 65, image: '🧥' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
                <div className="text-8xl mb-4">{item.image}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-red-600 font-bold text-xl">${item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors">
                View All Merch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            READY TO EVOLVE?
          </h2>
          <p className="text-white/90 text-xl mb-10">
            Book the crew for your next event and experience the ultimate party.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bookings">
              <button className="bg-white text-red-600 px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </Link>
            <Link to="/gallery">
              <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-red-600 transition-colors">
                See Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home