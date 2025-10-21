import express, { json } from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with Typescript');
});

export default app;
