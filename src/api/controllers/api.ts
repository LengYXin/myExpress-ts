import { Response, Request, NextFunction } from 'express';

export let index = (req: Request, res: Response) => {
  res.json({
    title: "Express"
  });
};
export let getPhone = (req: Request, res: Response) => {
  res.json({
    title: "Express"
  });
};