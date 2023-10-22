import mongoose from 'mongoose';

//specifies the structure of the data that will be stored in the MongoDB collection
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

//This line creates a Mongoose model named "Todo" based on the TodoSchema schema. A Mongoose model represents a collection in MongoDB and provides an interface for interacting with that collection.
//The first argument 'todo' specifies the name of the MongoDB collection that this model will interact with.
//The second argument TodoSchema specifies the schema that defines the structure of the documents in the "todo" collection.
const Todo = mongoose.model('todos', TodoSchema);

export default Todo;
