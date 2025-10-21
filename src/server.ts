import { config } from './config/index.ts';
import app from './app.ts';

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
