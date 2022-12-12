import { RequestHandler } from 'express-serve-static-core';
import encounters from './encounterData/encounterdata'
import { ErrObject } from '../types'
import allJobs from './jobData/allJobs'

type Controllers = {
  getEncounter: RequestHandler,
  getJob: RequestHandler,
  // getJobPaths: RequestHandler,
}

const controllers: Controllers = {
  getEncounter: async (req, res, next) => {
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
      const jobNameAndIconPath: {[key: string]: {fullName: string, iconPath: string}} = {};
      for (const job in allJobs) {
        jobNameAndIconPath[job] = {
          fullName: allJobs[job as keyof typeof allJobs].fullName,
          iconPath: allJobs[job as keyof typeof allJobs].iconPath,
        }
      }
      res.locals.data = jobNameAndIconPath
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

  // getJobPaths: async (req, res, next) => {
  //   const jobPaths: {[key:string]: {fullName: string, iconPath: string}} = {};
  //   for (const job in allJobs) {
  //     jobPaths[job] = {
  //       fullName: allJobs[job as keyof typeof allJobs].fullName,
  //       iconPath: allJobs[job as keyof typeof allJobs].iconPath,
  //     }
  //   }
  //   res.locals.data = jobPaths;
  //   return next();
  // },
}

export default controllers;