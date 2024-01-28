<div align="center">
<img src="https://salvaft.dev/favicon.webp" height="50px" width="auto" /> 
<h2>
    CV and cover letter generator
</h2>
<p>Created to ditch my old latex templates</p>
</div>

<div align="center">
    <a href="https://cv-1um.pages.dev/cv/company-one/meneillos/" target="_blank">
        Preview
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-commands">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://salvaft.dev">
        Personal
    </a>
   
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/salvaft/astro-sft)
![GitHub issues](https://img.shields.io/github/issues/salvaft/astro-sft)
![GitHub forks](https://img.shields.io/github/forks/salvaft/astro-sft)
![GitHub PRs](https://img.shields.io/github/issues-pr/salvaft/astro-sft)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)

</div>

<img src="https://salvaft.dev/projects/cv.webp"></img>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The web framework for content-driven websites.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**Vite**](https://vitejs.dev/) - Next generation frontend tooling.

## 🚀 Getting Started

### 1. Create a new Astro project


- I use [pnpm](https://pnpm.io/installation) to install and manage the dependencies.

```bash
# Install pnpm for MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate
```
- Create the starter:
```bash
pnpm create astro@latest
```

### 2. Create a new Astro project
- Install the package:
```bash
pnpm add @salvaft/astro-cv
```

- Install the mdx integration using the Astro CLI:

```bash
pnpm astro add mdx
```

### 3. Run the development server:

```bash
# Run with pnpm:
pnpm dev
```
1. Add your info in `src/content`
See the mock data for reference.

1. Open [**http://localhost:4321**](http://localhost:4321/) with your browser to see the result 🚀



## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Check for errors and build your production site to `./dist/`.      |
| ⚙️  | `preview`        | Preview your build locally, before deploying. |


## ✅ To do...

- [ ] Add more cv flavors
