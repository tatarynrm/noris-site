"useClient";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import authConfig from "@/configs/auth";

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider = async ({ children }: Props) => {
  const session = await getServerSession(authConfig);
  console.log('Session',session);
  

  return <SessionProvider session={session}>{children}</SessionProvider>;
};
