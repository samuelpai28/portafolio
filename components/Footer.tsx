'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              © {currentYear} Samuel Gil López. Todos los derechos reservados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/samuelpai28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samuel-gil-l%C3%B3pez-a833b31a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:gillopezsamuel65@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>
            Desarrollado con ❤️ usando Next.js, React, Tailwind CSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

