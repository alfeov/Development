import { supabase } from './supabase'

export async function getClaims() {
  const { data } = await supabase.auth.getClaims()
  if (data) {
    return data.claims
  }
  return null
}
