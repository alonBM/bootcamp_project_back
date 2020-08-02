# Bootcamp Project

Demo app is available at: https://alonbm.github.io/bootcamp_project_front/home

This project was built with NestJS and MongoDB . Is an hospital information system application. The documentation can be found at: http://his-app-alonso.herokuapp.com/api

The frontend, built with Angular 10 and Angular Material can be found at my other repo: https://github.com/alonBM/bootcamp_project_front

## Instructions to run locally with your own MongoDB

1. Install Node and Angular CLI.
2. Create a MongoDB Atlas account and a database.
3. Clone or download the frontend repo and run `npm install`.
4. Clone or download the backend repo and run `npm install`
5. In the frontend's `index.html`, change `<base href="/HIS-app/" />` to `<base href="/" />`
6. In the backend's root, create an `.env` file and add your own MongoDB credentials.
The .env file should look like this:
USER=[USER]
PASSWORD=[PASSWORD]
HOST=[HOST]
7. In the frontend, change the services' `BASE_API_URL` variable to `http://localhost`.
8. Run `npm start` on both terminals. Now the app will be running at http://localhost:4200/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ ng run start:dev

# build
$ ng build
```
