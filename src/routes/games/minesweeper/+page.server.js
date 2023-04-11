import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {

    let games = await event.locals.sb.from('games').select('*')

    return {
        games: games.data
    }
}