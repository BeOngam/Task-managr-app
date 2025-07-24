// src/utils/validators.ts
import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: "ایمیل نامعتبر است" }),
  password: z.string().min(6, { message: "پسورد باید حداقل ۶ کاراکتر باشد" }),
  name: z.string().min(1, { message: "نام الزامی است" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "ایمیل نامعتبر است" }),
  password: z.string().min(6, { message: "پسورد باید حداقل ۶ کاراکتر باشد" }),
});
