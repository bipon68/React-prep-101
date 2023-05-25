## E-commerce MERN stack project

- [x] Plan
- [x] Environment setup
- [x] Create express setup -> Express
- [x] HTTP request & response
- [x] nodemon and morgan package -> nodemon, morgan
- [x] API testing with Postman
- [x] Middleware & Types of Middleware
- [x] Express Error Handling Middleware -> body-parser
- [x] How to handle HTTP errors -> http-errors
- [] How to secure API -> xss-clean, express-rate-limit

### Project create using only command
- Project create `npm i -y`
- express install:  `npm install express`
- Update `package.json` file `"main": "server.js",`
- Project run this command : `node src/server.js` or using nodemon then `npm run dev`
- nodemon install `npm i -D nodemon` and `npm i -D morgan`
- `npm i body-parser`
- `npm i http-errors`
- `npm i xss-clean` `npm i express-rate-limit`

```node
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"
  }
```


### Reference
- [Validator](https://www.npmjs.com/package/validator)
- [UUID](https://www.npmjs.com/package/uuid)
- [fetch api](https://javascript.info/fetch)
- [Axios](https://www.npmjs.com/package/axios)
- [Express Middlware](https://expressjs.com/en/guide/using-middleware.html) 
