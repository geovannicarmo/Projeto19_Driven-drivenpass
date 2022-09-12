import { Documents } from "@prisma/client";

export type IDocument = Omit<Documents, 'id'>