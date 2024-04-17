"use client";

import { z } from "zod";

const formSchema = z.object({
  reply: z.string().min(2).max(100),
});

export default formSchema;
