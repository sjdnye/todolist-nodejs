const Todo = require('../model/todo');

// const todoUtils = require('../utils/todos');

exports.getIndex = async(req, res) => {

    // todoUtils.getCompletedTodos(completedTodos => {
    //     todoUtils.getremainingTodos(remainingTodos => {
    //         Todo.fetchAllTodos((todos) => {
    //             res.render('index', {
    //                 pageTitle: "کار های روزمره",
    //                 todos,
    //                 completedTodos,
    //                 remainingTodos,
    //             });
    //         });

    //     });
    // });

    //--------- database approach -------------------------------------
    // Todo.count({
    //         where: {
    //             completed: true
    //         }
    //     })
    //     .then(completedTodos => {
    //         Todo.findAll()
    //             .then(
    //                 todos => {
    //                     res.render('index', {
    //                         pageTitle: "کار های روزمره",
    //                         todos,
    //                         completedTodos: completedTodos,
    //                         remainingTodos: todos.length - completedTodos,
    //                     });
    //                 }
    //             )

    //     });
    // ---------------------------- async & await approach -------------------------
    //     try {
    //         const completedTodos = await Todo.count({
    //             where: {
    //                 completed: true
    //             }
    //         });
    //         const todos = await Todo.findAll();
    //         res.render('index', {
    //             pageTitle: "کار های روزمره",
    //             todos,
    //             completedTodos: completedTodos,
    //             remainingTodos: todos.length - completedTodos,
    //         });

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // ------------------------------- mogodb --------------------
    try {
        const completedTodos = await Todo.countDocuments({ completed: true });
        const todos = await Todo.find();
        res.render('index', {
            pageTitle: "کار های روزمره",
            todos,
            completedTodos: completedTodos,
            remainingTodos: todos.length - completedTodos,
        });

    } catch (error) {
        console.log(error);
    }
};