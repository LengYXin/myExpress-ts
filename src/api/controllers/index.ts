import  {Response, Request, NextFunction} from 'express';

export let index = (req: Request, res: Response) => {
  res.render("index", {
    title: "Express  AAAAAAAAAAAAA"
  });
};