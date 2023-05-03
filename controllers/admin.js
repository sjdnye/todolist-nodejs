const { where } = require('sequelize');
const Todo = require('../model/todo');
const todoUtils = require('../utils/todos');

exports.addTodo = async(req, res) => {
    if (!req.body.todo) return res.redirect("/");
    // const todo = new Todo(todoUtils.generateRandomId(), req.body.todo);
    // todo.save(err => {
    //     if (!err) res.redirect("/");
    //     else console.log(err);
    // });
    //---------------database approach ------------------------------------
    // Todo.create({
    //         text: req.body.todo
    //     })
    //     .then(result => {
    //         res.redirect("/");
    //     })
    //     .catch(err => console.log(err))

    // ------------------ async & await approach ------------------
    try {
        await Todo.create({ text: req.body.todo });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}

exports.deleteTodo = async(req, res) => {
    // Todo.deleteTodo(req.params.id, (err) => {
    //     if (!err) res.redirect("/");
    //     else console.log(err);
    // })

    //------------------ database approach -----------------------------------------
    // Todo.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //     .then(result => {
    //         res.redirect("/");

    //     })
    //     .catch(err => console.log(err));
    // ------------------------- async & await approach -----------------------
    try {
        await Todo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/")
    } catch (err) {
        console.log(err);
    }

}

exports.completeTodo = async(req, res) => {
    // Todo.completeTodo(req.params.id, (err) => {
    //     if (!err) res.redirect("/");
    //     else console.log(err);
    // })
    //--------------------------- database approach --------------------------
    // Todo.findByPk(req.params.id)
    //     .then(todo => {
    //         todo.completed = true;
    //         return todo.save();
    //     })
    //     .then(() => {
    //         res.redirect("/");
    //     })
    //     .catch(err => console.log(err));

    // ------------------------ async & await approach ----------------------
    try {
        const todo = await Todo.findByPk(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}