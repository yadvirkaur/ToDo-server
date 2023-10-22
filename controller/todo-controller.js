import Todo from '../model/TodoModel.js';

export const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      task: request.body.task,
      // createdAt: Date.now(),
    });
    response.status(200).json(newTodo);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({});
    response.status(200).json(todos);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(200).json(updatedTodo);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findByIdAndDelete(request.params.id);
    response.status(200).json(todo);
  } catch (error) {
    response.status(500).json(error.message);
  }
};
