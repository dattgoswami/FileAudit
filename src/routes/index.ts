import express from 'express';
import extensions from './api/extensions';

//routes object that will be applied to endpoint /api
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('endpoint currently available is extensions and extensions/json');
});

routes.use('/extensions', extensions);

export default routes;
