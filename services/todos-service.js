const TodoModel = require("../models/todo-model");
const { TODO_STATUS } = require("../constants");

exports.getTodos = async function(){
    const todos = await TodoModel.find();
    return todos;
}

exports.addTodo = async function(todo){
    const newTodo = new TodoModel({...todo, created: new Date()});
    const saveResult = await newTodo.save();
    return saveResult;
}

exports.completeTodo = async function(todoId){
    const updateResult =  await TodoModel.findOneAndUpdate({_id: todoId }, { status: TODO_STATUS.COMPLETED}, { returnOriginal: false });
    return updateResult;
}

exports.cancelTodo = async function(todoId){
    const updateResult =  await TodoModel.findOneAndUpdate({_id: todoId }, { status: TODO_STATUS.CANCELED}, { returnOriginal: false });
    return updateResult;
}