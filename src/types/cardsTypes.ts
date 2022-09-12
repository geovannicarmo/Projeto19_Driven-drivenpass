import { Cards } from "@prisma/client";

export type ICards = Omit<Cards, 'id'>