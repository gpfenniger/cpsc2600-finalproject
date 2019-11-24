# CPSC 2600 Final Project

**Author:**
Griffin Pfenniger

**SID:**
100285813

**Semester:**
Langara Fall of 2019

## Purpose

To build a project that takes advantage of all the technologies learned during the Fall of 2019.

This project builds a simple blog to demonstrate an understanding of Express and React.JS

This site is deployed using Heroku. The sites deployment is attached to this project's GitHub repository.

## Tech Stack

-   Mongoose
-   Express
-   React
-   Node
-   Webpack
-   Axios
-   Heroku

## API Documentation

| Endpoints           | Supported HTML Requests | Description                                   |
| ------------------- | ----------------------- | --------------------------------------------- |
| /api/article/:slug  | GET POST PUT DELETE     | for searching, creating or viewing articles   |
| /api/page/:slug     | GET POST PUT DELETE     | for searching, creating or viewing pages      |
| /api/category/:name | GET POST PUT DELETE     | for searching, creating or viewing categories |
| /user/login         | GET POST                | for posting login info or viewing login page  |
| /user/logout        | POST                    | for posting key to logout                     |
| /user/admin         | POST                    | for posting key to confirm admin access       |
| /                   | GET OPTIONS             | for accessing React SPA                       |

### Status Codes Used

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Document Created      |
| 202         | Accepted              |
| 204         | No Content            |
| 307         | Redirected URI        |
| 400         | Improper Request      |
| 401         | Unauthorized          |
| 404         | URI Not Found         |
| 408         | Request Timeout       |
| 412         | Failed to Validate    |
| 500         | Internal Server Error |
| 501         | Not Implemented       |

### Middleware Used

| Function Name | Endpoint                  | Description                                            |
| ------------- | ------------------------- | ------------------------------------------------------ |
| Admin Access  | /api/\* DELETE, POST, PUT | checks if user has permission before creating document |
| Validation    | /api/\* POST, PUT         | validates user input                                   |
| Sanitization  | /api/\* POST, PUT         | sanitizes user input                                   |
| Error Handler | \*                        | checks for any errors                                  |

## Setup Instructions

```
git clone https://github.com/gpfenniger/CPSC2600_Final_Project gpfenniger00
cd gpfenniger00
npm install

npm run start

// development mode
// first terminal
npm run watch
npm run dev

// site login
griffinpfenniger
westernredcedar
```

## MongoDB Collections and Schemas

-   Article: Name, Content, Slug, Created, Tags
-   Page: Name, Content, Slug
-   User: Username, Password
-   Category: Name, Article IDs

## What I Would Improve

-   An important piece to add is an SSL Certificate, unfortunatley this costs money of Heroku
-   Switch out stateless components with component functions
-   Switch out using HOC for responsive design with react-breakpoints
-   Use react-router instead of passing state to make calls
-   Use Redux to manage global state such as a login key

## Final Notes

-   .prettierrc holds the configuration for formating the code, can work with VSCode or be run with `npm run pretty`
-   Login system was designed just for this site
-   Supports a mobile layout by using high order components
