import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
