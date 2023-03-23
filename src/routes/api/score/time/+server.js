import { supabase } from '$lib/supabaseClient';

export const POST = async ({ request }) => {
    const body = await request.json();

    
    const user = await supabase.from('profiles').select('*').eq('id', body.player);
    if(user?.data.length == 0)
    return new Response(JSON.stringify({message: "User not found"}), {status: 400});
    
    const game = await supabase.from('games').select('*').eq('id', body.game);
    if(game?.data.length == 0)
        return new Response(JSON.stringify({message: "Game not found"}), {status: 400});
    
    if(!Number.isInteger(body.value))
        return new Response(JSON.stringify({message: "Value must be an integer"}), {status: 400});

    const bestScores = await supabase.from('score').select('*').eq('player', body.player).eq('game', body.game).lt('value', body.value).order('value', { ascending: false })
    console.log(bestScores)
    if(bestScores.data.length < 5) {
        const res = await supabase.from('score').insert({
            player: body.player,
            game: body.game,
            value: body.value,
            unite: "time"
        });
        if(res.status != 201)
            return new Response(JSON.stringify({message: "Unable to save score"}), {status: 400});
    } else return new Response(JSON.stringify({message: "success"}), {status: 201});

    console.log(bestScores.data.length)
    return new Response(JSON.stringify({message: "Success", place: bestScores.data.length + 1}), {status: 201});

}