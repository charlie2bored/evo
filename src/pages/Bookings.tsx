import { useState } from 'react'

const Bookings = () => {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    guestCount: '',
    message: ''
  })

  const services = [
    {
      id: 'performance',
      name: 'Performance Team',
      description: 'Professional dance crew for your event',
      icon: '💃',
      price: 'From $500'
    },
    {
      id: 'dj',
      name: 'DJ Services',
      description: 'Live mixing and sound equipment',
      icon: '🎧',
      price: 'From $300'
    },
    {
      id: 'videography',
      name: 'Videography',
      description: 'Professional event coverage and editing',
      icon: '📹',
      price: 'From $400'
    },
    {
      id: 'social',
      name: 'Social Media',
      description: 'Event promotion and live coverage',
      icon: '📱',
      price: 'From $200'
    },
    {
      id: 'full',
      name: 'Full Package',
      description: 'Complete entertainment solution',
      icon: '✨',
      price: 'Custom Quote'
    }
  ]

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id)
        : [...prev, id]
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request submitted! We\'ll contact you within 24 hours.')
    setStep(1)
    setSelectedServices([])
    setFormData({
      name: '', email: '', phone: '', eventDate: '', 
      eventType: '', location: '', guestCount: '', message: ''
    })
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-evo-red/10 to-transparent"></div>
        
        <div className="container-max relative z-10">
          <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Book Now</span>
          <h1 className="font-impact text-6xl md:text-8xl text-white mt-4 mb-6">
            BOOK THE <span className="text-evo-red neon-red">CREW</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Ready to elevate your event? Select your services and let's make it happen.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-b border-white/10">
        <div className="container-max py-6">
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { num: 1, label: 'Select Services' },
              { num: 2, label: 'Event Details' },
              { num: 3, label: 'Confirm' }
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center font-bold transition-all ${
                  step >= s.num ? 'bg-evo-red text-white' : 'bg-white/10 text-white/40'
                }`}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <span className={`hidden md:block text-sm uppercase tracking-wider ${
                  step >= s.num ? 'text-white' : 'text-white/40'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: Select Services */}
      {step === 1 && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="font-impact text-4xl text-white text-center mb-12">
              WHAT DO YOU <span className="text-evo-red">NEED?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-6 text-left transition-all ${
                    selectedServices.includes(service.id)
                      ? 'bg-evo-red neon-glow'
                      : 'bg-evo-gray hover:bg-evo-gray/80'
                  }`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-impact text-2xl text-white mb-2">{service.name}</h3>
                  <p className={`text-sm mb-4 ${selectedServices.includes(service.id) ? 'text-white/80' : 'text-white/40'}`}>
                    {service.description}
                  </p>
                  <div className={`font-bold ${selectedServices.includes(service.id) ? 'text-white' : 'text-evo-red'}`}>
                    {service.price}
                  </div>
                  
                  {/* Checkbox indicator */}
                  <div className={`absolute top-4 right-4 w-6 h-6 border-2 flex items-center justify-center transition-all ${
                    selectedServices.includes(service.id) ? 'border-white bg-white text-evo-red' : 'border-white/20'
                  }`}>
                    {selectedServices.includes(service.id) && '✓'}
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(2)}
                disabled={selectedServices.length === 0}
                className={`btn-neon ${selectedServices.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Continue
              </button>
              {selectedServices.length > 0 && (
                <p className="text-white/40 text-sm mt-4">
                  {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Event Details */}
      {step === 2 && (
        <section className="section-padding">
          <div className="container-max max-w-3xl">
            <h2 className="font-impact text-4xl text-white text-center mb-12">
              TELL US ABOUT YOUR <span className="text-evo-red">EVENT</span>
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(3) }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  >
                    <option value="">Select Type</option>
                    <option value="party">Private Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="club">Club Night</option>
                    <option value="festival">Festival</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Guest Count</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                  >
                    <option value="">Select Range</option>
                    <option value="1-50">1-50 guests</option>
                    <option value="50-100">50-100 guests</option>
                    <option value="100-200">100-200 guests</option>
                    <option value="200-500">200-500 guests</option>
                    <option value="500+">500+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, State or Venue Name"
                  className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us more about your event..."
                  className="w-full bg-evo-gray border-0 border-b-2 border-white/20 px-4 py-4 text-white focus:outline-none focus:border-evo-red resize-none"
                />
              </div>

              <div className="flex gap-4 justify-center pt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button type="submit" className="btn-neon">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <section className="section-padding">
          <div className="container-max max-w-3xl">
            <h2 className="font-impact text-4xl text-white text-center mb-12">
              CONFIRM YOUR <span className="text-evo-red">BOOKING</span>
            </h2>

            <div className="bg-evo-gray p-8 mb-8">
              <h3 className="font-impact text-2xl text-white mb-6">Booking Summary</h3>
              
              <div className="space-y-4 text-white/80">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Services</span>
                  <span className="text-evo-red">
                    {selectedServices.map(s => services.find(srv => srv.id === s)?.name).join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Name</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Email</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Event Date</span>
                  <span>{formData.eventDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Event Type</span>
                  <span>{formData.eventType}</span>
                </div>
                {formData.location && (
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Location</span>
                    <span>{formData.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/40 text-sm mb-6">
                By submitting, you agree to be contacted about your booking request.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setStep(2)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button onClick={handleSubmit} className="btn-primary">
                  <span>Submit Booking</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Info */}
      <section className="py-12 border-t border-white/10">
        <div className="container-max text-center">
          <p className="text-white/40 text-sm">
            Need help? Call us at <span className="text-evo-red font-bold">(555) 123-EVOLUTION</span> or email <span className="text-evo-red">bookings@theclanofevolution.com</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Bookings

