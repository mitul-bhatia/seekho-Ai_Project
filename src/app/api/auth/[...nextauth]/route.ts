import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // Add more providers here
  pages: {
    signIn: "/api/auth/signin", // or "/auth/signin" if you put it elsewhere
  },
  // Add more NextAuth config here if needed
});

export { handler as GET, handler as POST };
// GET: For things like fetching providers, OAuth callbacks, signing out, etc.
// POST: For submitting credentials, some OAuth flows, etc