import z from "zod";

export const loginValidationSchema = z.object({
  email: z.email("Invalid Email."),
  password: z.string({ error: "Password is required." }),
});

export const registrationValidationSchema = z.object({
  name: z
    .string({ error: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters." }),

  email: z
    .string({ error: "Email is required." })
    .email({ message: "Invalid email." }),

  password: z
    .string({ error: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});
