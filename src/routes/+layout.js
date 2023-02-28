import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { supabase } from "$lib/supabaseClient";

let username = null;

const getProfile = async (session) => {
    try {
        const { user } = session;

        const { data, error, status } = await supabase
            .from("profiles")
            .select(`username`)
            .eq("id", user.id)
            .single();

        if (data) {
            username = data.username;
        }

        console.log(data);

        if (error && status !== 406) throw error;
    } catch (error) {
        console.warn(error);
    }
};

export const load = async (event) => {
    const { session } = await getSupabase(event)
    getProfile(session);
    return {
        session,
        user: username
    }
}
