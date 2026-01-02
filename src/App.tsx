import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import TeamPage from './pages/Team'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Gallery from './pages/Gallery'
import Bookings from './pages/Bookings'
import Footer from './components/Footer'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
