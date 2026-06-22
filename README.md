# Lista de Tareas (Notas) — Curso de React desde cero 2025

Proyecto del curso "CURSO de REACT desde cero 2025", desarrollado en Vite + React.
Implementado hasta el minuto **1:50:00** del video.

## Contenido cubierto hasta este punto

- Qué es React, JSX y por qué "React no deja de ser JavaScript"
- Creación del proyecto con Vite (`npm create vite@latest`)
- Componentes y props (`App.jsx` -> `TodoApp.jsx`)
- Eventos en React (`onClick`, función vs. ejecución, `event.target`)
- El Hook `useState` (ejemplo de contador + aplicado a la lista de notas)
- Renderizado de listas con `.map()` y la prop `key`
- Estilos: CSS global (`index.css`) y CSS Modules (`TodoApp.module.css`)
- El Hook `useEffect` para pedir datos a una API al montar el componente
- Conexión con una API simulada usando **json-server** (`fetch` a `http://localhost:3000/notas`)

## Cómo correr el proyecto

Necesitas **dos terminales abiertas** al mismo tiempo (igual que en el video):

1. Instala las dependencias (solo la primera vez o si agregaste `json-server`):

   ```bash
   npm install
   ```

2. Terminal 1 — levanta la API simulada con json-server (sirve `db.json` en `http://localhost:3000`):

   ```bash
   npm run server
   ```

3. Terminal 2 — levanta la app de React con Vite:

   ```bash
   npm run dev
   ```

4. Abre la URL que te muestra Vite (normalmente `http://localhost:5173`).

Si `npm run server` no funciona en tu máquina, también puedes correrlo con:

```bash
npx json-server db.json
```

## Estructura relevante

```
LISTA_DE_TAREAS/
├─ db.json                      # "base de datos" falsa para json-server
├─ src/
│  ├─ App.jsx                   # Componente raíz, renderiza <TodoApp />
│  ├─ index.css                 # Estilos globales (body, button, contenedor)
│  └─ components/
│     ├─ TodoApp.jsx            # useState + useEffect + fetch + .map()
│     └─ TodoApp.module.css     # Estilos con CSS Modules
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
