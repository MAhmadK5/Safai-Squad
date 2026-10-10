import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cvyusdvemnxirrtehxoo.supabase.co"

// 👇 Notice the quotes at the very beginning and very end of the key!
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eXVzZHZlbW54aXJydGVoeG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0ODI1MDEsImV4cCI6MjEwNzA1ODUwMX0.EmpMJNZhQj2jSf1VzmQKoKpVVXlOzlnpM9feoxMhCGI"

export const supabase = createClient(supabaseUrl, supabaseKey)