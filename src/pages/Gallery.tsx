import { useState, useEffect } from 'react'

interface Event {
  id: number
  title: string
  date: string
  location: string
  type: string
  image: string
  views?: string
  url?: string
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])

  // Load data from localStorage or use defaults
  useEffect(() => {
    const savedUpcoming = localStorage.getItem('upcomingEvents')
    const savedPast = localStorage.getItem('pastEvents')

    if (savedUpcoming) {
      setUpcomingEvents(JSON.parse(savedUpcoming))
    } else {
      setUpcomingEvents([
        {
          id: 1,
          title: "NBA Halftime Show",
          date: "Jan 9 2026",
          location: "Brooklyn, NY",
          type: "NBA Game",
          image: "/images/gallery/event1.jpg"
        },
        {
          id: 2,
          title: "Project Becoming",
          date: "Jan 10 2026",
          location: "Newark, NJ",
          type: "Gala",
          image: "/images/gallery/event2.jpg"
        },
        {
          id: 3,
          title: "ClubNYC",
          date: "Feb 15 2025",
          location: "Brooklyn, NY",
          type: "Club Night",
          image: "/images/gallery/event3.jpg"
        }
      ])
    }

    if (savedPast) {
      setPastEvents(JSON.parse(savedPast))
    } else {
      setPastEvents([
        {
          id: 1,
          title: "Sybarite Love is Love Festival 2025",
          date: "December 2025",
          location: "New York, NY",
          type: "Past Event",
          image: "/images/gallery/video1.jpg",
          url: "https://www.youtube.com/watch?v=Y9Z4WkiJeUs" 
        },
        {
          id: 2,
          title: "Winter Wonderland Party",
          date: "November 2025",
          location: "Newark, NJ",
          type: "Past Event",
          image: "/images/gallery/video2.jpg",
          url: "https://www.youtube.com/watch?v=DtTZtg180X4"
        }
      ])
    }

  }, [])

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-evo-red/10 to-transparent"></div>
        
        <div className="container-max relative z-10">
          <span className="text-evo-red font-bold uppercase tracking-[0.3em] text-sm">Events & Media</span>
          <h1 className="font-impact text-6xl md:text-8xl text-white mt-4 mb-6">
            THE <span className="text-evo-red neon-red">GALLERY</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Relive the moments. See what's coming next. Experience the vibe.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 sticky top-20 bg-black/95 backdrop-blur-md z-30">
        <div className="container-max">
          <div className="flex gap-8">
            {[
              { id: 'upcoming', label: 'Upcoming Events' },
              { id: 'past', label: 'Past Events' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm uppercase tracking-wider font-bold border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'text-evo-red border-evo-red'
                    : 'text-white/40 border-transparent hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === 'upcoming' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group bg-evo-gray p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:bg-evo-gray/80 transition-colors cursor-pointer">
                  {/* Date */}
                  <div className="text-center md:text-left md:w-32">
                    <div className="font-impact text-3xl text-evo-red">{event.date.split(' ')[1]}</div>
                    <div className="text-white/40 text-sm uppercase">{event.date.split(' ')[0]} {event.date.split(' ')[2]}</div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-16 bg-white/10"></div>

                  {/* Info */}
                  <div className="flex-1">
                    <span className="text-evo-red text-xs uppercase tracking-wider font-bold">{event.type}</span>
                    <h3 className="font-impact text-3xl text-white mt-1 group-hover:text-evo-red transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/40 mt-1">{event.location}</p>
                  </div>

                  {/* Action */}
                  <div>
                    <button className="btn-neon text-sm py-3 px-6">
                      Get Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 p-8 md:p-12 border border-white/10 text-center">
              <h3 className="font-impact text-3xl text-white mb-4">NEVER MISS AN EVENT</h3>
              <p className="text-white/40 mb-6">Get early access to tickets and exclusive event updates.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                />
                <button className="bg-evo-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === 'past' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative aspect-video bg-evo-gray overflow-hidden cursor-pointer"
                  onClick={() => event.url && window.open(event.url, '_blank')}
                >
                  {/* Event Image */}
                  <div className="relative w-full h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onLoad={() => {
                        // Image loaded successfully - hide fallback
                        const placeholder = document.querySelector(`[data-event-id="${event.id}"] .image-fallback`);
                        if (placeholder) (placeholder as HTMLElement).style.display = 'none';
                      }}
                      onError={() => {
                        console.log('Image failed to load:', event.image, event.title);
                        // Show fallback placeholder
                        const placeholder = document.querySelector(`[data-event-id="${event.id}"] .image-fallback`);
                        if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder - hidden by default */}
                    <div
                      className="image-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-evo-gray to-gray-600"
                      data-event-id={event.id}
                    >
                      <div className="text-center text-white/60">
                        <div className="text-4xl mb-2">🎬</div>
                        <div className="text-sm font-medium">{event.title}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div>
                      <span className="text-evo-red text-xs uppercase tracking-wider">{event.date}</span>
                      <h3 className="font-impact text-2xl text-white mt-1">{event.title}</h3>
                      <p className="text-white/40 text-sm mt-1">{event.location}</p>
                    </div>
                  </div>

                  {/* Play Button - show on hover if event has video URL */}
                  {event.url && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-evo-red rounded-full flex items-center justify-center neon-glow">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
    </div>
  )
}

export default Gallery

