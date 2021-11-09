# Introduction

The **allcorrect** website is created using [Next.js](https://nextjs.org/), a front-end React framework; [styled-components](https://styled-components.com/), a styling component; and [Framer Motion](https://www.framer.com/motion/), an animation library.

## Getting Started

To get started with the project, ensure that you have Node version **14.17.x** or **latest** installed in your system.

1. Open your command line and enter **`cd direct/path/to/project`**.
2. Enter the command `npm install`
3. After node has installed all the packages, enter the command **`npm run dev`** to run the project in developer mode.
4. Open your browser and go to http://localhost:3000 to view the project.

To run the project in production mode, enter the command **`npm run build && npm run start`**.

## Project Structure

The project structure is as follows:

```javascript
project
│   README.md
│   package.json
│   .gitignore
│   ...
│
└───public
│   │   favicon.ico
│   │
│   └───images
│       │   type1/image1.png
│       │   type2/image2.png
│       │   ...
│
└───src
    │
    └───components
    │   │
    │   └───ComponentName
    │       │   ComponentName.js
    │       │   ComponentName.styles.js
    │
    └───context
    │   │   ContextName1.js
    │   │   ContextName2.js
    │   │   ...
    │
    └───hooks
    │   │   hook-name-1.js
    │   │   hook-name-2.js
    │   │   ...
    │
    └───pages
    │   │   _app.js
    │   │   _document.js
    │   │   page-name-1.js
    │   │   page-name-2.js
    │   └───api
    │   │   │   endpoint.js
    │   │   │   ...
    │   │
    │   └───page-name-1
    │       │   [queryId].js
    │
    └───sections
    │   │
    │   └───SectionComponent
    │       │   SectionComponent.js
    │       │   SectionComponent.styles.js
    │
    └───styles
    │   │   animations.js
    │   │   global.styles.js
    │   │   ...
    │
    └───utils
    │   │   constantFile.js
    │   │   helperFile.js
    │   │   ...
    │

```

### Components

**Components** found in the **`/src/components`** are composed mainly of html tags or components made from their individual style file.

Each **section** is made up of `basic` components found in the `/src/components` folder and are also styled by it's own style.

Each component is accompanied by their own **style** file to handle CSS related code and is denotated with the suffix, `.styles.js`.

### Pages

Each page is comprised of **`section`** components found in the `/src/sections` folder. The route (Ex. [http://localhost:3000/**portfolio**](http://localhost:3000/portfolio)) is associate by it's file name (`portfolio.js`). To create new pages/routes, simply create a new javascript file under the `/src/pages`.

For more information on how to create pages, refer to this [documentation](https://nextjs.org/docs/basic-features/pages).

### Animations

Animations are created using Framer-motion. Use the **`src/styles/animation.js`** to create new or edit existing animations.

Refer to this [documentation](https://www.framer.com/docs/) for guides on creating animations.
Refer to this [documentation](https://www.framer.com/docs/) for using styled-components in conjunction with Framer-motion.

### Project Settings

The project file settings, found in the root of the project, are configuration files for developing, and building the project. The following are their uses:

- **package.json**. Contains the dependency packages that the website needs and command scripts to build or run the project locally.
- **prettier.config.js**. Contains the configuration settings for the [prettier](https://prettier.io/) code formatter for a cleaner code.
- **next.config.js**. Contains the configuration settings for the Next.js project.
- **.babelrc**. Contains the settings for Babel, a Javascript compiler, to compile the code into a backwards compatible code for older browsers.
- **.gitignore**. Ignores the files that you don't want in your git repository.
- **.prettierignore**. Ignores the files that you don't need to refactor with the same coding style specified in `prettier.config.js`.

## Building the App

To build the project and get production ready code, just run `npm run build`

## How to Deploy

The recommended way to deploy the project is through Vercel's platform. You can read this [documentation](https://nextjs.org/docs/deployment).

If you want to use pre-existing servers or cloud services, as long as it supports hosting **Node.js** web applications, refer to this [documentation](https://nextjs.org/docs/deployment#other-hosting-options).

If you want to get the static html files, go to the `next.config.js` and uncomment the **images** config object. In your command line, run `npm run export`. An `out` folder containing the static files wil be built inside the root folder of the project. You can refer to this [documentation](https://nextjs.org/docs/advanced-features/static-html-export) for clearer instructions.

## Recommendations

- To increase readability and maintainability of the code, it is recommended to adopt a global styling system. The recommended CSS framework to use is [Tailwind CSS](https://tailwindcss.com/) as it follows a utility-first philosophy and has a convenient configuration file that is easy to manage and integrate into the project. Wichever CSS library you do use, you can remove cuttering coponents in the project such as `Title`, `Text`, `Subtext`, and etc.  

  You can find an example usage of Tailwind [here](https://github.com/sayus2884/portfolio).

- When creating components, use **colocation** as much as possible. Colocation, in context with the project, means that any logic, state, or information should be closely tied to it's component as much as possible to avoid multiple renders that causes the website to run slow.

  A good use case for it is a sign in form with `username` and `password` inputs. In React, in order to get the value in any text input, you need to use the `onChange` handler which causes the whole component that the input is located in, to render every key press. So if you placed the state for that input on top website's tree, you'll slow down the website's performance. To avoid this, it is always best to separate forms in their own component as opposed to placing them inside parent components that has complex states in them. You can read more about colocation [here](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster).
  
- The `GetInTouch` form and `Checkbox` components needs to be refactored. Much of the logic is all over the place, making the component hard to maintain or change.

- There were no set coding standards implemented in the duration of the project, making some parts of the project hard to maintain or read. It is recommended to set one so future developers know what to expect and how to code in the project.
