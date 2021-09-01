const express = require("express");
const todoService = require("../services/todos-service");

const router = new express.Router();

router.get("/todos", async (req, res, next) => {
    try{
        const todos =  await todoService.getTodos();
        res.json(todos);
    }catch(e){
        res.send(e.message);
    }
});

router.post("/todos", async (req, res, next) => {
    try{
        const addResult =  await todoService.addTodo(req.body);
        res.json(addResult);
    }catch(e){
        res.send(e.message);
    }
});

router.put("/todos/:id/complete", async (req, res, next) => {
    try{
        const completeResult =  await todoService.completeTodo(req.params.id);
        res.json(completeResult);
    }catch(e){
        res.send(e.message);
    }
});

router.put("/todos/:id/cancel", async (req, res, next) => {
    try{
        const cancelResult =  await todoService.cancelTodo(req.params.id);
        res.json(cancelResult);
    }catch(e){
        res.send(e.message);
    }
});

module.exports = router;