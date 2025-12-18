'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker, HiDownload } from 'react-icons/hi'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <HiMail className="w-6 h-6" />,
    title: 'Email Personal',
    value: 'gillopezsamuel65@gmail.com',
    link: 'mailto:gillopezsamuel65@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <HiMail className="w-6 h-6" />,
    title: 'Email Corporativo',
    value: 'samgi@bancolombia.com.co',
    link: 'mailto:samgi@bancolombia.com.co',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    title: 'LinkedIn',
    value: 'Samuel Gil López',
    link: 'https://www.linkedin.com/in/samuel-gil-l%C3%B3pez-a833b31a9',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <HiLocationMarker className="w-6 h-6" />,
    title: 'Ubicación',
    value: 'Sabaneta, Antioquia, Colombia',
    link: null,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. No dudes en
            contactarme.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {contact.link ? (
                  <motion.a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-200">{contact.value}</p>
                  </motion.a>
                ) : (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center text-white mb-4`}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-200">{contact.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/CV_Samuel_Gil_Lopez.pdf"
              download="CV_Samuel_Gil_Lopez.pdf"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="w-5 h-5" />
              <span>Descargar Hoja de Vida</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

