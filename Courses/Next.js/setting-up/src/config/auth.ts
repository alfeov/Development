import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId ?? '',
      clientSecret: clientSecret ?? '',
    }),
    CredentialsProvider({
      name: 'Login and password',
      credentials: {
        login: { label: 'Login', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'J Smith',
          login: 'jsmith',
          password: '12345',
        }

        if (
          credentials?.login === user.login &&
          credentials.password === user.password
        ) {
          const { password, ...userWithoutPassword } = user
          return userWithoutPassword
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
}
