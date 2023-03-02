import { error, redirect } from "@sveltejs/kit";

export const POST = async ({ locals }) => {
    const { error } = await locals.sb.auth.signOut();

    if(error) {
        throw error(500, "Une erreur s'est produite lors de la déconnexion.");
    }

    throw redirect(303, "/");
}