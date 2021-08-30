# Construyendo una app en Nodejs + Expressjs

### Añadiendo nuevas rutas

1) Crear estructura basica de capas

```
mkdir controllers
mkdir services
mkdir constants
```

2) Creamos el servicio que retorna todo´s, temporalmente mockeado
```js
//services/todos-service.js
const TODO_STATUS = require("../constants");

exports.getTodos = function(){
    return [
        {
            name: "Some pending todo",
            status: TODO_STATUS.PENDING
        },
        {
            name: "Some completed todo",
            status: TODO_STATUS.COMPLETED
        }
    ]
}
```

3) Creamos unas constantes de utilidad

```js
//constants/index.js
exports.TODO_STATUS = {
    PENDING : "PENDING",
    COMPLETED : "COMPLETED",
    CANCELED: "CANCELED"
}
```

4) Agregamos la llamada al servicio desde el controlador
```js
//controllers/todos-controller.js
const express = require("express");
const todoService = require("../services/todos-service");

const router = new express.Router();

router.get("/todos", (req, res, next) => {
    const todos =  todoService.getTodos();
    res.json(todos);
});

module.exports = router;
```

5) Importamos el nuevo router creado a la app express
```js
//app.js
const express = require('express');
const todoRouter = require("./controllers/todos-controller");

const app = express();
const port = 3000;

app.use(express.json());
app.use(todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

### next
[feature/add-new-routes](https://github.com/martindrq/nodejs-demo/tree/feature/add-new-routes)
