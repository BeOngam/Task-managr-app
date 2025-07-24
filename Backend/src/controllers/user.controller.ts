import { Request, Response } from 'express';
import prisma from '../prisma';

export async function getProfile(req: Request, res: Response) {
  const userId = (req as any).user.userId;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, createdAt: true },
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ user });
}
