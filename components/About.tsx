'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiUser, HiLightBulb, HiAcademicCap } from 'react-icons/hi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg mb-8 border border-white/20"
          >
            <p className="text-lg text-white leading-relaxed mb-6">
              Soy un profesional apasionado por el mundo de la tecnología, actualmente
              estudiante de último semestre en Ingeniería de Datos y Software. Con un
              sólido conocimiento en bases de datos, automatización, agentes, análisis
              de datos y principios de software.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Siempre busco usar la lógica y herramientas tecnológicas para resolver
              problemas y crear soluciones innovadoras. Mi enfoque se centra en la
              excelencia técnica y la mejora continua.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <HiUser className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Perfil Profesional
              </h3>
              <p className="text-gray-300">
                Ingeniero especializado en datos y software con enfoque en soluciones
                innovadoras
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <HiLightBulb className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Innovación
              </h3>
              <p className="text-gray-300">
                Desarrollo de soluciones creativas usando las últimas tecnologías y
                metodologías
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <HiAcademicCap className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Aprendizaje Continuo
              </h3>
              <p className="text-gray-300">
                Comprometido con el crecimiento profesional y la actualización constante
                de conocimientos
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

