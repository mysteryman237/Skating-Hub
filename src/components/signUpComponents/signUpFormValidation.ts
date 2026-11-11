import z from "zod"

/* Create this schema for data shape using zod object */
export const signUpSchema = z.object({
    fullName: z.string().min(1,{error: "Name is required"}).min(4, {error: "Name must be at least 4 characters"}).max(50).trim(),
    email: z.email({error: "Enter a valid email"}).max(50),
    phone: z.string({error: "Enter your phone number"}).min(1, {error: "Phone number required"}).regex(/^\+?\d{7,15}$/, { error: "Invalid phone number" }),
    password: z.string({error:"Password required"}).min(1, {error: "Password required"}).min(6, {error: "Password must be at least 6 characters"}).max(20),
    confirmPassword: z.string({error: "Confirm Password"}).min(1, {error: "Confirm password"}).max(20),
    terms: z.boolean().refine(v => v === true, {error: "Accept the terms and conditions"})
    /* This logic is to compare password match */
}).refine(d => d.password === d.confirmPassword, {
    error: "passwords do not match",
    path: ["confirmPassword"]
})
/* This is our data type that we pass in useForm hook */
export type SignUpFormDataValues = z.infer<typeof signUpSchema>