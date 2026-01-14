# Portfolio - Francisco Gonçalves

This is the personal portfolio website of Francisco Gonçalves, built to showcase my professional experience, skills, and projects. The application is a modern, responsive single-page web application developed with **React 19** and **TypeScript**.

## 🚀 Technologies Used

-   **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [React Router DOM](https://reactrouter.com/)
-   **Internationalization:** [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
-   **UI Components:** [Radix UI](https://www.radix-ui.com/), [FontAwesome](https://fontawesome.com/)
-   **Testing:** [Vitest](https://vitest.dev/)

## ✨ Features

-   **Internationalization (i18n):** Full support for English (`en`) and Portuguese (`pt`), handled via URL routing (e.g., `/en`, `/pt`).
-   **Responsive Design:** Fully adaptive layout optimized for mobile, tablet, and desktop screens using Tailwind CSS.
-   **Interactive UI:** Smooth transitions and animations powered by Framer Motion.
-   **Sections:**
    -   **Hero:** Introduction and call to action.
    -   **About Me:** Personal bio and background.
    -   **Education:** Academic qualifications.
    -   **Work Experience:** Professional history.
    -   **Skills:** Technical proficiency and tools.
    -   **Projects:** Showcase of selected projects.
    -   **Footer:** Contact information and social links.

## 🛠️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/franciscorg/portfolio.git
    cd portfolio
    ```
    *(Note: Replace the URL with the actual repository URL if different)*

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

### Production Build

To build the application for production:

```bash
npm run build
```

This creates a `dist` folder with the optimized assets.

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

A quick overview of the top-level directory structure:

```
src/
├── assets/          # Static assets (images, icons)
├── config/          # Configuration (i18n, animation settings)
├── features/        # Feature-specific components (Hero, AboutMe, etc.)
├── layout/          # Layout components (Layout, LocaleWrapper)
├── shared/          # Reusable shared components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── App.tsx          # Main application component & routing
└── main.tsx         # Application entry point
```

## 📜 Available Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Compiles TypeScript and builds the app for production.
-   `npm run preview`: Locally previews the production build.
-   `npm run lint`: Runs ESLint to identify code quality issues.
-   `npm run format`: Formats code using Prettier.
-   `npm run test`: Runs unit tests using Vitest.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
