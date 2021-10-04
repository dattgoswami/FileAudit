import express from 'express';
import process_json from '../../utilities/process_json';
import json from '../../assets/data.json';
import process_textfile from '../../utilities/process_textfile';

const extensions = express.Router();

//this is for the case when data is in a text file and we need to parse it line by line
//here the data is being read from file src/assets/data.txt
extensions.get('/', async (req: express.Request, res: express.Response) => {
  const result_received = process_textfile('data.txt');
  console.log(result_received);
  res.send(result_received);
});

// this is for the case when data is in a json format
//we are reading it from the file src/assets/data.json
extensions.get('/json', async (req: express.Request, res: express.Response) => {
  const result_json = process_json(json);
  console.log(result_json);
  res.send(result_json);
});

export default extensions;
