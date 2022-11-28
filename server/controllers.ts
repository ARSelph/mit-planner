import { RequestHandler } from 'express-serve-static-core';
import encounters from './encounterdata'
import { ErrObject } from '../types'
import allJobs from './jobData/allJobs'

type Controllers = {
  loadEncounter: RequestHandler,
  getJob: RequestHandler,
  // getJobNames: RequestHandler
}

const controllers: Controllers = {
  loadEncounter: async (req, res, next) => {
    const { encounter } = req.query;
    console.log('loading encounter', encounter);
    if (typeof encounter === 'string' && encounter in encounters) {
      res.locals.data = encounters[encounter];
      return next();
    } else {
      const err: ErrObject = {
        log: 'query parameter not found in encounters',
        status: 500,
        message: {err: 'unable to match query to encounter'}
      }
      return next(err);
    }
  },

  getJob: async (req, res, next) => {
    const { job } = req.query;
    console.log('loading job', job);
    if (typeof job === 'string' && job in allJobs) {
      res.locals.data = allJobs[job as keyof typeof allJobs];
      return next();
    } else if (typeof job === 'undefined') {
      res.locals.data = allJobs;
      return next();
    } else {
      const err: ErrObject = {
        log: 'query parameter not found in jobs list',
        status: 500,
        message: {err: 'unable to match query to job'}
      }
      return next(err); 
    }
  },

  // getJobNames: async (req, res, next) => {
  //   res.locals.data = allJobs;
  //   return next();
  // }
}

export default controllers;