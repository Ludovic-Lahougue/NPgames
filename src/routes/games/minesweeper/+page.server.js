import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {

    let games = await event.locals.sb.from('games').select('*');

    let gameName = event.route.id.split('/').at(-1);
    const gameId = await event.locals.sb.from('games').select('*').eq('url', gameName).limit(1).single();

    return {
        games: games.data,
        gameId: gameId.data.id,
    }
}