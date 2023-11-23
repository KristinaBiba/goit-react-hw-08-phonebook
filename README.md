![last commit](https://img.shields.io/github/last-commit/KristinaBiba/goit-react-hw-08-phonebook?style=plastic) ![](https://img.shields.io/badge/contributors-KristinaBiba-yellow.svg?style=plastic) ![](https://img.shields.io/github/commit-activity/t/KristinaBiba/goit-react-hw-08-phonebook?style=plastic)

# Phonebook

A simple phonebook connected to [Node.js rest api](https://github.com/KristinaBiba/nodejs-rest-api) backend. After register (you need to confirm your email) you can add, remove or filter contacts. For authentication user mast log in and can log out when the need arises.

## Demo version to try using

[You can open the live page by clicking on this text](https://kristinabiba.github.io/goit-react-hw-08-phonebook/)


## Installation

### React homework template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Preparing for work

1. Make sure that the LTS version of Node.js is installed on your computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the basic dependencies of the project using the `npm install` command. 
3. Start development mode by running the `npm start` command.
4. Go to the address [http://localhost:3000](http://localhost:3000) in your browser.
   This page will automatically reload after saving changes to
   project files.
  

### Deploy

The production version of the project will automatically undergo linting, build and deploy to GitHub Pages, to the `gh-pages` branch, every time the `main` branch is updated. For example, after a direct push or an accepted pull request. For this you need to edit the `homepage` field in the `package.json` file, replacing `kristinabiba` and `goit-react-hw-08-phonebook` with your own, and send the changes to GitHub.

```json
"homepage": "https://kristinabiba.github.io/goit-react-hw-08-phonebook/"
```

Next, you need to go to the GitHub repository settings (`Settings` > `Pages`) and set the distribution of the production version of files from the `/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)


### Routing

If your application uses the `react-router-dom` library for routing, you must additionally configure the `<BrowserRouter>` component by passing the exact name of your repository to the `basename` prop. A slash at the beginning of a line is required.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## Tech Stack

**Client:** React Hooks & Components, React Redax, React Toolkit, HTML, CSS.

**Libraries in the Project:** react-redux, redux-persist, react-router-dom, react-toastify, react-loader-spinner, @reduxjs/toolkit, axios, nanoid, @mui/material, @mui/icons-material.


## Authors

- [@KristinaBiba](https://github.com/KristinaBiba)


## 🔗 Links for communication with Author:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristina-biba/)
[![telegram](https://img.shields.io/badge/telegram-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://t.me/kristina_biba)
