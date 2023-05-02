import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {
    const session = await getServerSession(event);

    let username = null;
    let admin = false;
    const {
        data: { user },
    } = await event.locals.sb.auth.getUser()
    if(user != null) {
        username = user.user_metadata.username;
        let res = await event.locals.sb.from('profiles').select('admin').eq('id', user.id).limit(1).single();
        admin = res.data.admin || false;
    }
    
    return {
        session: session,
        username: username,
        admin: admin,
        userId: user.id,
    }
}
