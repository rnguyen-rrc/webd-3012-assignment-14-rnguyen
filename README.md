# WEBD-3012_Assignment-14_rnguyen

**Description**: Build upon the previous assignments and use the component library to build a portfolio website that highlights the course work that I have done thus far in the program.

### 1. Setup new project folder

a. Copy folder '**webd-3012-assignment-13-rnguyen**' from previous assignment and create new folder named '**webd-3012-assignment-14-rnguyen**'

b. Inside VS Studio Code, from terminal window, run following command to ensure the app runs successfully

```
npm run dev
```

### 2. Push changes to git by following these steps

a. From the Terminal in Visual Studio Code, run the following commands:

```
git init
git add .
git commit -m "Initial Assignment 14"
```

b. Go to GitHub and create a new repository named '**webd-3012-assignment-14-rnguyen**'

c. In the Terminal, connect your local project to the GitHub repository

```
git remote add origin https://github.com/rnguyen-rrc/webd-3012-assignment-14-rnguyen.git
```

d. Rename the default branch to main (some systems still default to master, so we standardize to main)

```
git branch -M main
```

e. Push your changes to GitHub using command

```
git push -u origin main
```

### 3. Project Structure
src/ 
     components/ # Reusable UI components
          Button
          Card
          Dropdown
          HeroImage
          Img
          Label
          Navbar
          RadioButton
          ScrollToHash
          ScrollToTop
          Table
          Text
     sections/
          HeroSection.tsx #Displays the main introduction area with personal information and call-to-action buttons.
            Uses HeroImage component
          ProjectsSection.tsx #Showcases completed projects with details such as title, description, and related coursework.
            Uses Img, Text, Button and Label component
          ResourcesSection.tsx #Lists useful learning resources and references used throughout the program.
            Uses Img, Button component
          SetupSection.tsx #Lists useful learning resources and references used throughout the program.
          Use Table component
          SkillsSection.tsx #Highlights technical skills and technologies gained during the program.
            Use Label, Text component
     pages/ # Route-level pages 
          AboutPage.tsx #Displays detailed information including background and experience.
          HomePage.tsx #Displays detailed information about the developer, including background and experience.
     data/ 
          portfolioData.ts # Stores structured data such as personal info, projects, skills, and resources used across the app.

### 4. Installed Required Tools (Prettier, ESLint version 8) if not installed yet

```
npm install -D prettier eslint@8 husky lint-staged @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-prettier
```

a. Update **package.json**.

Ensure the script includes

```
 "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 0.0.0.0 --port 8018",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "test": "vitest run",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "prepare": "husky"
  },
```

b. **Set Up Prettier**

Create .prettierrc

```
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

Create .prettierignore

```
node_modules
dist
coverage
storybook-static
```

c. **Set Up ESLint**

Create .eslintrc.cjs

```
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
  },
  ignorePatterns: ['dist', 'node_modules'],
};

```

d. **Set Up Husky (Pre-commit Hook)**

Initialize Husky

```
npx husky init
```

Edit .husky/pre-commit

```
npm run format:check
npm run lint
npm test
```

e. **Verify Setup**

```
git add .
git commit -m "test pipeline"
```

**Expected behavior:**

Prettier runs.

ESLint runs.

Tests run

Commit fails if any step fails

### 5. Set up GitHub Actions

**Step 1**

Create this file: /.github/workflows/ci.yml

```
name: CI

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Check formatting
        run: npm run format:check

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm run test -- --run

      - name: Build app
        run: npm run build
```

**Step 2**

Commit and push it

```
git add .github/workflows/ci.yml
git commit -m "Add GitHub Actions CI workflow"
git push
```

**Step 3**

Open GitHub repo -> Actions tab -> confirm the workflow passes.

That gives you a solid CI pipeline: every push and pull request will lint, test, and build the app automatically.

### 6. Create a Dockerfile for localhost:5575

a. **Create Dockerfile**

From project root, create a new file '**Dockerfile**' (no file extension) in the app root folder

Prepare the Dockerfile (refer to the Dockerfile included in the project for full command details).
In general, the Dockerfile performs the following tasks:

```
**Stage 1**
Uses a lightweight Node.js image (node:20-alpine)
Sets a working directory inside the container
Copies package.json and package-lock.json
Runs npm ci to install dependencies cleanly
Copies the rest of the project files
Runs npm run build to generate a production-ready build (usually into a /dist folder)

Goal: Compile the app into static files (HTML, CSS, JS)

**Second stage (Production Server)**
Uses a lightweight Nginx image (nginx:alpine)
Deletes the default Nginx website files
Copies the built app (/dist) from the builder stage into Nginx’s web directory
Exposes port 80 (standard HTTP port)
Starts Nginx in the foreground

Goal: Serve the built static files efficiently using Nginx
```

b. **Create Docker Image**

In VS Studio Code -> Terminal, from root folder, type the following command to create docker image:

```
docker build -t nguyen_roline_coding_assignment14 .
```

Type the following command to confirm the image has been created

```
docker images
```

c. **Create Docker Container**

Type the following command to create docker container

```
docker run -p 5575:80 --name nguyen_roline_coding_assignment14 nguyen_roline_coding_assignment14
```

Type the following command to verify docker container is running

```
docker ps
```

d. **Confirm the app runs successfully using Docker**

Go to browser, type the following URL to verify that the app can be run

```
http://localhost:5575/
```

e. **Commit and push changes to Git**

```
npm run format
git add .
git commit -m "Add Dockerfile and necessary files to create Docker container"
git push
```

**Notes**: Commands to start/stop container manually if needed

```
docker start nguyen_roline_coding_assignment14
docker stop nguyen_roline_coding_assignment14
```

npx prettier src/components/Button/Button.tests.tsx --write
