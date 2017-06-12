import { Response, Request, NextFunction } from 'express';

export let index = (req: Request, res: Response) => {
  res.json({
    title: "Express"
  });
};
export let verifyCellPhone = (req: Request, res: Response) => {
  res.json({
    code: 200,
    Data: {
      Phone: 18611111111
    }
  });
};