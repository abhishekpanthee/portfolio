
<h1 align="center">Abhishek Personal Portfolio </h1>
<p align="center">
  <a href="http://abhishekpanthee.com.np/" target="blank"><img src="https://shotcan.com/images/2024/07/09/Screenshot-from-2024-07-09-21-12-2826decb2f96e9958c.png" width="320" alt="portfolio website" /></a>
</p>

🔎 This repo was created with [Nx](https://nx.dev/).

### 📚 Description

Preview: https//abhishekpanthee.com.np/

This portfolio website was built with ease of extensibility in mind. This app comes with **MDX** for case-studies and blog management and **Bootstrap** for styling. The app has redux state management via **Redux Toolkit** and **React Hooks**.

### 🚀 Deployment

#### Manual Deployment without Docker

- Clone the repo via `https://github.com/abhishekpanthee/portfolio.git`

- Navigate to the root directory of repo via `cd portfolio`.

- Download dependencies via `npm i` or `yarn`.


- Start the app in development mode via `npm run start` (the app will be exposed on http://localhost:4200)

> Remark: In the docker deployment, the UI is automatically started and served by the API.

#### Deploying with Docker 🐳

- Execute the following command in-app directory:

```bash
# creates and loads the docker container in detached mode with the required configuration
$ docker-compose up -d
```

- The following command will download dependencies and execute the web application on http://localhost:80 (deployed behind a Nginx )


### 📁 Repository Files and Folders

```text
.
├── Dockerfile
├── README.md
├── apps
│   └── personal-portfolio
│       ├── case-studies
│       ├── index.d.ts
│       ├── jest.config.ts
│       ├── next-env.d.ts
│       ├── next.config.js
│       ├── pages
│       ├── posts
│       ├── project.json
│       ├── public
│       ├── tests
│       ├── tsconfig.json
│       ├── tsconfig.spec.json
│       └── utils
│   
│       
│       
│       
│       
├── assets
│   └── open-link.svg
├── compose.yaml
├── dist
│   └── apps
│       └── personal-portfolio
├── jest.config.ts
├── jest.preset.js
├── libs
│   ├── core-components
│   │   ├── README.md
│   │   ├── project.json
│   │   ├── src
│   │   ├── tsconfig.json
│   │   └── tsconfig.lib.json
│   └── store
│       ├── README.md
│       ├── project.json
│       ├── src
│       ├── tsconfig.json
│       └── tsconfig.lib.json
├── nx.json
├── package-lock.json
├── package.json
├── tools
│   └── tsconfig.tools.json
└── tsconfig.base.json
```

This template is built using Next.js and Bootstrap v5 and free to use and modify to anyone.

Give it a star 🌟 on Github if you find it useful


