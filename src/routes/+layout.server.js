import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {
    const session = await getServerSession(event);

    const {
        data: { user },
    } = await event.locals.sb.auth.getUser()
    const username = user.user_metadata.username
    
    return {
        session: session,
        username: username,
    }
}
