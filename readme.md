# CPSC 2600 Final Project

**Author:**
Griffin Pfenniger

**SID:**
100285813

**Semester:**
Langara Fall of 2019

## Purpose

To build a project that takes advantage of all the technologies learned during the Fall of 2019.

This project builds an easy to customize blog which features a simple dashboard and code structure
for adding articles or changing colours.

This site is deployed using Heroku. The sites deployment is attached to this project's GitHub repository.

## Tech Stack

* Mongoose
* Express
* React
* Node
* Webpack
* Axios
* Heroku

## API Documentation

| Endpoints          | Supported HTML Requests | Description                                  |
| ------------------ | ----------------------- | -------------------------------------------- |
| /api/article/:slug | GET POST DELETE OPTIONS | for searching, creating or viewing articles  |
| /api/page/:slug    | GET POST DELETE OPTIONS | for searching, creating or viewing pages     |
| /user/login        | GET POST OPTIONS        | for posting login info or viewing login page |
| /user/logout       | POST OPTIONS            | for posting key to logout                    |
| /user/admin        | POST OPTIONS            | for posting key to confirm admin access      |
| /                  | GET                     | for accessing React SPA                      |

### Status Codes Used

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Document Created      |
| 204         | No Content            |
| 307         | Redirected URI        |
| 400         | Improper Request      |
| 401         | Unauthorized          |
| 404         | URI Not Found         |
| 408         | Request Timeout       |
| 500         | Internal Server Error |
| 501         | Not Implemented       |

### Middleware Used

| Function Name | Endpoint                  | Description                                            |
| ------------- | ------------------------- | ------------------------------------------------------ |
| Admin Access  | [/api/article, /api/page] | checks if user has permission before creating document |
| Error Handler | /api/*                    | checks for any errors                                  |

POST Validation can be found in /api/validation.js

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

* Article: Name, Content, Slug, Created, Tags
* Page: Name, Content, Slug
* User: Username, Password
* Category: Name, Article IDs

## Final Notes

* /constants/* holds configuration information such as the websites colours
* .prettierrc holds the configuration for formating the code, can work with VSCode or be run with `npm run pretty`
* Login system was designed just for this site
