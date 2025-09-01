import { Heart } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Side with Seniors</span>
        </div>
        <div className="border-t border-gray-200 pt-3 text-center text-xs text-gray-600">
          <p>&copy; 2025 Side with Seniors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
