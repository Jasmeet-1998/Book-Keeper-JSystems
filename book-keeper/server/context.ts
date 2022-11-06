import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react'

/**@desc creates common context for all incoming protected requests */
export async function createContext(opts: trpcNext.CreateNextContextOptions){
    const session = await getSession({req: opts.req});
    return {
        session,
    };
};

export type Context = inferAsyncReturnType<typeof createContext>;