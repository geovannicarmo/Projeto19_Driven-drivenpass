import { Credentials } from "@prisma/client";

export type ICredentials = Omit<Credentials, 'id'>