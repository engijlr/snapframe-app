import * as z from "zod";

export const SignupformSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters." }),
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  email: z.string().min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninformSchema = z.object({
  email: z.string().min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
