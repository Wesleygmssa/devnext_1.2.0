import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: "a07771680fab6455939d",
      clientSecret: "318529d04addccf89edd0b018d65ddf03076b898",
      scope: "read:user,repo",
    }),
    // ...add more providers here
  ],

  // // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
