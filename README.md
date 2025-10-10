# Portafolio Web – React + Vite

Proyecto de portafolio creado con React y Vite. Incluye en su stack React Router, Redux Toolkit, TailwindCSS (utilidades), animaciones con Framer Motion y librerías para visualización como Recharts y D3, ideal para un sitio moderno, rápido y mantenible.

## 🚀 Tecnologías principales

- **React 18**
- **Vite 5** con `@vitejs/plugin-react-swc`
- **React Router 6**
- **Redux Toolkit**
- **TailwindCSS 3** (y plugins de utilidades)
- **Framer Motion**
- **Recharts** y **D3**
- **Axios**, **date-fns**, **lucide-react**

## 📋 Requisitos previos

- Node.js >= 18
- Gestor de paquetes: **pnpm** (recomendado por presencia de `pnpm-lock.yaml`), o npm/yarn

## 🔧 Instalación

Clona el repositorio e instala dependencias:

```bash
# con pnpm (recomendado)
pnpm install

# o con npm
npm install

# o con yarn
yarn install
```

## 📜 Scripts disponibles

- **`pnpm dev`** / `npm run dev` / `yarn dev`: inicia el entorno de desarrollo (Vite).
- **`pnpm start`** / `npm start` / `yarn start`: alias para desarrollo con Vite.
- **`pnpm build`** / `npm run build` / `yarn build`: compila a producción con sourcemaps.
- **`pnpm serve`** / `npm run serve` / `yarn serve`: vista previa del build (`dist/`).

## 📁 Estructura del proyecto

```
my-portfolio/
├─ index.html
├─ vite.config.js
├─ eslint.config.js
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ main.jsx           # Punto de entrada React
│  ├─ App.jsx            # Componente raíz
│  ├─ Routes.jsx         # Definición de rutas (React Router)
│  ├─ components/        # Componentes reutilizables
│  ├─ assets/            # Imágenes, íconos, fuentes, etc.
│  ├─ pages/             # Páginas (si aplica)
│  ├─ styles/            # Estilos (si aplica)
│  └─ utils/             # Utilidades y helpers (si aplica)
└─ README.md
```

**Archivos clave:**

- `src/main.jsx`: monta la app en `#root` definido en `index.html`.
- `src/App.jsx`: layout/base de la aplicación.
- `src/Routes.jsx`: centraliza las rutas de navegación.

## ⚙️ Configuración

- **Vite**: configurado en `vite.config.js` con `@vitejs/plugin-react-swc`.
- **ESLint**: reglas modernas con `eslint.config.js` (React Hooks y Refresh), incluyendo `no-unused-vars` con excepciones útiles para constantes en MAYÚSCULAS.
- **TailwindCSS**: presente en dependencias junto a varios plugins. Si no has inicializado Tailwind, crea su configuración (`tailwind.config.js`, `postcss.config.js`) y asegúrate de importar los estilos globales (por ejemplo, en `src/main.css` o similar) con las directivas:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## 🌐 Variables de entorno

Para endpoints o claves (por ejemplo, al usar `axios`), crea un archivo `.env` en la raíz:

```bash
VITE_API_BASE_URL=https://api.ejemplo.com
```

Accede desde el código con `import.meta.env.VITE_API_BASE_URL`. 

**Nota**: variables de Vite deben empezar por `VITE_` para estar disponibles en el cliente.

## 🗺️ Rutas de la aplicación

La configuración de rutas vive en `src/Routes.jsx`. Añade o modifica rutas ahí para nuevas páginas en `src/pages/`.

## 🔄 Estado global

Si necesitas estado global, instala y configura Redux Toolkit en `src/` (por ejemplo `src/store/`). Está incluido en dependencias para facilitar escalabilidad.

## 🎨 Estilos y UI

- **TailwindCSS** (utilidades) + `tailwind-merge` y `tailwindcss-animate` para gestionar clases y animaciones.
- **`lucide-react`** para íconos.
- **`framer-motion`** para animaciones de componentes.

## 📊 Gráficos y visualización

- **`recharts`** y **`d3`** disponibles para dashboards o visualizaciones.

## 🧪 Pruebas

Están presentes dependencias de `@testing-library/*`. Puedes integrar Jest/Vitest según requieras.

## 🚢 Despliegue

1) Genera el build de producción:

```bash
pnpm build
# o npm run build / yarn build
```

2) Sirve el contenido de `dist/` en tu hosting estático preferido (Netlify, Vercel, GitHub Pages, etc.) o usa `pnpm serve` para una vista previa local.

## 🤝 Contribuir

1. Crea una rama feature: `git checkout -b feature/mi-feature`.
2. Haz commits claros: `feat: agrega sección de contacto`.
3. Abre un Pull Request.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia que el autor defina. Si no se especifica, considera todos los derechos reservados.
