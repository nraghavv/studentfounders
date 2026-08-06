// Initialize Supabase Client
const SUPABASE_URL = "https://oonjohhbuhspcpwpsmdt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmpvaGhidWhzcGNwd3BzbWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDkxMzgsImV4cCI6MjEwMDgyNTEzOH0.GSzP-k6U4xHlN1yGctXu7V-fcd6zD0eTMmjF5MEProc";

// Create the Supabase client (wait for supabase library to load)
let supabaseClient;
if (typeof window.supabase !== "undefined") {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  console.warn("Supabase library not loaded yet, will initialize when available");
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.supabase !== "undefined") {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  });
}
