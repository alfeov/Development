import { supabase } from '@/shared/lib/utils/supabase'

export function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  })
}
