import { supabase } from '@/shared/lib/utils/supabase'

export function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
  })
}
