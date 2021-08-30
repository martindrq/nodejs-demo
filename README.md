# Construyendo una app en Nodejs + Expressjs

### Añadiendo una base de datos

1) Agremos librería de odm de mongodb y otra librería para manejar variable de entorno

```
npm install mongoose
npm install dotenv
mkdir models
mkdir componets
mkdir componets/odm
```

2) Agregamos la conexión con mongodb
```js
//components/odm/index.js
const mongoose = require('mongoose');
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const host = process.env.MONGO_HOST;

mongoose.connect(`mongodb://${username}:${password}@${host}:27017`);
module.exports = mongoose;
```

3) Agregmos el modelo que especifica el "todo"

```js
//models/todo-model.js
const mongoose = require("../components/odm");
const TODO_STATUS = require("../constants");

const Todo = mongoose.model("Todo", {
  name: String,
  status: {
    type: String,
    enum: Object.values(TODO_STATUS),
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Todo;

```

4) Ajustamos el todo-service para que utilice el modelo
```js
//services/todo-service.js
const TodoModel = require("../models/todo-model");

exports.getTodos = async function(){
    const todos = await TodoModel.find();
    return todos;
}
```

5) Ajustamos el controller para llame las funciones de manera asincrónica
```js
//controllers/todo-controller.js
const express = require("express");
const todoService = require("../services/todos-service");

const router = new express.Router();

router.get("/todos", async (req, res, next) => {
    const todos =  await todoService.getTodos();
    res.json(todos);
});

module.exports = router;
```

### next
feature/add-formatter-and-syntax-checker
