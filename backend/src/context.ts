import { PrismaClient } from "@prisma/client";
import { Request } from "apollo-server";

const prisma = new PrismaClient();
const { JWT_SECRET } = process.env;

export interface Context {
  request: Request & any;
  prisma: PrismaClient;
  appSecret: string;
}

export function createContext(request: Request): Context {
  return {
    request,
    prisma,
    appSecret: JWT_SECRET,
  };
}
