import { useState } from 'react'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Shutdown 2024",
      date: "Aug 15, 2024",
      location: "Newark, NJ",
      type: "Party",
      image: "🎉"
    },
    {
      id: 2,
      title: "Jersey Club Night",
      date: "Aug 22, 2024",
      location: "Brooklyn, NY",
      type: "Club Night",
      image: "🎧"
    },
    {
      id: 3,
      title: "Culture Fest",
      date: "Sep 5, 2024",
      location: "Philadelphia, PA",
      type: "Festival",
      image: "🎭"
    }
  ]

  const pastEvents = [
    {
      id: 1,
      title: "Spring Break Bash",
      date: "Mar 2024",
      views: "50K",
      image: "📸"
    },
    {
      id: 2,
      title: "Winter Wonderland Party",
      date: "Dec 2023",
      views: "35K",
      image: "📸"
    },
    {
      id: 3,
      title: "Halloween Takeover",
      date: "Oct 2023",
      views: "45K",
      image: "📸"
    },
    {
      id: 4,
      title: "Summer Vibes 2023",
      date: "Jul 2023",
      views: "60K",
      image: "📸"
    }
  ]

  const videos = [
    { id: 1, title: "Summer Shutdown Recap", duration: "3:45", views: "25K" },
    { id: 2, title: "Behind The Scenes: Jersey Club Night", duration: "5:20", views: "18K" },
    { id: 3, title: "Dance Crew Rehearsal", duration: "2:30", views: "12K" },
    { id: 4, title: "Event Highlights Reel", duration: "4:15", views: "30K" },
  ]

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
              { id: 'past', label: 'Past Events' },
              { id: 'videos', label: 'Videos' }
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
                <div key={event.id} className="group relative aspect-video bg-evo-gray overflow-hidden cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {event.image}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-evo-red text-xs uppercase tracking-wider">{event.date}</span>
                        <h3 className="font-impact text-2xl text-white mt-1">{event.title}</h3>
                      </div>
                      <div className="text-white/40 text-sm">
                        {event.views} views
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-evo-red rounded-full flex items-center justify-center neon-glow">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === 'videos' && (
        <section className="section-padding">
          <div className="container-max">
            {/* Featured Video */}
            <div className="aspect-video bg-evo-gray mb-8 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl opacity-30">🎬</span>
                  <p className="text-white/40 mt-4">Featured Video Player</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-evo-red rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform neon-glow">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video bg-evo-gray mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs text-white">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-evo-red rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm group-hover:text-evo-red transition-colors">{video.title}</h4>
                  <p className="text-white/40 text-xs mt-1">{video.views} views</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Gallery

