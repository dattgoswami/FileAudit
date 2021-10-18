import express from 'express';
import routes from './routes/index';
// import process_textfile from './utilities/process_textfile';

const app = express();
const port = 3000;

//we want our endpoint api to use routes as a middleware
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
  console.log('check 1. http://localhost:3000/api/');
  console.log('2. http://localhost:3000/api/extensions');
  console.log('3. http://localhost:3000/api/extensions/json');
});

export default app;
