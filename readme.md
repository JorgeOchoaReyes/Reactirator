<h1 align="center">Welcome to cra-generator 👋</h1>
<h3 align="center">An open source application to generate a react application, with packages installation and configuration automatized</h3>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Leopold-V/cra-generator" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>
<div align="center">![screen](https://i.gyazo.com/90f141585ef0282572d0ebc7ee647ea0.png)</div>

## What is it ?

Desktop application built with Electron using TypeScript, React and Node. 
The objective is to provide a simple UI to create a react application with any configs and packages you want without ever touching a cmd.
So you can start a project in no time.

It avoid you to repeat boring task such as installing/config tailwind, bootstrap etc. and every npm packages. Under the hood the application automatized all of this by running cli command at your place.
More cool stuffs are there such as npm packages informations, a real time package.json to know what your are actually generated, a drag and drop system to switch your packages between dependencies and dev dependencies etc.

In the long run the project goal is to extend the possible customizations providing you more control over the generation and more advantages to use this project.

Everything is generated on top of [create-react-app](https://github.com/facebook/create-react-app) so you don't have to worry about the base project requirements such as bundlers, tests etc.

## Features

- Generate a react application on top of create-react-app.
- Auto install->config a couple of famous packages which usually require files edit and sometimes more in depts research to configure such as [tailwind configuration](https://tailwindcss.com/docs/guides/create-react-app) in a create-react-app project
- Search npm packages and auto install them.
- Drag and drop your packages between dependencies and dev dependencies.
- Have information about packages such as the installation size, a short description and npm score.
- Vizualize your package.json informations in real time.

## Usage

To use this app you can either download binaries files in the [release section](https://github.com/Leopold-V/cra-generator/releases)
or clone the project and test it in your dev environment :

```sh
git clone https://github.com/Leopold-V/cra-generator.git
```
```sh
npm install
```
```sh
npm run start
```

## Todo

- [ ] improve global styles
- [ ] Add the possibility to custom the scripts section of the package.json.
- [ ] The request module to get npm registry data is slow.
- [ ] The custom packages like bootstrap in the form aren't includes in the extra dependencies package for now.
- [ ] add tests

## Want to Contribute ?

The project is open to any contributions, even if you are a beginner it doesn't matter.

As long as you respect the contributor [code of conduct](https://github.com/leopold-v/cra-generator/blob/main/CODE_OF_CONDUCT.md)

Please, if you notice a bug, have a feature or enhancement to propose, don't hesitate and open a pull request.

## Author

👤 **Leopold-V**

## Show your support

Give a ⭐️ if this project helped you!
