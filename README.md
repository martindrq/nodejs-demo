# Construyendo una app en Nodejs + Expressjs

### Agregando chequeo de sintaxis y auto formateo

1. Agregar librerías

```
npm install prettier eslint husky --save-dev
```

2. Inicializar eslint

```
npx eslint --init
```

3. Agregamos en el package json, las tareas de lint y formateo

```json
  "scripts": {
    "lint": "eslint --ext .js .",
    "prettier": "prettier --write ."
  },
```

4. Probamos en correr el linter ( y arreglamos en caso de encontrar errores! )

```
npm run lint
```

5. Probamos en correr el formatter ( va a formatar todo el proyecto )

```
npm run prettier
```

6. Agregamos ambas tareas antes de cada commit de git

```
npx husky-init
npx husky add .husky/pre-commit "npm run lint && npm run prettier"
```

