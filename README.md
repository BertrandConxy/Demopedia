<a name="readme-top"></a>

<div align="center">

  <h3><b>Demopedia</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[Demopedia\] ](#-demopedia-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
      - [GraphQL API Server](#graphql-api-server)
        - [MongoDb Atlas Set up](#mongodb-atlas-set-up)
      - [Testing GrapQL API](#testing-grapql-api)
      - [Running the Frontend](#running-the-frontend)
    - [Run GraphQL query Tests](#run-graphql-query-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [Demopedia] <a name="about-project"></a>

Demopedia is a Full stack web app which enables users to view countries demographic data. On top of that, they can perform CRUD operations on the database. Backend is implemented using the MongoDb Atlas, Apollo Server and GraphQL API. The Frontend is implemented using Next.js and Apollo Client.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://www.apollographql.com/docs/react/">Apollo client</a></li>
  </ul>
</details>

<details>
  <summary> Backend & Server</summary>
  <ul>
    <li><a href="https://www.apollographql.com/docs/apollo-server">Apollo Server</a></li>
    <li><a href="https://cloud.mongodb.com/">MongoDB Atlas</a></li>
    <li><a href="https://graphql.org/">GraphQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **GraphQL interface**
- **View Country demographic**
- **Creating, Updating and Deleting country data**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

Not yet deployed

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Nodejs
- Yarn
- MongoDB Atlas

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/BertrandConxy/Demopedia.git
```

### Install

Install this project with:

```sh
  cd Demopedia
  npm install
```

### Usage

#### GraphQL API Server

##### MongoDb Atlas Set up

You will need DB URI to connect to the database. After setting up the MongoDb Atlas:

- Create `.env` file.
- Assign db URI to the DB_URI environment variable

Run the server:

```sh
npm run server
```

You will get The following output:

```sh
🚀 Server ready at http://localhost:4000/api/countries
Database connection successful!
seed data was added successfully
```

#### Testing GrapQL API

If you run the above url while the server is running, it will open up Apollo server sandbox:

![client-test](https://user-images.githubusercontent.com/90222110/226990484-aedc7651-4665-469c-afbb-fcd5cc769acc.PNG)

#### Running the Frontend

While the server is running, open another terminal and change the directory to `frontend`:

```sh
cd frontend
```

Install all the packages:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

##### Quick Preview

![Demopedia](https://user-images.githubusercontent.com/90222110/226990657-afc06859-f89f-4e61-84e8-246fcf2562d3.PNG)

### Run GraphQL query Tests

To run tests, run the following command:

```sh
  npm run test
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Bertrand Mutangana Ishimwe**

- GitHub: [@BertrandConxy](https://github.com/BertrandConxy)
- Twitter: [@Bconxy](https://twitter.com/BertrandMutanga)
- LinkedIn: [Bertrand Mutangana Ishimwe](https://www.linkedin.com/in/bertrandmutangana)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **View more info about the country**
- [ ] **Display Demographic data in charts**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/BertrandConxy/Demopedia/issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please don't hesitate to contact me so that we can see how we can improve it and please give it a star 😎

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank Microverse

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
