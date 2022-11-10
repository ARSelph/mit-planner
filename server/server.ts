import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('app listening on port 3000');
})