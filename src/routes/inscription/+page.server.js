import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { data, error } = await locals.sb.auth.signUp({
            email: body.email,
            password: body.password,
            options: {
                data: {
                    username: body.username
                },
            },
        })

        if(error) {
            if(error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: "Email ou mot de passe invalide."
                })
            }

            return fail(500, {
                error: "Erreur serveur. Veuillez réessayer plus tard."
            })
        }

        throw redirect(303, "/")
    }
}