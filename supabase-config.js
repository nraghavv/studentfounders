// Supabase Configuration
const SUPABASE_URL = "https://oonjohhbuhspcpwpsmdt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmpvaGhidWhzcGNwd3BzbWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDkxMzgsImV4cCI6MjEwMDgyNTEzOH0.GSzP-k6U4xHlN1yGctXu7V-fcd6zD0eTMmjF5MEProc";

let supabaseClient = null;

function initSupabase() {
  if (window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("✓ Supabase initialized");
    return true;
  }
  return false;
}

// Try to initialize immediately
if (!initSupabase()) {
  // Wait for supabase library to load
  document.addEventListener("DOMContentLoaded", initSupabase);
}
