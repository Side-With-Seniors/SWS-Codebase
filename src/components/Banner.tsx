import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

function Banner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Static glowing background divs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-32 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl opacity-30" />

      <div className="relative container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{}}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-6 px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
          >
            🎉 First beta launch initiated!
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Bridge Hearts, <span className="text-blue-600">Build Community</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with senior centers in your area and make a meaningful impact. Earn service hours while bringing
            joy and support to those who need it most.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center">
              Start Volunteering <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner
