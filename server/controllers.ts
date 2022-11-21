import { RequestHandler } from 'express-serve-static-core';
import encounters from './encounterdata'
import { ErrObject } from '../types'

type Controllers = {
  loadEncounter: RequestHandler,
}

const controllers: Controllers = {
  loadEncounter: async (req, res, next) => {
    const { encounter } = req.query;
    console.log('loading encounter', encounter)
    if (typeof encounter === 'string' && encounters[encounter]) {
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
  }
}

export default controllers;