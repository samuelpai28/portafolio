import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samuel Gil López - Ingeniero de Datos y Software',
  description: 'Portafolio profesional de Samuel Gil López - Ingeniero de Datos y Software especializado en Python, SQL, automatización y análisis de datos.',
  keywords: 'Samuel Gil López, Ingeniero de Datos, Software Engineer, Python, SQL, Data Analytics, Portafolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

