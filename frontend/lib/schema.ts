import z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  role: z.enum(["buyer", "seller"], { message: "Role is required." }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
