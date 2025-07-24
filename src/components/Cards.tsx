import { Heart, Users, MapPin } from "lucide-react"

function Cards() {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "1. Sign Up",
      text: "Create your profile and tell us about your interests, availability, and skills",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "2. Find Opportunities",
      text: "Browse volunteer opportunities at senior centers near you based on your preferences",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "3. Make Impact",
      text: "Volunteer, track your service hours, and see the positive impact you're making",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Genova Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to start making a difference in your community
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards;
