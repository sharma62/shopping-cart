import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"

function App() {
  function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="Home.html">🛒 MyShop</Link>
          <div>
            <Link className="nav-link d-inline me-3 text-white" to="Home.html">Home</Link>
            <Link className="nav-link d-inline text-white" to="cart.html">Cart (2)</Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/cart" element={ <CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
