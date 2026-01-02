import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('')

  const shipping = getTotal() > 75 ? 0 : 9.99
  const tax = getTotal() * 0.08
  const total = getTotal() + shipping + tax

  const handleCheckout = () => {
    // Placeholder for checkout logic
    alert('Checkout functionality would integrate with Shopify/Square here!')
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-24">
        <div className="container-max py-20 text-center">
          <div className="text-8xl mb-8">🛒</div>
          <h1 className="font-impact text-4xl text-white mb-4">Your Cart is Empty</h1>
          <p className="text-white/60 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop">
            <button className="btn-neon">Continue Shopping</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-evo-red/10 to-transparent"></div>
        <div className="container-max relative z-10">
          <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Checkout</span>
          <h1 className="font-impact text-6xl md:text-8xl text-white mt-4 mb-6">
            YOUR <span className="text-evo-red neon-red">CART</span>
          </h1>
        </div>
      </section>

      <div className="container-max py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-impact text-3xl text-white mb-8">Cart Items</h2>

            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-evo-gray p-6 flex items-center gap-6">
                {/* Product Image */}
                <div className="w-20 h-20 bg-black flex items-center justify-center text-3xl">
                  {item.image}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{item.name}</h3>
                  <div className="text-white/60 text-sm space-y-1">
                    {item.size && <p>Size: {item.size}</p>}
                    {item.color && <p>Color: {item.color}</p>}
                  </div>
                  <div className="font-impact text-evo-red text-xl mt-2">
                    ${item.price}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                    className="w-8 h-8 bg-black text-white flex items-center justify-center hover:bg-evo-red transition-colors"
                  >
                    -
                  </button>
                  <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                    className="w-8 h-8 bg-black text-white flex items-center justify-center hover:bg-evo-red transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                  className="text-white/40 hover:text-evo-red transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-evo-gray p-8 h-fit">
            <h3 className="font-impact text-2xl text-white mb-6">Order Summary</h3>

            <div className="space-y-4 text-white/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between font-bold text-white text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Payment Method</h4>
              <div className="space-y-2">
                {[
                  { id: 'card', name: '💳 Credit/Debit Card', desc: 'Visa, Mastercard, Amex' },
                  { id: 'apple', name: '📱 Apple Pay', desc: 'Touch/Click to pay' },
                  { id: 'google', name: '🎯 Google Pay', desc: 'Fast checkout' },
                  { id: 'cashapp', name: '💵 Cash App', desc: 'Pay with Cash App' }
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full text-left p-3 border transition-colors ${
                      paymentMethod === method.id
                        ? 'border-evo-red bg-evo-red/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className="text-white font-bold">{method.name}</div>
                    <div className="text-white/60 text-sm">{method.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={!paymentMethod}
              className={`w-full mt-8 py-4 font-bold uppercase tracking-wider transition-all ${
                paymentMethod
                  ? 'bg-evo-red text-white hover:bg-white hover:text-black'
                  : 'bg-white/20 text-white/40 cursor-not-allowed'
              }`}
            >
              Complete Order
            </button>

            <div className="mt-4 text-center text-white/40 text-xs">
              🔒 SSL Encrypted • Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

