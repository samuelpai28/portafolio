'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowDown, HiCode, HiDatabase, HiChip } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {/* Foto circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, type: 'spring' }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* Marco circular con gradiente */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/foto.jpg"
                        alt="Samuel Gil López"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 192px, 256px"
                      />
                    </div>
                  </div>
                </div>
                {/* Efecto de brillo animado */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="inline-flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <HiCode className="w-12 h-12 text-primary-400" />
              <HiDatabase className="w-12 h-12 text-primary-400" />
              <HiChip className="w-12 h-12 text-primary-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text text-transparent">
              Samuel Gil López
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Ingeniero de Datos y Software
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Profesional apasionado por la tecnología, especializado en bases de datos,
              automatización, análisis de datos y principios de software. Siempre busco
              usar la lógica y herramientas tecnológicas para resolver problemas y crear
              soluciones innovadoras.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/samuelpai28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samuel-gil-l%C3%B3pez-a833b31a9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:gillopezsamuel65@gmail.com"
              className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-primary-600 transition-colors"
            >
              <HiArrowDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

