import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { data, error } = await locals.sb.auth.signInWithPassword({
            email: body.email,
            password: body.password
        })

        if(error) {
            console.log(error);
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