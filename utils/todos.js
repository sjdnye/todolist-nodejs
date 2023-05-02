const fs = require('fs');
const path = require('path');
const rootDir = require('./path');
const filePath = path.join(rootDir, 'data', 'todos.json')



exports.getTodos = (callback) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) return callback([]);
        callback(JSON.parse(fileContent));
    })
}

exports.saveTodos = (todos, callback) => {
    fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        callback(err);
    });
}

exports.generateRandomId = () => {
    return Math.floor(Math.random() * 1000);
}

exports.getCompletedTodos = (callback) => {
    this.getTodos(todos => {
        callback(todos.filter(t => t.completed === true).length)
    })
}

exports.getremainingTodos = (callback) => {
    this.getTodos(todos => {
        callback(todos.filter(t => t.completed == false).length)
    })
}