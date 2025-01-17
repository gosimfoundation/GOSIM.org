
# GOSIM Org Website

This is a single-page website developed using Vue 3, TailwindCSS, and Vite. The project is set up for deployment to GitHub Pages.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Getting Started](#getting-started)
3. [Running the Project Locally](#running-the-project-locally)
4. [Building the Project](#building-the-project)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)

---

## Requirements

Before running or deploying the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [Git](https://git-scm.com/) (for deployment)

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/CJHersh/GOSIM.org.git
   ```

2. Navigate to the project directory:
   ```bash
   cd GOSIM.org
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Project Locally

To run the project in development mode, use the following command:
```bash
npm run dev
```
- Open your browser and go to the URL provided by Vite (usually `http://localhost:5173`).

---

## Building the Project

To create a production-ready build of the project:
```bash
npm run build
```

- The built files will be located in the `dist` directory.

---

## Deploying to GitHub Pages

The project is configured to deploy to GitHub Pages using the `gh-pages` package.

1. **First-Time Deployment Setup**:
   Ensure that the `gh-pages` branch exists on your repository. If it doesn’t, you can create it manually.

2. Run the deployment script:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project.
   - Deploy the `dist` folder to the `gh-pages` branch of your repository.

3. **Access the Deployed Website**:
   After deployment, the website will be available at:
   ```
   https://CJHersh.github.io/GOSIM.org/
   ```

---

## Troubleshooting

- **GitHub Pages 404 Error**:
  - Ensure that the `base` property in `vite.config.js` is correctly set to the repository name:
    ```javascript
    export default defineConfig({
      base: '/GOSIM.org/',
    });
    ```

- **Missing `gh-pages` Branch**:
  - If the `gh-pages` branch is missing, try running:
    ```bash
    git checkout --orphan gh-pages
    git reset --hard
    git push origin gh-pages
    ```

---

## Project Structure

```
GOSIM.org/
├── public/               # Static assets served directly
├── src/                  # Source code
│   ├── assets/           # Images, styles, fonts, etc.
│   ├── components/       # Vue components
│   ├── App.vue           # Root component
│   ├── main.js           # Entry point
├── dist/                 # Built files (generated after `npm run build`)
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # TailwindCSS configuration
└── vite.config.js        # Vite configuration
```
