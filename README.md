# GitHub Profile Finder

GitHub Profile Finder es una aplicación desarrollada con React que permite a los usuarios buscar perfiles de GitHub y explorar información detallada sobre ellos, incluyendo sus repositorios públicos.

---

# 🖥️ Visualización
## Página de inicio
![Texto alternativo](./src/assets/images/main-page.jpg)

## Repositorios del usuario
![Texto alternativo](./src/assets/images/repos-page.jpg)

## ⚙️ Características principales

- **Búsqueda de usuarios de GitHub**:
  - Nombre del usuario.
  - Descripción del perfil.
  - Localización.
  - Fecha de creación de la cuenta.
  - Número total de repositorios.
  - Seguidores y seguidos.

Es posible visitar el perfil del usuario en la página oficial de Github mediante un botón de visita de perfil


- **📁 Exploración de repositorios**:
  - Muestra una lista de repositorios con información relevante:
    - `Nombre del repositorio`
    - `Descripción`
    - `Etiquetas`
    - `Homepage`
    - `Lenguaje principal`
    - `Licencia`
  - Accede a los detalles del repositorio:
    - Enlace directo al repositorio en GitHub.
    - Enlace a la homepage si el repositorio la tiene configurada.

- **📜 Paginación o carga diferida**:
- El componente `InfiniteScroll` fue utilizado para mostrar los repositorios de manera parcial, es decir que solamente se mostrarán conforme el usuario avance, esto con el objetivo de no cargar toda la información de manera incial, evitando tiempos de carga prolongados cuando un usuario tiene una gran cantidad de repositorios 
  - Los primeros 10 repositorios se cargan inicialmente.
  - Carga más repositorios al hacer scroll hacia abajo.

---

## 🔍 Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/github-profile-finder.git

2. Visita la homepage de Github Profile Finder
   ```bash
   https://git-hub-profile-finder-one.vercel.app/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
