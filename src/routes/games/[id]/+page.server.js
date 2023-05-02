let id;

export async function load({ params, locals }) {
    id = params.id;

    const game = await locals.sb.from('games').select('*').eq('id', id).limit(1).single();
    if (game.data == null)
        throw error(404, 'Not found');

    const scores = await locals.sb.from('score').select('date, value, unite, profiles(username)').eq('game', id).order('value', { ascending: true }).limit(10);

    let bestScore = {
        value: null,
        unite: null,
        place: null,
    };
    if(locals.session) {

        let res = await locals.sb.from('score').select('value, unite').eq('player', locals.session.user.id).order('value', { ascending: true }).limit(1).single()
        
        if(bestScore) {
            bestScore.value = res.data.value;
            bestScore.unite = res.data.unite;
            res = await locals.sb.from('score').select('*').lt('value', bestScore.value).limit(1);
            bestScore.place = res.data.length + 1;
        }
    }

    return {
        game: game.data,
        scores: scores.data || [],
        bestScore: bestScore
    };
}