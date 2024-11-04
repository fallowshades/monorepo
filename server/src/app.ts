
import path from 'path';

import express, { Request, Response } from 'express';
import { cars } from './cars';

const app = express();

app.use(express.json());

app.get('/api/cars', (req: Request, res: Response) => {
  res.json({ cars: cars });
});

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT} at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
