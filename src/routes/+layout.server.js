import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {
    const session = await getServerSession(event);

    let username = null;
    const {
        data: { user },
    } = await event.locals.sb.auth.getUser()
    if(user != null)
        username = user.user_metadata.username
    
    return {
        session: session,
        username: username,
    }
}
