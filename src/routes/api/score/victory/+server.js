import { supabase } from '$lib/supabaseClient';

export const POST = async ({ request }) => {
    const body = await request.json();

    
    const user = await supabase.from('profiles').select('*').eq('id', body.player);
    if(user?.data.length == 0)
    return new Response(JSON.stringify({message: "User not found"}), {status: 400});
    
    const game = await supabase.from('games').select('*').eq('id', body.game);
    if(game?.data.length == 0)
        return new Response(JSON.stringify({message: "Game not found"}), {status: 400});

    const bestScore = await supabase.from('score').select('*').eq('player', body.player).eq('game', body.game).limit(1).single()
    if(bestScore.data == null) {
        const res = await supabase.from('score').insert({
            player: body.player,
            game: body.game,
            value: 1,
            unite: "victory"
        });
        console.log(res)
        if(res.status != 201)
            return new Response(JSON.stringify({message: "Unable to save score"}), {status: 400});
    } else {
        const res = await supabase.from('score').update({
            value: bestScore.data.value + 1,
        }).eq('player', body.player).eq('game', body.game);
        console.log(res);
        if(res.status != 204)
            return new Response(JSON.stringify({message: "Unable to save score"}), {status: 400});
    }

    return new Response(JSON.stringify({message: "Success"}), {status: 201});

}