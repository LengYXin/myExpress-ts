import { Response, Request, NextFunction } from 'express';
export let index = (req: Request, res: Response) => {
  res.send('respond with a resource');
};
