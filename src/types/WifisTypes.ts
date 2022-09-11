import { Wifis } from "@prisma/client";

export type IWifis = Omit<Wifis, 'id'>