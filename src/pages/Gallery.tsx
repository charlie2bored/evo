import { useState, useEffect } from 'react'
import { VideoIcon } from '../components/Icons'

interface Video {
  id: number
  title: string
  duration: string
  views: string
  url?: string
}

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
  const [videos, setVideos] = useState<Video[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [selectedPastEvent, setSelectedPastEvent] = useState<Event | null>(null)

  // Function to extract video ID from URL
  const extractVideoId = (url: string) => {
    if (!url) return null

    // YouTube patterns
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const youtubeMatch = url.match(youtubeRegex)
    if (youtubeMatch) return { platform: 'youtube', id: youtubeMatch[1] }

    // Vimeo patterns
    const vimeoRegex = /vimeo\.com\/(\d+)/
    const vimeoMatch = url.match(vimeoRegex)
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] }

    return null
  }

  // Function to get embed URL
  const getEmbedUrl = (item: { url?: string }) => {
    if (!item.url) return null
    const videoInfo = extractVideoId(item.url)
    if (!videoInfo) return null

    if (videoInfo.platform === 'youtube') {
      return `https://www.youtube.com/embed/${videoInfo.id}`
    } else if (videoInfo.platform === 'vimeo') {
      return `https://player.vimeo.com/video/${videoInfo.id}`
    }

    return null
  }

  // Load data from localStorage or use defaults
  useEffect(() => {
    const savedUpcoming = localStorage.getItem('upcomingEvents')
    const savedPast = localStorage.getItem('pastEvents')
    const savedVideos = localStorage.getItem('videos')

    if (savedUpcoming) {
      setUpcomingEvents(JSON.parse(savedUpcoming))
    } else {
      setUpcomingEvents([
        {
          id: 1,
          title: "Summer Shutdown 2024",
          date: "Aug 15, 2024",
          location: "Newark, NJ",
          type: "Party",
          image: "/images/gallery/event1.jpg"
        },
        {
          id: 2,
          title: "Jersey Club Night",
          date: "Aug 22, 2024",
          location: "Brooklyn, NY",
          type: "Club Night",
          image: "/images/gallery/event2.jpg"
        },
        {
          id: 3,
          title: "Culture Fest",
          date: "Sep 5, 2024",
          location: "Philadelphia, PA",
          type: "Festival",
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
          date: "Dec 2023",
          location: "Various Locations",
          type: "Past Event",
          image: "/images/gallery/video2.jpg",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder URL - update with actual video
        }
      ])
    }

    if (savedVideos) {
      setVideos(JSON.parse(savedVideos))
    } else {
      setVideos([
        { id: 1, title: "Summer Shutdown Recap", duration: "3:45", views: "25K", url: "" },
        { id: 2, title: "Behind The Scenes: Jersey Club Night", duration: "5:20", views: "18K", url: "" },
        { id: 3, title: "Dance Crew Rehearsal", duration: "2:30", views: "12K", url: "" },
        { id: 4, title: "Event Highlights Reel", duration: "4:15", views: "30K", url: "" }
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
                <div
                  key={event.id}
                  className="group relative aspect-video bg-evo-gray overflow-hidden cursor-pointer"
                  onClick={() => event.url ? setSelectedPastEvent(event) : null}
                >
                  {/* Event Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 flex items-center justify-center text-6xl opacity-30">📸</div>';
                    }}
                  />
                  
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

                  {/* Play Button - only show if event has video URL */}
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
      {activeTab === 'videos' && (
        <section className="section-padding">
          <div className="container-max">
            {/* Selected Video Player */}
            {selectedVideo && getEmbedUrl(selectedVideo) && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={getEmbedUrl(selectedVideo)!}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Selected Past Event Player */}
            {selectedPastEvent && getEmbedUrl(selectedPastEvent) && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedPastEvent.title}</h3>
                  <button
                    onClick={() => setSelectedPastEvent(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={getEmbedUrl(selectedPastEvent)!}
                    title={selectedPastEvent.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => video.url ? setSelectedVideo(video) : null}
                >
                  <div className="aspect-video bg-evo-gray mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <VideoIcon className="text-4xl" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs text-white">
                      {video.duration}
                    </div>
                    {video.url && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-evo-red rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-white font-bold text-sm group-hover:text-evo-red transition-colors">
                    {video.title}
                    {video.url && <span className="text-evo-red ml-1">▶</span>}
                  </h4>
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

