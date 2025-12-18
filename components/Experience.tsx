'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiCalendar } from 'react-icons/hi'

const experiences = [
  {
    title: 'Practicante de Analítica de Datos',
    company: 'Sufi, Grupo Bancolombia',
    period: '2025',
    description: [
      'Automatización de procesos en Python y SQL',
      'Creación de agentes en N8N',
      'Manejo de Orquestadores de Información Desarrollados en Python',
      'Manejo de LZ representación de información en POWER BI',
    ],
    icon: '💼',
  },
  {
    title: 'Auxiliar de TI',
    company: 'CILE',
    period: '2023 - 2024',
    description: [
      'Montaje de Bot y aplicación (Sender)',
      'Implementación de marketing en el campo universitario de educación superior (Postgrados)',
    ],
    icon: '💻',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
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
            Experiencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-primary-600 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-400 rounded-full border-4 border-black/50 shadow-lg hidden md:block" />

                  {/* Content */}
                  <div className="md:ml-16 w-full">
                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{exp.icon}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center text-primary-400 font-semibold">
                              <HiBriefcase className="w-4 h-4 mr-2" />
                              {exp.company}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <HiCalendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-200"
                          >
                            <span className="text-primary-400 mr-2">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

