import { Request, Response, NextFunction } from 'express';

export function exampleMiddleware(req: Request, res: Response, next: NextFunction) {
  // Your middleware logic here
  console.log('Middleware executed');
  next();
}