import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB} from '@utils/database';

console.log({
    cilentId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    Providers: [
        GoogleProvider({
            cilentId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }){

    },
    async signIn({ profile }){
       try {
            await connectToDB();

            return true;
       } catch (error) {
        
       }
    }
})

export { handler as GET, handler as POST}