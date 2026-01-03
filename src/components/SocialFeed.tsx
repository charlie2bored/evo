import { useState, useEffect } from 'react'
import { InstagramIcon, YouTubeIcon, TikTokIcon } from './Icons'

interface SocialPost {
  id: string
  platform: 'instagram' | 'youtube' | 'tiktok'
  type: 'image' | 'video'
  content: string
  thumbnail: string
  url: string
  likes?: number
  views?: number
  timestamp: string
}

const SocialFeed = () => {
  const [posts, setPosts] = useState<SocialPost[]>([])
  const [loading, setLoading] = useState(true)

  // Mock social media data - in production, this would fetch from real APIs
  useEffect(() => {
    const mockPosts: SocialPost[] = [
      {
        id: '1',
        platform: 'instagram',
        type: 'video',
        content: 'Behind the scenes at the Jersey Club showcase! 🔥 #TheClanOfEvolution #JerseyClub',
        thumbnail: <InstagramIcon className="w-6 h-6" />,
        url: 'https://instagram.com/p/mock1',
        views: 2500,
        timestamp: '2h ago'
      },
      {
        id: '2',
        platform: 'youtube',
        type: 'video',
        content: 'Evolution Dance Crew - Summer Shutdown 2024 Official Recap',
        thumbnail: <YouTubeIcon className="w-6 h-6" />,
        url: 'https://youtube.com/watch?v=mock1',
        views: 12500,
        timestamp: '1d ago'
      },
      {
        id: '3',
        platform: 'tiktok',
        type: 'video',
        content: 'POV: You\'re at an Evolution party 🕺💃 #PartyVibes #Evolution',
        thumbnail: <TikTokIcon className="w-6 h-6" />,
        url: 'https://tiktok.com/@mock1',
        likes: 8900,
        timestamp: '4h ago'
      },
      {
        id: '4',
        platform: 'instagram',
        type: 'image',
        content: 'New merch drop! Get yours before they\'re gone 👕 #GrowTheCulture',
        thumbnail: <InstagramIcon className="w-6 h-6" />,
        url: 'https://instagram.com/p/mock2',
        likes: 1200,
        timestamp: '6h ago'
      },
      {
        id: '5',
        platform: 'youtube',
        type: 'video',
        content: 'Client Spotlight: Wedding Reception at Club Evolution',
        thumbnail: <YouTubeIcon className="w-6 h-6" />,
        url: 'https://youtube.com/watch?v=mock2',
        views: 3200,
        timestamp: '2d ago'
      },
      {
        id: '6',
        platform: 'tiktok',
        type: 'video',
        content: 'Dance tutorial: Basic Jersey Club moves 💃 #LearnToDance',
        thumbnail: <TikTokIcon className="w-6 h-6" />,
        url: 'https://tiktok.com/@mock2',
        likes: 15400,
        timestamp: '8h ago'
      }
    ]

    // Simulate API loading
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <InstagramIcon className="w-4 h-4" />
      case 'youtube': return <YouTubeIcon className="w-4 h-4" />
      case 'tiktok': return <TikTokIcon className="w-4 h-4" />
      default: return <InstagramIcon className="w-4 h-4" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-pink-500 to-purple-500'
      case 'youtube': return 'from-red-500 to-red-600'
      case 'tiktok': return 'from-black to-gray-800'
      default: return 'from-evo-red to-evo-red'
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-evo-gray animate-pulse"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Live Indicator */}
      <div className="flex items-center gap-2 text-evo-red">
        <div className="w-2 h-2 bg-evo-red rounded-full animate-pulse"></div>
        <span className="text-sm font-bold uppercase tracking-wider">Live Feed</span>
      </div>

      {/* Social Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-evo-gray overflow-hidden cursor-pointer card-hover"
          >
            {/* Platform Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getPlatformColor(post.platform)} opacity-20 group-hover:opacity-40 transition-opacity`}></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-70 group-hover:opacity-90 transition-opacity">
              {post.thumbnail}
            </div>

            {/* Platform Badge */}
            <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs text-white font-bold flex items-center gap-1">
              <span>{getPlatformIcon(post.platform)}</span>
              <span className="uppercase">{post.platform.slice(0, 2)}</span>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
              <div className="text-white text-xs">
                {post.likes && <span>{post.likes.toLocaleString()} likes</span>}
                {post.views && <span>{post.views.toLocaleString()} views</span>}
              </div>
              <div className="text-white/60 text-xs mt-1">{post.timestamp}</div>
            </div>

            {/* Hover Play Button for Videos */}
            {post.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-evo-red rounded-full flex items-center justify-center neon-glow">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 pt-6 border-t border-white/10">
        {[
          { name: 'Instagram', handle: '@theclanofevolution', icon: <InstagramIcon className="w-5 h-5" />, url: 'https://instagram.com/theclanofevolution' },
          { name: 'TikTok', handle: '@evolve.crew', icon: <TikTokIcon className="w-5 h-5" />, url: 'https://tiktok.com/@evolve.crew' },
          { name: 'YouTube', handle: 'Evolution TV', icon: <YouTubeIcon className="w-5 h-5" />, url: 'https://youtube.com/@evolutiontv' },
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 bg-black hover:bg-evo-red transition-colors group"
          >
            <span className="text-evo-red group-hover:text-white text-lg">{social.icon}</span>
            <span className="text-white/60 group-hover:text-white text-sm hidden md:block">{social.handle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialFeed

