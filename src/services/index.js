// // ==|== Imports ===================================================================================
import { createClient } from '@supabase/supabase-js';

// // ==|== Supabase Client ==============================================================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ==|== Export ====================================================================================
export default {
  async getContact() {
    try {
      let { data } = await supabase.from('profiles')
        .select('*');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getSocial() {
    try {
      let { data } = await supabase.from('socials')
        .select('*')
        .eq('enabled', true)
        .order('order', { ascending: true });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getLinks() {
    try {
      let { data } = await supabase.from('links')
        .select('*')
        .is('enabled', true)
        .order("created_at", { ascending: false });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
