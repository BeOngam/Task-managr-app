import { registerUser, loginUser } from '../services/auth.service';
import { registerSchema, loginSchema } from '../utils/validators';
import { Request, Response } from 'express';
export async function register(req: Request, res: Response) {
  try {
    const validatedData = registerSchema.parse(req.body);
    const user = await registerUser(validatedData.email, validatedData.password, validatedData.name);
    res.status(201).json({ message: 'User registered', user });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const validatedData = loginSchema.parse(req.body);
    const result = await loginUser(validatedData.email, validatedData.password);
    res.status(200).json(result);
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(401).json({ error: err.message });
  }
}
