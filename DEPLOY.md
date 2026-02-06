# Guía de Despliegue en Vercel

## ✅ Checklist antes de desplegar

1. **Verificar que todos los archivos estén commitados:**
   ```bash
   git status
   git add .
   git commit -m "Fix: Corregir errores de TypeScript y asegurar fondo de constelación"
   git push
   ```

2. **El fondo de constelación está implementado en:**
   - `components/ConstellationBackground.tsx` ✅
   - `app/page.tsx` (importado y usado) ✅

## 🔧 Configuración para Vercel

### Archivos de configuración incluidos:
- ✅ `next.config.js` - Configurado para producción
- ✅ `package.json` - Dependencias correctas
- ✅ `tsconfig.json` - Configuración de TypeScript
- ✅ `tailwind.config.js` - Configuración de Tailwind
- ✅ `.vercelignore` - Archivos a ignorar

### Variables de entorno:
No se requieren variables de entorno para este proyecto.

## 🚀 Pasos para desplegar

1. **Conectar repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

2. **Configuración del proyecto:**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
   - Install Command: `npm install` (automático)

3. **Desplegar:**
   - Vercel hará el build automáticamente
   - Si hay errores, revisa los logs en Vercel

## 🐛 Solución de problemas

### Si el build falla:
1. Verifica que todas las dependencias estén en `package.json`
2. Asegúrate de que no haya errores de TypeScript localmente:
   ```bash
   npm run build
   ```
3. Revisa los logs de Vercel para ver el error específico

### Si el fondo de constelación no aparece:
- El componente está en `components/ConstellationBackground.tsx`
- Está importado en `app/page.tsx`
- Verifica que el z-index esté correcto (z-0 para fondo, z-10 para contenido)

## 📝 Notas importantes

- El fondo de constelación solo se renderiza en el cliente (usa `isMounted`)
- Todos los componentes usan `'use client'` para evitar problemas de SSR
- El PDF del CV debe estar en `public/CV_Samuel_Gil_Lopez.pdf`


