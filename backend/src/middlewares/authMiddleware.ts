import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface PayloadJwt {
  id: number;
  email: string;
  tipo: string;
  iat: number;
  exp: number;
}

export function autenticarToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ erro: 'Token não fornecido' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err || !decoded) return res.status(403).json({ erro: 'Token inválido' });

    const payload = decoded as PayloadJwt;

    req.usuario = {
      id: payload.id,
      email: payload.email,
      tipo: payload.tipo as any
    };

    next();
  });
}
