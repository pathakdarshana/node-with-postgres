const todosController = require('../controllers').todos;
const todosItemController = require('../controllers').todoItems

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "welcome to my todos api",
  }));

  app.get('/api/todos', todosController.list);

  app.post('/api/todos', todosController.create);
  app.post('/api/todos/:todoId/items', todosItemController.create)
};
