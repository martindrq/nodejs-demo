const express = require("express");
const todoService = require("../services/todos-service");

const router = new express.Router();

router.get("/todos", (req, res, next) => {
    const todos =  todoService.getTodos();
    res.json(todos);
});

module.exports = router;