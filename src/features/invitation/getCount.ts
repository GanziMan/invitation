"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { getCountSchema } from "./schema";

export type GetCountResponse = Awaited<ReturnType<typeof getCount>>;

export async function getCount(request: z.input<typeof getCountSchema>) {
  const validated = await getCountSchema.safeParseAsync(request);
  const prisma = new PrismaClient();
  if (!validated.success) {
    return {
      code: "VALIDATION ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const data = await prisma.counts.findUnique({
    where: {
      id: "1",
    },
    select: {
      like_count: true,
    },
  });

  if (data)
    return {
      status: "200",
      data: data,
    };
}
