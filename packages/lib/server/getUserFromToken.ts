import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { NextRequest } from "next/server";
import prisma from "@repo/prisma";
import { User as PrismaUser } from "@prisma/client";
import { getToken } from "next-auth/jwt";

export async function getUserFromToken(
  req: GetServerSidePropsContext["req"] | NextRequest | NextApiRequest,
  res?: NextApiResponse
): Promise<PrismaUser | null> {
  const token = await getToken({ req });
  const tokenEmail = token?.email?.toString();

  if (!token || !tokenEmail) {
    return null;
  }

  const user = await prisma.user.findFirst({
    where: { email: tokenEmail },
  });

  if (!user) {
    return null;
  }

  return user;
}
