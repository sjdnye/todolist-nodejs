const Todo = require('../model/todo');

const todoUtils = require('../utils/todos');

exports.getIndex = (req, res) => {

    todoUtils.getCompletedTodos(completedTodos => {
        todoUtils.getremainingTodos(remainingTodos => {
            Todo.fetchAllTodos((todos) => {
                res.render('index', {
                    pageTitle: "کار های روزمره",
                    todos,
                    completedTodos,
                    remainingTodos,
                });
            });

        });
    });
};