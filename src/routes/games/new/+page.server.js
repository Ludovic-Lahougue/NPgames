import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    newGame: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { data, error } = await locals.sb.from('games').insert({
            name: body.name,
            description: body.description,
            category: body.category,
            image: body.image,
        })

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