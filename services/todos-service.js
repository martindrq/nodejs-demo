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