'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCalendar } from 'react-icons/hi'

const education = [
  {
    degree: 'Ingeniería de Datos y Software',
    institution: 'Universidad De San Buenaventura',
    period: '2019-2023',
    description: '9° Semestre de Ingeniería de Datos y Software',
    icon: '🎓',
  },
  {
    degree: 'Análisis de datos, BI, Big Data, Visualización de datos',
    institution: 'IN-LEARNING - Linkedin',
    period: '2022',
    description: 'Certificación en análisis de datos y herramientas de BI',
    icon: '📊',
  },
  {
    degree: 'Certificado de Inglés nivel B2',
    institution: 'Universidad De Antioquia',
    period: '2025',
    description: 'Certificación de nivel intermedio-avanzado en inglés',
    icon: '🌐',
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="education"
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
            Educación
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-primary-400 text-sm font-semibold">
                          <HiCalendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                        <div className="flex items-center text-gray-200 mb-3">
                          <HiAcademicCap className="w-5 h-5 mr-2 text-primary-400" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <p className="text-gray-200">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

