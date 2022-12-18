import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

export default async function handler(req: any, res: any) {
  const prisma = new PrismaClient();
  const body = req.body;
  const { fieldname, fieldplaceholder, fieldtype } = req.body;
  if (!fieldname || !fieldplaceholder || !fieldtype) {
    return res.status(200).json({ status: 0 });
  }

  const field = await prisma.fields.create({
    data: {
      id: randomUUID(),
      fieldid: randomUUID(),
      fieldclass: randomUUID(),
      name: body.fieldname,
      placeholder: body.fieldplaceholder,
      type: body.fieldtype,
      textrows: body.textrows,
      textcols: body.textcols,
    },
  });
  return res.status(200).json({ status: 1 });
}
