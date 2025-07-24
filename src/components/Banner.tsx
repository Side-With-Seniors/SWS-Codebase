import { ArrowRight, CheckCircle } from "lucide-react"

function Banner() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            🎉 First beta launch initiated!
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bridge Hearts, <span className="text-blue-600">Build Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with senior centers in your area and make a meaningful impact. Earn service hours while bringing
            joy and support to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center">
              Start Volunteering <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Verified opportunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Track service hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Community impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
