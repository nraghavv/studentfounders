// Supabase project credentials.
// Find these in: Supabase Dashboard → Settings → API Keys
//
// This file is loaded by BOTH index.html (the public form) and
// admin/index.html (the dashboard) — one config, one project.
// Only the anon/public key goes here. It's safe to expose in
// client-side code — access is constrained by the Row Level
// Security (RLS) policies in migrations/002_create_student_founders_table.sql.
// NEVER put your service_role key in this file.
window.SUPABASE_CONFIG = {
  url: "https://oonjohhbuhspcpwpsmdt.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmpvaGhidWhzcGNwd3BzbWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDkxMzgsImV4cCI6MjEwMDgyNTEzOH0.GSzP-k6U4xHlN1yGctXu7V-fcd6zD0eTMmjF5MEProc"
};
