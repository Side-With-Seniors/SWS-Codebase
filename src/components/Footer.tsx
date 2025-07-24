import { Heart } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Genoba</span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting volunteers with senior centers to build stronger, more caring communities.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 Genoba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
