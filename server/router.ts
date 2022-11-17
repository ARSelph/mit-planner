import express, { Request, Response, NextFunction } from 'express';
import controllers from './controllers';

const router = express.Router();

router.get('/loadencounter', controllers.loadEncounter, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.data);
})

export default router;