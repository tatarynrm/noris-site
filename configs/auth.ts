import { AuthOptions, User, Account, Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";  // Імпортуємо тип JWT для коректної типізації токену
import { AdapterUser } from "next-auth/adapters";

// Типізація для користувача
interface UserProfile extends User {
  id: string;
  email: string;
  image?: string;  // Може бути необов'язковим
  provider?: string;  // Зберігаємо провайдера (наприклад, 'google')
  name?: string;  // Може бути необов'язковим
}

// Типізація для контексту JWT
interface CustomJWT extends JWT {
  id?: string;
  email?: string;
  image?: string | null;  // Тепер дозволяємо null для image
  name?: string;
}

export const authConfig: AuthOptions = {
  providers: [
    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'select_account', // Примусове запитання про вибір акаунта
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  pages: {
    signIn: '/sign-in',  // Сторінка для входу
    error: '/auth-error',  // Сторінка для обробки помилок
    signOut: '/sign-out',  // Сторінка для виходу
  },

  session: {
    maxAge: 864000,  // Тривалість сесії 10 діб
    updateAge: 0,    // Без оновлення сесії під час активності
    strategy: "jwt", // Використовуємо JWT для зберігання сесії
  },
  
  jwt: {
    secret: process.env.JWT_SECRET!,  // Секрет для JWT токену
    maxAge: 864000,  // Тривалість JWT 10 діб
  },

  callbacks: {
    // // Callback для jwt
    // async jwt({ token, user, account, profile, trigger }: { token: CustomJWT; user?: UserProfile; account?: Account | null; profile?: Profile; trigger?: string; }): Promise<JWT> {
    //   if (user) {
    //     // Зберігаємо дані користувача в токені
    //     token.id = user.id;
    //     token.email = user.email || ''; // Перевірка, щоб не було null
    //     token.image = user.image || ''; // Перевірка, щоб не було null
    //     token.name = user.name || ''; // Перевірка, щоб не було null
    //   }
    //   return token;  // Якщо користувача немає, повертаємо токен без змін
    // },

    // Callback для сесії
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (!token) {
        return session;  // Якщо токен закінчився, повертаємо існуючу сесію
      }


      // // Оновлюємо дані сесії за допомогою токену
      // session.user.id = token.id as string;
      // session.user.email = token.email as string;
      // session.user.image = token.image as string;
      // session.user.name = token.name as string;

      console.log('SESSION DATA', session);
      return session;
    },

    // Callback для редиректу
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }): Promise<string> {
      // Якщо редирект починається з базового URL, то повертаємо його
      if (url.startsWith(baseUrl)) {
        return url;
      }
      // Повертаємо редирект на домашню сторінку після входу через Google
      return `${baseUrl}/`;
    },

    // Callback для обробки входу
    async signIn({ account, profile }: { account: Account | null; profile?: Profile }): Promise<boolean> {
      if (account?.provider === "google") {
        console.log('Google Profile:', profile);
        console.log('Google Account:', account);
      }
      return true;  // Дозволяємо інші провайдери без перевірки email
    },
  },
};

export default authConfig;
