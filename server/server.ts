import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import router from './router';
import { ErrObject } from '../types';
import { node } from 'webpack';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/api', router);

app.get('/', (req, res) => {
  console.log('fetching home page');
  if (process.env.NODE_ENV === 'development') {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  }
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})

app.use('*', (req: Request, res: Response) =>
  res.status(404).send('404 Page Not Found Here')
);

app.use((err: ErrObject, req: Request, res: Response) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});