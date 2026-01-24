import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import { CartProvider } from "./context/CartContext"
import { useCart } from "./context/CartContext"
import Signup from "./pages/Signup";

function App() {
  function Navbar() {
    const { cart } = useCart()
     return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
          <div>
            <Link className="nav-link d-inline me-3 text-white" to="/signup">Sign Up</Link>
            <Link className="nav-link d-inline me-3 text-white" to="/home">Home</Link>
            <Link className="nav-link d-inline text-white" to="/cart">Cart ({cart.length})</Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <CartProvider>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
