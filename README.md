![Introduccion](https://i.postimg.cc/pdjL1Qv1/image.png)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


## Propósito y alcance

EducaTE es una aplicación web basada en React para la gestión integral de proyectos, usuarios e instituciones educativas.  
Ofrece control de acceso por roles con interfaces específicas para coordinadores y estudiantes, facilitando:

- **Coordinadores**: administración de usuarios, proyectos y escuelas.  
- **Estudiantes**: acceso a proyectos y recursos asignados.

Para más detalles, consulte:  
- [Componentes de la interfaz de usuario](#componentes-de-la-interfaz-de-usuario)  
- [Autenticación y enrutamiento](#autenticación-y-enrutamiento)  
- [Capa de datos y API](#capa-de-datos-y-api)
## Descripción del sistema

**EducaTE** es una plataforma frontend de gestión de proyectos educativos, desarrollada con React, TypeScript y Vite.

- Arquitectura basada en roles:
  - **Coordinadores**: privilegios administrativos para gestionar usuarios, proyectos y escuelas.  
  - **Estudiantes**: seguimiento y gestión de su progreso en los proyectos.

- Implementación:
  - El nombre “EducaTE” está presente en el panel del coordinador (`src/características/Coordinador/Dashboard/Dashboard.tsx`, línea 118).  
  - Funciona como la plataforma central de tecnología educativa.

## Roles de usuario y funciones principales

### Coordinadores

Los coordinadores acceden al panel principal con tres áreas de gestión principales:

- **Administración de usuarios**: crear, editar y eliminar usuarios del sistema con asignaciones de roles.  
- **Visualización de proyectos**: ver y modificar estados de proyectos.  
- **Gestión Escolar**: gestionar la información institucional y las asociaciones.  
### Estudiantes

Los estudiantes tienen una interfaz enfocada para:

- **Visualización de proyectos asignados**: acceder a los proyectos en los que participan.  
- **Agregar actualizaciones de progreso**: registrar avances y comentarios sobre su trabajo.  
- **Gestión de entregables**: subir y gestionar los entregables asociados a cada proyecto.  

## Arquitectura de sistemas de alto nivel

![Arquitectura de sistemas de alto nivel](https://i.postimg.cc/VNYV2D97/Captura-de-pantalla-2025-05-25-231221.png)

**Descripción general de la arquitectura:**  
La aplicación sigue una arquitectura basada en componentes con una clara separación entre:

- **Autenticación**  
- **Enrutamiento**  
- **Interfaces específicas por rol**

El componente **Dashboard** actúa como interfaz central de coordinación, gestionando el estado global y orquestando las interacciones entre los distintos paneles de administración.

**Fuentes:**  
- `src/App.tsx` (líneas 1–35)  
- `src/características/Coordinador/Dashboard/Dashboard.tsx` (líneas 1–356)  
## Áreas de funcionalidad central

### Navegación y gestión del estado

El panel del coordinador implementa un sistema de navegación basado en secciones, utilizando el manejo de estado de **React** para determinar qué vista mostrar en cada momento.

![Navegación y gestión del estado](https://i.postimg.cc/xTGr7JD1/image.png)
### Gestión de estados

El panel utiliza el **estado local de React** para:

- Gestionar la navegación entre secciones.  
- Controlar colecciones de entidades (usuarios, proyectos, escuelas).  
- Administrar operaciones **CRUD** en cada área de gestión.  
- Controlar la visibilidad y comportamiento de **modales**.

**Fuentes:**  
- `src/características/Coordinador/Dashboard/Dashboard.tsx` (líneas 36–110)
## Entidades e interfaces de datos

El sistema define estructuras de datos centrales para los tres tipos de entidades principales:

| **Entidad** | **Interfaz** | **Propiedades clave**         |
|-------------|--------------|-------------------------------|
| Usuario     | `User`       | `id`, `name`, `role`          |
| Escuela     | `Colegio`    | `id`, `nombre`, `direccion`   |
| Proyecto    | `Proyecto`   | `id`, `nombre`, `direccion`   |
## Pila de tecnología

Dependencias centrales:

| Categoría                  | Tecnología               | Objetivo                                    |
|----------------------------|--------------------------|---------------------------------------------|
| Estructura                 | React 19.1.0             | Biblioteca de componentes de interfaz de usuario |
| Idioma                     | TypeScript 5.8.3         | Desarrollo con seguridad de tipos           |
| Herramienta de construcción| Vite 6.3.5               | Herramientas de desarrollo y construcción   |
| Enrutamiento               | React Router DOM 7.6.0   | Navegación del lado del cliente             |
| Cliente HTTP               | Axios 1.9.0              | Comunicación API                            |
| Gestión del Estado         | Estado actual 5.0.5      | Estado de la aplicación                     |
## Interfaz de usuario y estilo

Dependencias de UI y estilo:

| Tecnología             | Objetivo                                      |
|------------------------|-----------------------------------------------|
| Material UI 7.1.0      | Biblioteca de componentes y cuadros de diálogo |
| Tailwind CSS 3.4.17    | Estilo que prioriza la utilidad               |
| Iconos de React 5.5.0  | Componentes de iconos                         |
| Heroicons React 2.2.0  | Conjunto de iconos adicionales                |
## Herramientas de desarrollo

| Herramienta             | Objetivo                                |
|-------------------------|-----------------------------------------|
| ESLint                  | Pelado y formateo de código             |
| ESLint de TypeScript    | Pelado específico de TypeScript         |
| PostCSS                 | Procesamiento de CSS                    |
| Prefijador automático   | Prefijos de proveedores de CSS          |
## Puntos de entrada de la aplicación

![Puntos de entrada de la aplicación](https://i.postimg.cc/WbNSNhq3/image.png)

**Estructura de enrutamiento:**  
La aplicación utiliza **React Router** con rutas protegidas para controlar el acceso según el estado de autenticación. Los puntos de entrada principales separan:

- Páginas de autenticación públicas  
- Funciones protegidas de la aplicación  

**Fuentes:**  
- `src/App.tsx` (líneas 10–33)

---

El sistema **EducaTE** proporciona una plataforma integral de gestión educativa con:

- Clara separación de roles  
- Sólida gestión de estados  
- Arquitectura moderna basada en React que admite la administración escalable de proyectos educativos  
## Descripción general del proyecto

El frontend de **EducaTE** es una aplicación de una sola página (SPA) basada en React y desarrollada con tecnologías web modernas. El proyecto utiliza Vite como herramienta de desarrollo, TypeScript para garantizar la seguridad de tipos y un conjunto de dependencias cuidadosamente seleccionadas para soportar la gestión educativa basada en roles.

### Configuración del proyecto

```json
{
  "name": "proyecto-web-ondas-frontend",
  "type": "module",
  "version": "0.0.0",
  "private": true
}
```
**Fuentes:** 
- `spackage.json` (líneas 1–11)
## Construir arquitectura del sistema

El sistema de compilación del frontend de **EducaTE** está basado en **Vite**, que proporciona tanto:

- Un servidor de desarrollo rápido
- Capacidades de empaquetado para producción

### Proceso de construcción

- **TypeScript**: El compilador se ejecuta previamente para garantizar la **seguridad de tipos**.
- **ESLint**: Se encarga de realizar **comprobaciones de calidad del código** antes de la construcción final.

**Fuentes:**  
- `package.json` (líneas 6–10, 44–54)

| Herramienta                   | Objetivo                                     |
|-------------------------------|-----------------------------------------------|
| **TypeScript**                | Análisis de tipo estático                     |
| **@types/react**              | Definiciones de tipos de React                |
| **@types/react-dom**          | Definiciones de tipos de DOM de React         |
| **ESLint**                    | Revisión de código y aplicación de estilos    |
| **@eslint/js**                | Configuraciones de JavaScript de ESLint       |
| **eslint-plugin-react-hooks** | Reglas de linting de React Hooks              |
| **eslint-plugin-react-refresh** | Soporte para React Fast Refresh             |
| **typescript-eslint**         | Integración de TypeScript con ESLint          |
| **Vite**                      | Servidor de desarrollo y empaquetador         |
| **@vitejs/plugin-react**      | Integración de React para Vite                |
| **PostCSS**                   | Herramienta de transformación de CSS          |
| **Autoprefixer**              | Prefijado automático de proveedores de CSS    |
| **TailwindCSS**               | Marco CSS centrado en la utilidad             |
| **globals**                   | Definiciones de variables globales en tiempo de ejecución |

Las dependencias de desarrollo se centran en la **seguridad de tipos**, la **calidad del código** y la **optimización de la compilación**.  
El ecosistema **TypeScript** proporciona una comprobación de tipos exhaustiva, mientras que **ESLint** garantiza la coherencia del código en toda la base.

**Fuentes:**  
- `package.json` (líneas 40–54)
## Configuración del sistema de módulos

El proyecto está configurado para usar **módulos ES** (`"type": "module"` en `package.json`), lo cual impacta en la gestión de importaciones y exportaciones a lo largo de todo el código base. Esta configuración permite:

- **Soporte de `await` a alto nivel** (top-level await)  
- Importaciones/exportaciones de módulos ES nativos  
- Mejorar el proceso de compilación mediante *tree shaking*  
- Compatibilidad con entornos Node.js modernos  

```jsonc
// package.json (fragmento)
{
  "type": "module",
  // ...
}
```
### Nombre y control de versiones

- **Proyecto**: `proyecto-web-ondas-frontend`  
  Componente _frontend_ del ecosistema web “Ondas” (contexto educativo).  
- **Versión**: `0.0.0`  
  Indica desarrollo activo o plantilla inicial.  
- **Privado**: `true`  
  Impide publicación en registros npm (ideal para aplicaciones, no librerías).

**Fuente:** `package.json` (líneas 1–4)  
## Componentes de Interfaz de Usuario

> Archivos fuente relevantes

Esta página documenta los componentes reutilizables de interfaz de usuario (UI) utilizados en toda la aplicación EducaTE. Estos componentes proporcionan interfaces consistentes para la gestión de datos, formularios, tablas e interacciones de usuario en funciones tanto para el coordinador como para el estudiante.

Para obtener información sobre el sistema de estilos y los tokens de diseño utilizados por estos componentes, consulta [Sistema de Estilos y Diseño](#). Para obtener detalles sobre las estructuras de datos que manejan estos componentes, consulta [Tipos y Modelos de Datos](#).

### Visión General de la Arquitectura de Componentes

La aplicación EducaTE sigue una arquitectura basada en componentes con elementos de UI reutilizables que mantienen estilos y patrones de comportamiento consistentes. Los componentes están construidos principalmente con Material-UI y un tema oscuro personalizado.

## Componentes de Formularios

### Componente `UserFormModal`

El componente `UserFormModal` proporciona una interfaz de formulario completa para la creación y edición de registros de usuarios. Maneja todos los campos relacionados con el usuario, incluyendo información personal, identificación y asignación de roles.

| Propiedad      | Tipo        | Descripción                               |
|----------------|-------------|-------------------------------------------|
| `open`         | boolean     | Controla la visibilidad del modal         |
| `onClose`      | function    | Callback para cerrar el modal             |
| `onSave`       | function    | Callback con los datos del formulario     |
| `initialData`  | Objeto Usuario | Prellena el formulario para su edición |

### Patrones de Estilo de Componentes

#### Tema Oscuro Consistente

Todos los componentes implementan un tema oscuro consistente con el siguiente esquema de colores:

| Elemento           | Código de Color | Uso                                     |
|--------------------|------------------|------------------------------------------|
| Fondo              | `#1e293b`        | Fondos de modales y tablas               |
| Fondo de Entradas  | `#334155`        | Fondos de campos de formulario           |
| Texto Primario     | `#fff`           | Contenido de texto principal             |
| Texto Secundario   | `#ccc`           | Etiquetas y texto secundario             |
| Encabezados        | `#7dd3fc`        | Encabezados de tabla                     |
| Contenido          | `#e2e8f0`        | Contenido de celdas en tabla             |
| Acción Editar      | `#60a5fa`        | Color del botón de edición               |
| Acción Eliminar    | `#f87171`        | Color del botón de eliminación           |


### Componente `ColForm`

El componente `ColForm` gestiona la creación y edición de escuelas/instituciones con una interfaz simplificada de tres campos.

| Campo           | Tipo    | Validación             |
|------------------|---------|-------------------------|
| `nombre`         | string  | Requerido, sin espacios al inicio/final |
| `ciudad`         | string  | Requerido, sin espacios al inicio/final |
| `departamento`   | string  | Requerido, sin espacios al inicio/final |

### Módulo de API de Usuario

El módulo `userApi.ts` proporciona operaciones CRUD completas para la gestión de usuarios. Todas las funciones son asíncronas y retornan promesas que se resuelven con los datos de la respuesta.

| Función                                | Método HTTP | Endpoint         | Propósito                          |
|----------------------------------------|-------------|------------------|-------------------------------------|
| `getUsers()`                           | GET         | `/usuarios`      | Obtener todos los usuarios         |
| `createUser(user: any)`                | POST        | `/usuarios`      | Crear un nuevo usuario             |
| `updateUser(id: string, user: any)`    | PATCH       | `/usuarios/:id`  | Actualizar un usuario existente    |
| `deleteUser(id: string)`               | DELETE      | `/usuarios/:id`  | Eliminar un usuario por su ID      |

```

// Cargando datos
const loadUsers = async () => {
  try {
    const data = await getUsers();
    setUsers(data);
  } catch (err) {
    console.error('Error cargando usuarios:', err);
  }
};

// Creando/actualizando
const handleSaveUser = async (user: User) => {
  try {
    if (editingUser) {
      await updateUser(editingUser.id!.toString(), user);
    } else {
      await createUser(user);
    }
    await loadUsers();
  } catch (err) {
    console.error('Error guardando usuario:', err);
  }
};
```


## User Interface Components

> Relevant source files

This page documents the reusable UI components used throughout the EducaTE application. These components provide consistent interfaces for data management, forms, tables, and user interactions across both coordinator and student features.

For information about the styling system and design tokens used by these components, see [Styling and Design System](#). For details about the data structures these components handle, see [Data Types and Models](#).

### Component Architecture Overview

The EducaTE application follows a component-based architecture with reusable UI elements that maintain consistent styling and behavior patterns. The components are primarily built using Material-UI with custom dark theme styling.



# Herramientas de Desarrollo

> Archivos fuente relevantes

Este documento cubre las herramientas de desarrollo, configuración de compilación y configuración del flujo de trabajo para el sistema de gestión educativa EducaTE. Se enfoca en la infraestructura técnica que respalda el proceso de desarrollo, incluyendo el sistema de construcción, herramientas de calidad de código, control de versiones y flujo de trabajo de desarrollo.

Para obtener información sobre la estructura del proyecto y sus dependencias, consulta la sección [Estructura del Proyecto](#). Para instrucciones sobre la configuración del entorno de desarrollo, consulta la sección [Configuración del Entorno de Desarrollo](#).

---

## Sistema de Compilación

El proyecto utiliza **Vite** como herramienta principal de construcción, configurado para una aplicación React + TypeScript. Vite proporciona un inicio rápido del servidor de desarrollo, reemplazo de módulos en caliente (HMR) y compilaciones optimizadas para producción.

---

## Configuración de Vite

El sistema de compilación está configurado como una aplicación React moderna con soporte para TypeScript. Existen dos plugins oficiales disponibles para la integración de React con Vite:

| Plugin                        | Descripción                          | Caso de Uso                          |
|------------------------------|--------------------------------------|--------------------------------------|
| `@vitejs/plugin-react`       | Usa Babel para Fast Refresh          | Desarrollo estándar con React        |
| `@vitejs/plugin-react-swc`   | Usa SWC para Fast Refresh            | Alternativa con compilación más rápida |

## Integración con TypeScript

TypeScript está integrado en todo el proceso de compilación, proporcionando seguridad de tipos y una experiencia de desarrollo mejorada. La configuración admite:

- Verificación de tipos durante el desarrollo
- Detección de errores en tiempo de compilación
- Soporte para IntelliSense y autocompletado
- Reglas de linting conscientes de tipos
## Herramientas de Calidad de Código

### Configuración de ESLint

El proyecto utiliza ESLint para reforzar la calidad del código y mantener la consistencia. Este README proporciona orientación para ampliar la configuración de ESLint en aplicaciones de producción.

#### Configuración Básica

- Utiliza configuraciones de ESLint para TypeScript
- Admite reglas de linting conscientes de tipos
- Aplicación opcional de reglas de estilo

#### Configuración Lista para Producción

Para aplicaciones en producción, el sistema admite configuraciones de ESLint mejoradas:

```ts

// Configuración recomendada desde README.md
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Alternativa: ...tseslint.configs.strictTypeChecked,
    // Opcional: ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Configuración del Control de Versiones

### Configuración de Git

El proyecto utiliza Git para el control de versiones con una configuración específica para el flujo de trabajo de desarrollo. La configuración de Git incluye varios ajustes importantes:

#### Ajustes Básicos de Git

- Versión del formato del repositorio: 0  
- Modo de archivos: false (compatibilidad con Windows)  
- Enlaces simbólicos (symlinks): false (compatibilidad con Windows)  
- Sensibilidad a mayúsculas y minúsculas: true  
- Manejo automático de CRLF: true  

#### Repositorio Remoto

- URL de origen: `https://github.com/thePanaMiguel09/proyecto-web-ondas-fronted.git`  
- Rama por defecto: `main`  
- Configuración de fetch: `+refs/heads/*:refs/remotes/origin/*`  

#### Configuración del Usuario

- Nombre de usuario: `MarinBotScript`  
- Correo electrónico del usuario: `marinfrank222@gmail.com`  

### Git LFS Support

The configuration includes Git Large File Storage (LFS) settings:

- Clean filter: `git-lfs clean -- %f`
- Smudge filter: `git-lfs smudge -- %f`
- Process filter: `git-lfs filter-process`
- Required: true

---

### Branch Structure

| **Branch** | **Purpose**                   | **Configuration**                    |
|------------|-------------------------------|--------------------------------------|
| `main`     | Primary development branch     | Default branch, tracks `origin/main` |
| `frank`    | Feature/developer branch       | Tracks `origin/frank`                |
| `crisFinal`    | Feature/developer branch       | Tracks `origin/crisFinal`        |
