import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

// Import shop products data
const products = [
  {
    id: 1,
    name: "Grow The Culture Tee",
    price: 40,
    category: "tees",
    images: {
      "Black": "/images/shop/grow-culture-tee-black.jpg",
      "White": "/images/shop/grow-culture-tee-white.jpg",
      "Yellow": "/images/shop/grow-culture-tee-yellow.jpg",
      "Blue": "/images/shop/grow-culture-tee-blue.jpg"
    },
    defaultImage: "/images/shop/grow-culture-tee-black.jpg",
    colors: ["Black", "White", "Yellow", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    hot: true,
    description: "Premium cotton tee featuring the 'Grow The Culture' design. Perfect for spreading the movement."
  },
  {
    id: 2,
    name: "Loyal Members Tee",
    price: 40,
    category: "tees",
    images: {
      "Black": "/images/shop/loyal-members-tee-black.jpg",
      "White": "/images/shop/loyal-members-tee-white.jpg"
    },
    defaultImage: "/images/shop/loyal-members-tee-black.jpg",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    hot: true,
    description: "Show your loyalty to The Clan of Evolution with this exclusive tee."
  },
  {
    id: 5,
    name: "Ladies of E.V.O Hoodie",
    price: 40,
    category: "hoodies",
    image: "/images/shop/ladies-evo-hoodie.jpg",
    colors: ["Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    hot: true,
    description: "Exclusive hoodie for the Ladies of E.V.O. Comfort and style combined."
  },
  {
    id: 6,
    name: "Jersey Club Worldwide Tee",
    price: 35,
    category: "tees",
    images: {
      "Front": "/images/shop/jersey-club-tee-front.jpg",
      "Back": "/images/shop/jersey-club-tee-back.jpg"
    },
    defaultImage: "/images/shop/jersey-club-tee-front.jpg",
    views: ["Front", "Back"],
    colors: ["White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    hot: false,
    description: "Official Jersey Club Worldwide merchandise. Show your love for the culture."
  }
]

// Helper function to get the appropriate image for a product
const getProductImage = (product: any) => {
  if (product.images) {
    // For products with multiple images, use defaultImage or first color image
    return product.defaultImage || Object.values(product.images)[0]
  }
  // For products with single image, use the image property
  return product.image
}

const Home = () => {
  // Get the top 3 HOT products
  const hotProducts = products.filter(product => product.hot).slice(0, 3)
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-evo-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete entertainment solutions designed to make your event unforgettable
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Performance", icon: "💃", desc: "Professional dance performances that electrify any event" },
              { name: "DJ Services", icon: "🎧", desc: "Expert DJs with extensive music libraries keeping your party alive" },
              { name: "Video<br />Graphy", icon: "📹", desc: "Cinematic video production capturing every moment of your special event" },
              { name: "Social<br />Media", icon: "📱", desc: "Strategic promotion to amplify your event's reach and engagement online" },
              { name: "Catering", icon: "🍽️", desc: "Delicious food service with diverse menus tailored to your event's needs" },
              { name: "Full Package", icon: "✨", desc: "Complete event solutions combining all our services for seamless entertainment" }
            ].map((service, index) => (
              <div key={index} className="group bg-black p-8 rounded-lg hover:bg-white transition-colors w-80">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4" dangerouslySetInnerHTML={{__html: service.name}}></h3>
                <p className="text-gray-400 group-hover:text-gray-800 mb-6">{service.desc}</p>
                <Link to="/bookings" className="text-red-600 group-hover:text-red-700 font-bold uppercase tracking-wider">
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
            {hotProducts.map((product) => (
              <Link key={product.id} to="/shop" className="group">
                <div className="bg-evo-gray p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
                  <div className="relative mb-4">
                    {/* HOT Badge */}
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider rounded">
                      HOT
                    </div>
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-24 h-24 mx-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = '<div class="w-24 h-24 mx-auto bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">' + product.name.charAt(0) + '</div>'
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{product.name}</h3>
                  <p className="text-red-600 font-bold text-xl">${product.price}</p>
                </div>
              </Link>
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