import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

let id;

export async function load({ params, locals }) {
    id = params.id;

    const game = await locals.sb.from('games').select('*').eq('id', id).limit(1).single();
    if (game.data == null)
        throw error(404, 'Not found');

    return {
        game: game.data,
    };
}

export const actions = {
    editGame: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { data, error } = await locals.sb.from('games').update({
            name: body.name,
            description: body.description,
            category: body.category,
            image: body.image,
        }).eq('id', id)

        if(error) {
            if(error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: "Certains champs sont invalides."
                })
            }

            return fail(500, {
                error: "Erreur serveur. Veuillez réessayer plus tard."
            })
        }

        throw redirect(303, "/games")
    }
}