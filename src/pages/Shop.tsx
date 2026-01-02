import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const { addToCart, getItemCount, getTotal } = useCart()

  // Helper function to get the appropriate image for a product
  const getProductImage = (product: any) => {
    if (product.images) {
      // For products with multiple images, use defaultImage or first color image
      return product.defaultImage || Object.values(product.images)[0]
    }
    // For products with single image, use the image property
    return product.image
  }

  // Helper function to get specific color/view image
  const getSpecificImage = (product: any, key: string) => {
    if (product.images && product.images[key]) {
      return product.images[key]
    }
    return getProductImage(product)
  }

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
      hot: true,
      description: "Official Jersey Club Worldwide merchandise. Show your love for the culture."
    },
    {
      id: 3,
      name: "Dance Restores My Soul Tee",
      price: 35,
      category: "tees",
      images: {
        "Black": "/images/shop/dance-restores-soul-tee-black.jpg",
        "White": "/images/shop/dance-restores-soul-tee-white.jpg"
      },
      defaultImage: "/images/shop/dance-restores-soul-tee-white.jpg",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      hot: false,
      description: "For the dancers who live and breathe the art. Dance restores the soul."
    },
    {
      id: 4,
      name: "Bring Your A Game Tee",
      price: 25,
      category: "tees",
      image: "/images/shop/bring-a-game-tee.jpg",
      colors: ["White"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      hot: false,
      description: "Bring your A game every time. Representing excellence in dance and culture."
    },
    {
      id: 7,
      name: "EVO Tee",
      price: 15,
      category: "tees",
      image: "/images/shop/evo-tee.jpg",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      hot: false,
      description: "Classic EVO branding tee. Simple, clean, and powerful."
    }
  ]

  const handleQuickAdd = (product: typeof products[0]) => {
    if (!selectedSize || !selectedColor) {
      setSelectedProduct(product.id)
      return
    }

    // Get the specific color image if available, otherwise use default
    const productImage = getSpecificImage(product, selectedColor)

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImage,
      size: selectedSize,
      color: selectedColor
    })

    setSelectedProduct(null)
    setSelectedSize('')
    setSelectedColor('')
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tees', name: 'Tees' },
    { id: 'hoodies', name: 'Hoodies' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-evo-red/20 to-transparent"></div>
        
        {/* Kinetic Background Text */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="kinetic-text whitespace-nowrap font-impact text-[200px] text-white">
            MERCH • CULTURE • DRIP • EVOLUTION • MERCH • CULTURE • DRIP • EVOLUTION • 
          </div>
        </div>

        <div className="container-max relative z-10">
          <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Official Merch</span>
          <h1 className="font-impact text-6xl md:text-8xl text-white mt-4 mb-6">
            SHOP THE <span className="text-evo-red neon-red">CULTURE</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Rep the movement. Exclusive streetwear drops inspired by Jersey Club and underground party culture.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-white/10">
        <div className="container-max">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 text-sm uppercase tracking-wider font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-evo-red text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image */}
                <div className="relative aspect-square bg-evo-gray mb-4 overflow-hidden">
                  {/* Hot Badge */}
                  {product.hot && (
                    <div className="absolute top-4 left-4 bg-evo-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                      Hot
                    </div>
                  )}

                  {/* Product Image */}
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-red-600 flex items-center justify-center text-white text-6xl font-bold">' + product.name.charAt(0) + '</div>';
                    }}
                  />

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="bg-evo-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-evo-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/40 text-sm mt-1">
                      {product.colors.join(' / ')}
                    </p>
                  </div>
                  <div className="text-evo-red font-impact text-2xl">
                    ${product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Selection Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
              <div className="bg-evo-gray p-8 max-w-md w-full">
                <h3 className="font-impact text-2xl text-white mb-6">Select Options</h3>

                {(() => {
                  const product = products.find(p => p.id === selectedProduct)!
                  const previewImage = selectedColor ? getSpecificImage(product, selectedColor) : getProductImage(product)

                  return (
                    <div className="space-y-6">
                      {/* Product Preview */}
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-lg overflow-hidden">
                          <img
                            src={previewImage}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold">' + product.name.charAt(0) + '</div>';
                            }}
                          />
                        </div>
                        <h4 className="text-white font-bold text-lg">{product.name}</h4>
                        <p className="text-red-600 font-bold text-xl">${product.price}</p>
                      </div>
                      <div>
                        <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Size</label>
                        <div className="grid grid-cols-3 gap-2">
                          {product.sizes.map(size => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`py-2 px-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                                selectedSize === size ? 'bg-evo-red text-white' : 'bg-black text-white/60 hover:bg-white/10'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Color</label>
                        <div className="grid grid-cols-2 gap-2">
                          {product.colors.map(color => (
                            <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`py-2 px-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                                selectedColor === color ? 'bg-evo-red text-white' : 'bg-black text-white/60 hover:bg-white/10'
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* View Selection (for products with multiple views) */}
                      {product.views && (
                        <div>
                          <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">View</label>
                          <div className="flex gap-2">
                            {product.views.map(view => (
                              <button
                                key={view}
                                onClick={() => setSelectedColor(view)} // Using selectedColor for simplicity, could add separate state
                                className={`py-2 px-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                                  selectedColor === view ? 'bg-evo-red text-white' : 'bg-black text-white/60 hover:bg-white/10'
                                }`}
                              >
                                {view}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={() => {
                            setSelectedProduct(null)
                            setSelectedSize('')
                            setSelectedColor('')
                          }}
                          className="flex-1 btn-secondary"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleQuickAdd(product)}
                          disabled={!selectedSize || !selectedColor}
                          className={`flex-1 btn-neon ${(!selectedSize || !selectedColor) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="py-20 bg-gradient-to-r from-evo-red to-evo-red/80 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container-max relative z-10 text-center">
          <span className="text-white/80 text-sm uppercase tracking-widest">Limited Drop</span>
          <h2 className="font-impact text-5xl md:text-7xl text-white mt-4 mb-6">
            JERSEY CLUB WORLDWIDE
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            The official collection celebrating Jersey Club culture. Limited quantities available.
          </p>
          <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Floating Cart Summary */}
      {getItemCount() > 0 && (
        <div className="fixed bottom-6 right-6 bg-evo-red text-white p-4 rounded-lg shadow-2xl z-40 max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold">{getItemCount()} item{getItemCount() > 1 ? 's' : ''} in cart</span>
            <span className="font-impact text-lg">${getTotal().toFixed(2)}</span>
          </div>
          <Link to="/cart">
            <button className="w-full bg-white text-black py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
              View Cart
            </button>
          </Link>
        </div>
      )}

      {/* Payment Methods */}
      <section className="py-12 border-t border-white/10">
        <div className="container-max">
          <div className="text-center mb-8">
            <h3 className="font-impact text-2xl text-white mb-4">SECURE CHECKOUT</h3>
            <p className="text-white/40">Multiple payment options for your convenience</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-2xl">💳</span>
              <span className="text-sm font-bold uppercase tracking-wider">Card</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-2xl">📱</span>
              <span className="text-sm font-bold uppercase tracking-wider">Apple Pay</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-bold uppercase tracking-wider">Google Pay</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-2xl">$</span>
              <span className="text-sm font-bold uppercase tracking-wider">CashApp</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/30 text-xs">
              🔒 SSL Encrypted • Fast Shipping • 30-Day Returns
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
