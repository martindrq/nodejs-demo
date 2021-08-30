# Construyendo una app en Nodejs + Expressjs

Links:

[ExpressJS](https://expressjs.com/es/)

[NodeJS](https://nodejs.org/es/)


1) Instalar node desde https://nodejs.org/es/

2) Inicializar el proyecto. Desde una terminal hacer:

```
$ mkdir hello-nodejs
$ cd hello-nodejs
$ npm init
# follow the npm cli instrunctions
```

3) Instalar express
```
$ npm install express --save
```

4) Crear index

```js
//app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

5) Comenzar aplicación
```
node app.js
```

### next:
[feature/add-new-routes](https://github.com/martindrq/nodejs-demo/tree/feature/add-new-routes)
