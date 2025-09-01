import { Heart, Users, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

function Cards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // slower
  }

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
    <section id="how-it-works" className="py-20 bg-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Side With Seniors Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to start making a difference in your community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.4 * i, duration: 1 }} // stagger slower
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
