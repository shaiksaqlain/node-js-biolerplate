import express from 'express';
import logger from '../utils/logger';
import { handleError } from '../helpers/error';

export const healthCheck = async (_req: express.Request, _res: express.Response) => {
  try {
    logger.info("Health Check API called");
    _res.status(200).send("Health Check OK");
    logger.info("Health Check API succeeded");

  } catch (error) {

    logger.error("Health Check API failed");
    const err ={
      statusCode: 500, message: "Health Check API failed",name:'healthCheck'
    }
    handleError(err,_res)
  }
  
  }