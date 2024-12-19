import * as z from "zod";

export const PayoutSchema = z.object({
  cardnumber: z.coerce
    .number({ message: "Please enter a valid card number" })
    .min(1, { message: "Card number is required" }),
  expiry: z
    .string({ message: "Please enter a valid expiry date" })
    .regex(/^(0[1-9]|1[0-2])(\/|-)([0-9]{2})$/, "Use format MM/YY"),
  cvv: z.coerce
    .number({ message: "Please enter a valid CVV" })
    .min(100, { message: "CVV is required" })
    .max(999, { message: "Enter vaild CVV" }),
});
