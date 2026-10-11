import { supabase } from '@/shared/lib/utils/supabase'

export function signOut() {
  return supabase.auth.signOut()
}
