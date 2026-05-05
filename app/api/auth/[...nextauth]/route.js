import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "TEMP",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "TEMP",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/', // Redirects back to home if there is an error
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };