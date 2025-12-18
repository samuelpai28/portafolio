'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMicrosoft,
  SiJupyter,
  SiShopify,
} from 'react-icons/si'
import { HiCode, HiDatabase, HiChip } from 'react-icons/hi'
import React from 'react'

interface Skill {
  name: string
  level: number
  icon?: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes de Programación',
    icon: <HiCode className="w-8 h-8" />,
    skills: [
      { name: 'Python', icon: <SiPython className="w-6 h-6" />, level: 90 },
      { name: 'R', icon: <span className="text-lg font-bold">R</span>, level: 75 },
      { name: 'SQL', icon: <HiDatabase className="w-6 h-6" />, level: 85 },
      { name: 'MySQL', icon: <SiMysql className="w-6 h-6" />, level: 80 },
    ],
  },
  {
    title: 'Herramientas y Entornos',
    icon: <HiChip className="w-8 h-8" />,
    skills: [
      { name: 'Jupyter Notebook', icon: <SiJupyter className="w-6 h-6" />, level: 90 },
      { name: 'Visual Studio Code', icon: <span className="text-lg">VS</span>, level: 85 },
      { name: 'Shopify', icon: <SiShopify className="w-6 h-6" />, level: 70 },
      { name: 'ArcGIS Pro', icon: <span className="text-lg">🗺️</span>, level: 65 },
      { name: 'Power BI', icon: <SiMicrosoft className="w-6 h-6" />, level: 80 },
      { name: 'N8N', icon: <span className="text-lg">⚙️</span>, level: 75 },
    ],
  },
  {
    title: 'Habilidades Adicionales',
    icon: <HiDatabase className="w-8 h-8" />,
    skills: [
      { name: 'Pensamiento Lógico', level: 95 },
      { name: 'Pensamiento Matemático', level: 90 },
      { name: 'Análisis de Datos', level: 85 },
      { name: 'Automatización', level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
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
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-primary-600">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {skill.icon && (
                            <div className="text-primary-400">{skill.icon}</div>
                          )}
                          <span className="font-medium text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-300 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2.5">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

