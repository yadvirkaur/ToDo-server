//Server side logic
// for module imports eg: import express from 'express';  we need to add "type": "module", in package.json

import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/routes.js';

const app = express();
// app.use(cors());

// Allow requests from the Netlify domain
app.use(
  cors({
    origin: 'https://todosapp-mern.netlify.app/',
  })
);

app.use(express.json());

app.use('/', Routes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((error, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 8000;

async function startServer() {
  try {
    await Connection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
}

startServer();
