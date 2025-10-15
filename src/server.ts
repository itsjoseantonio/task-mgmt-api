import express, { json } from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with Typescript');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
