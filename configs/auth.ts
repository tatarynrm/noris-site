import { users } from "@/data/users";

import { AuthOptions, User, NextAuth, JWT, Account, Profile, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const cookiePrefix = 'noris'

// Define types for the user object (ensure that 'id' and 'email' are part of your user object)
interface UserProfile extends User {
  id: string;
  email: string;
  image?: string; // Optional image for user profile
  provider?: string; // Track provider (e.g., 'google', 'credentials')
  name?: string; // Optional name for user profile
}

export const authConfig: AuthOptions = {
  providers: [


    // Add Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,  // Ensure these environment variables are set
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'select_account', // Force Google to ask for account selection
          access_type: "offline",
          response_type: "code"
        },
      },
      scope: 'openid profile email',
    }),

  ],

  pages: {
    signIn: '/sign-in',  // Page for user to sign in
    error: '/auth-error', // Page for handling errors
    signOut: '/sign-out',  // Page for user to sign out
  },

  session: {
    maxAge: 864000,  // Session lasts for 10 days
    updateAge: 0,    // No session update on activity
    strategy: "jwt", // JWT for session handling
  },
  
  jwt: {
    secret: process.env.JWT_SECRET!,  // Ensure this environment variable is set
    maxAge: 864000,  // JWT token lasts for 10 seconds
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: UserProfile }): Promise<JWT> {
      if (user) {
        // Store user data in the JWT token
        token.id = user.id;
        token.email = user.email;
        token.image = user.image;
        token.name = user.name;



        return token;
      }
      return token; // If no user, return the original token
    },

    async session({ session, token }: { session: Session, token: JWT }): Promise<Session | null> {
      if (!token) {
        return null; // Return null if session has expired
      }

      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.image = token.image as string; 
      session.user.name = token.name as string;
    //   session.accessToken = token.accessToken as string;
   

      console.log('SESSION DATA', session);
      return session;
    },

    async redirect({ url, baseUrl }: { url: string, baseUrl: string }): Promise<string> {
      // Here we ensure that after the Google sign-in, the user is redirected to the homepage or dashboard
      if (url.startsWith(baseUrl)) {
        return url;
      }
      // Always redirect to the dashboard after Google login
      return `${baseUrl}/`;  
    },

    async signIn({ account, profile }: { account: Account, profile: Profile }): Promise<boolean> {
      if (account.provider === "google") {
        console.log('Google Profile:', profile);
        console.log('Google Account:', account);
      }
      return true; // Allow other providers without email verification
    },
  },

};

export default authConfig;
