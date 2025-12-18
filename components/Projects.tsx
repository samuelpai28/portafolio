'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Automatización de Procesos',
    description:
      'Sistema de automatización desarrollado en Python y SQL para optimizar procesos empresariales, incluyendo creación de agentes en N8N y manejo de orquestadores de información.',
    technologies: ['Python', 'SQL', 'N8N', 'Power BI'],
    category: 'Automatización',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Sistema de Marketing Universitario',
    description:
      'Bot y aplicación (Sender) desarrollada para implementación de marketing en el campo universitario de educación superior, específicamente para programas de postgrado.',
    technologies: ['Python', 'Bot Development', 'Marketing Automation'],
    category: 'Desarrollo',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Análisis de Datos y Visualización',
    description:
      'Proyectos de análisis de datos utilizando herramientas como Power BI, Jupyter Notebook y técnicas de Big Data para visualización y representación de información compleja.',
    technologies: ['Power BI', 'Python', 'Jupyter', 'Big Data'],
    category: 'Análisis',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
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
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado, demostrando mis
            habilidades en desarrollo, automatización y análisis de datos.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-white/20 h-full flex flex-col"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image/Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <HiCode className="w-12 h-12 text-white opacity-80" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 text-gray-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <motion.button
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiExternalLink className="w-4 h-4" />
                        <span>Ver Proyecto</span>
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-white/20 text-gray-200 rounded-lg hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.button>
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

