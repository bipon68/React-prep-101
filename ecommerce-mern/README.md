## E-commerce MERN stack project

## Plan


## Environment setup

## Express server setup

### Project create using only command
- Project create `npm i -y`
- express install:  `npm install express`
- Update `package.json` file `"main": "server.js",`
- Project run this command : `node src/server.js` or using nodemon then `npm run dev`
- nodemon install `npm i -D nodemon` and `npm i -D morgan`

```node
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"
  }
```


### Reference
- Validator - https://www.npmjs.com/package/validator
- UUID - https://www.npmjs.com/package/uuid
- React router dom - https://www.npmjs.com/package/react-router-dom
- fetch api : https://javascript.info/fetch
- babel polyfill - https://github.com/babel/babel/tree/master/packages/babel-polyfill (regenerator-runtime issue)
- Axios : https://www.npmjs.com/package/axios
