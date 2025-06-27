import { ShoppingCart, Search } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-background shadow border-b border-rosa/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-rosa">AC Store</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-blanco hover:text-amarillo">
            Home
          </a>
          <a href="#" className="text-blanco hover:text-amarillo">
            Categories
          </a>
          <a href="#" className="text-blanco hover:text-amarillo">
            About Us
          </a>
          <a href="#" className="text-blanco hover:text-amarillo">
            Contact Us
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-blanco hover:text-amarillo">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button className="text-blanco hover:text-amarillo">
            <Search className="h-6 w-6" />
          </button>
          <button className="bg-rosa text-blanco px-4 py-2 rounded-md hover:bg-rosa/80 transition-colors">
            My Dashboard
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
