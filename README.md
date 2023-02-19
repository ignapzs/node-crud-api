# node-crud-api
<a name="readme-top"></a>
Node CRUD API

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The Project
This is a basic CRUD example API, to show some basic capabilities of the technologies involved.

### Built With

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)

<p style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone this repo, and just let your favourite IDE open the downloaded project.

<p style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>

## Usage

Just build the docker image, and you could launch it with Postman [suite](postman/Node%20CRUD%20with%20PostgreSQL.postman_collection.json) / [environment](postman/Node%20CRUD%20-%20Local.postman_environment.json) provided.

### Docker
To build the Docker image:
```console
docker compose build
```
After that, we could start the application:
```console
docker compose up
```

And to stop it
```console
docker compose down
```

You can remove stopped containers using the command
```console
docker container prune
```


<p style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>