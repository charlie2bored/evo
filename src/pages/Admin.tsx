import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Event {
  id: number
  title: string
  date: string
  location: string
  type: string
  image: string
}

interface Video {
  id: number
  title: string
  duration: string
  views: string
}

const Admin = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('events')

  // Events state
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])
  const [videos, setVideos] = useState<Video[]>([])

  // Form states
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    location: '',
    type: 'Party',
    image: '',
    isUpcoming: true
  })

  const [videoForm, setVideoForm] = useState({
    title: '',
    duration: '',
    views: ''
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedUpcoming = localStorage.getItem('upcomingEvents')
    const savedPast = localStorage.getItem('pastEvents')
    const savedVideos = localStorage.getItem('videos')

    if (savedUpcoming) {
      setUpcomingEvents(JSON.parse(savedUpcoming))
    } else {
      // Load default upcoming events
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
      // Load default past events
      setPastEvents([
        {
          id: 1,
          title: "Spring Break Bash",
          date: "Mar 2024",
          location: "",
          type: "",
          image: "/images/gallery/video1.jpg"
        },
        {
          id: 2,
          title: "Winter Wonderland Party",
          date: "Dec 2023",
          location: "",
          type: "",
          image: "/images/gallery/video2.jpg"
        }
      ])
    }

    if (savedVideos) {
      setVideos(JSON.parse(savedVideos))
    } else {
      // Load default videos
      setVideos([
        { id: 1, title: "Summer Shutdown Recap", duration: "3:45", views: "25K" },
        { id: 2, title: "Behind The Scenes: Jersey Club Night", duration: "5:20", views: "18K" },
        { id: 3, title: "Dance Crew Rehearsal", duration: "2:30", views: "12K" },
        { id: 4, title: "Event Highlights Reel", duration: "4:15", views: "30K" }
      ])
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('upcomingEvents', JSON.stringify(upcomingEvents))
  }, [upcomingEvents])

  useEffect(() => {
    localStorage.setItem('pastEvents', JSON.stringify(pastEvents))
  }, [pastEvents])

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos))
  }, [videos])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'evo2024') { // Simple password - in production, use proper auth
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  const addEvent = () => {
    if (!eventForm.title || !eventForm.date) return

    const newEvent = {
      ...eventForm,
      id: Date.now() // Simple ID generation
    }

    if (eventForm.isUpcoming) {
      setUpcomingEvents([...upcomingEvents, newEvent])
    } else {
      setPastEvents([...pastEvents, newEvent])
    }

    // Reset form
    setEventForm({
      title: '',
      date: '',
      location: '',
      type: 'Party',
      image: '',
      isUpcoming: eventForm.isUpcoming
    })
  }

  const deleteEvent = (id: number, isUpcoming: boolean) => {
    if (isUpcoming) {
      setUpcomingEvents(upcomingEvents.filter(event => event.id !== id))
    } else {
      setPastEvents(pastEvents.filter(event => event.id !== id))
    }
  }

  const addVideo = () => {
    if (!videoForm.title || !videoForm.duration) return

    const newVideo = {
      ...videoForm,
      id: Date.now()
    }

    setVideos([...videos, newVideo])

    // Reset form
    setVideoForm({
      title: '',
      duration: '',
      views: ''
    })
  }

  const deleteVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-evo-gray p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-black border border-white/20 px-4 py-3 text-white mb-4 focus:outline-none focus:border-evo-red"
            />
            <button
              type="submit"
              className="w-full bg-evo-red text-white py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-white/40 text-sm text-center mt-4">
            Contact admin for access credentials
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container-max">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-impact text-4xl text-white">Content Management</h1>
              <p className="text-white/60 mt-2">Manage gallery events and videos</p>
            </div>
            <button
              onClick={() => navigate('/gallery')}
              className="bg-evo-red text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-b border-white/10">
        <div className="container-max">
          <div className="flex gap-8">
            {[
              { id: 'events', label: 'Events' },
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

      <div className="container-max py-12">
        {activeTab === 'events' && (
          <div className="space-y-12">
            {/* Add Event Form */}
            <div className="bg-evo-gray p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">Add New Event</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="Event title"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="text"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="Aug 15, 2024"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Location</label>
                  <input
                    type="text"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Type</label>
                  <select
                    value={eventForm.type}
                    onChange={(e) => setEventForm({...eventForm, type: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                  >
                    <option value="Party">Party</option>
                    <option value="Club Night">Club Night</option>
                    <option value="Festival">Festival</option>
                    <option value="Concert">Concert</option>
                    <option value="Workshop">Workshop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Image Path</label>
                  <input
                    type="text"
                    value={eventForm.image}
                    onChange={(e) => setEventForm({...eventForm, image: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="/images/gallery/event.jpg"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Event Type</label>
                  <select
                    value={eventForm.isUpcoming ? 'upcoming' : 'past'}
                    onChange={(e) => setEventForm({...eventForm, isUpcoming: e.target.value === 'upcoming'})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                  >
                    <option value="upcoming">Upcoming Event</option>
                    <option value="past">Past Event</option>
                  </select>
                </div>
              </div>
              <button
                onClick={addEvent}
                className="mt-6 bg-evo-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Add Event
              </button>
            </div>

            {/* Upcoming Events Management */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Upcoming Events ({upcomingEvents.length})</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-evo-gray p-6 rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-bold">{event.title}</h4>
                      <p className="text-white/60 text-sm">{event.date} • {event.location}</p>
                      <span className="text-evo-red text-xs uppercase">{event.type}</span>
                    </div>
                    <button
                      onClick={() => deleteEvent(event.id, true)}
                      className="bg-red-600 text-white px-4 py-2 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events Management */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Past Events ({pastEvents.length})</h3>
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-evo-gray p-6 rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-bold">{event.title}</h4>
                      <p className="text-white/60 text-sm">{event.date}</p>
                    </div>
                    <button
                      onClick={() => deleteEvent(event.id, false)}
                      className="bg-red-600 text-white px-4 py-2 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="space-y-12">
            {/* Add Video Form */}
            <div className="bg-evo-gray p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">Add New Video</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={videoForm.title}
                    onChange={(e) => setVideoForm({...videoForm, title: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="Video title"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Duration</label>
                  <input
                    type="text"
                    value={videoForm.duration}
                    onChange={(e) => setVideoForm({...videoForm, duration: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="3:45"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">Views</label>
                  <input
                    type="text"
                    value={videoForm.views}
                    onChange={(e) => setVideoForm({...videoForm, views: e.target.value})}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-evo-red"
                    placeholder="25K"
                  />
                </div>
              </div>
              <button
                onClick={addVideo}
                className="mt-6 bg-evo-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Add Video
              </button>
            </div>

            {/* Videos Management */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Videos ({videos.length})</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="bg-evo-gray p-6 rounded-lg">
                    <h4 className="text-white font-bold mb-2">{video.title}</h4>
                    <p className="text-white/60 text-sm mb-4">{video.duration} • {video.views} views</p>
                    <button
                      onClick={() => deleteVideo(video.id)}
                      className="bg-red-600 text-white px-4 py-2 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin
