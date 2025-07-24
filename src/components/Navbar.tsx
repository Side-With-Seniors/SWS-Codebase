import { Heart } from "lucide-react"

function Navbar() {
  return (
    <header className="border-b border-blue-100 bg-white backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Genova</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
            How it Works
          </a>
          <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition-colors">
            Opportunities
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-blue-200 text-blue-600 bg-white hover:bg-blue-50 rounded-md">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
