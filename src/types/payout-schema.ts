import * as z from "zod";

export const PayoutSchema = z.object({
  cardnumber: z
    .string({ message: "Please enter a valid card number" })
    .length(16, { message: "Card number is required" }),
  expiry: z
    .string({ message: "Please enter a valid expiry date" })
    .regex(/^(0[1-9]|1[0-2])(\/|-)([0-9]{2})$/, "Use format MM/YY"),
  cvv: z
    .string({ message: "Please enter a valid CVV" })
    .length(3, { message: "CVV is required" }),
  savecard: z.boolean().optional(),
});

export type Payout = z.infer<typeof PayoutSchema>;
