import express, { Request, Response, NextFunction } from 'express';
import controllers from './controllers';

const router = express.Router();

router.get('/encounter', controllers.getEncounter, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.data);
})

router.get('/job', controllers.getJob, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.data);
})

// router.get('/alljobs', controllers.getJobPaths, (req: Request, res: Response) => {
//   return res.status(200).send(res.locals.data)
// })

export default router;