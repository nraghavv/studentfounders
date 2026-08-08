# 🚀 Ground Zero — Setup Guide (fresh Supabase project)

## Project Structure

```
studentfounders/
├── index.html                                       # Public 6-step application form
├── admin/index.html                                 # Admin dashboard (login required)
├── supabase-config.js                                # Your Supabase URL + anon key (fill this in)
├── migrations/002_create_student_founders_table.sql   # Full schema — run this in Supabase
├── vercel.json                                        # Makes /admin resolve correctly on Vercel
└── README.md                                          # Full project reference
```

This guide and `README.md` describe the same setup — this is the
quick-start version. `README.md` has more detail if anything here is
unclear.

---

## 1️⃣ Create your Supabase project

Go to https://app.supabase.com → New Project. Note the project's
**Project URL** and you'll grab the **anon public key** in step 4.

## 2️⃣ Run the schema

1. In your new project, open **SQL Editor** → New query.
2. Paste the **entire contents** of
   `migrations/002_create_student_founders_table.sql` (not the block
   below — that file is the real, complete schema with the status
   pipeline, CHECK constraints, indexes, and RLS policies).
3. Click **Run**.

This creates `student_founders_applications` with:
- Applicant fields (name, age, institution, grade/year, course, about)
- Startup fields (name, `startup_stage` — one of `Idea`, `Prototype`,
  `MVP`, `Early Users`, `Revenue` — and idea description)
- `help_needed` (comma-separated), 6 link fields, `why_select`
- A `status` pipeline (`Pending → Shortlisted / Interview → Accepted /
  Rejected / Archived`), plus `notes` and `reviewed_by` for admin use
- RLS: anyone can insert (public form submissions), only an
  authenticated user can read/update/delete (the admin dashboard)

## 3️⃣ Create your admin login

The dashboard uses real Supabase Auth — it's not just an open RLS
policy, you need an actual user to sign in with:

1. **Authentication → Users → Add user** (or "Invite").
2. Set the email + password you'll use to log into `/admin`.

## 4️⃣ Fill in `supabase-config.js`

**Settings → API Keys** → copy the **Project URL** and **anon
public** key into `supabase-config.js`:

```js
window.SUPABASE_CONFIG = {
  url: "https://xxxxxxxxxxxx.supabase.co",
  anonKey: "eyJ..."
};
```

Never put the `service_role` key here — only `anon public`.

## 5️⃣ Test locally (optional)

```bash
npx serve .
```
Form at `/`, dashboard at `/admin`.

## 6️⃣ Deploy

Push the folder to its own GitHub repo, then on Vercel: **Import
Project → Framework Preset: Other → leave Build Command / Output
Directory blank → Deploy.** `vercel.json` already handles routing
`/admin` to `admin/index.html`.

## 7️⃣ Verify end-to-end

1. Submit a test application on the live form.
2. Log into `/admin` with the user you created in step 3.
3. Confirm it appears on the Dashboard and in All Applications.
4. Try Shortlist/Accept/Reject and the detail drawer's Save/Delete —
   each should toast a confirmation and update the list immediately.

---

## 🐛 Troubleshooting

**Form submit fails / red error in console**
Open DevTools → Console. A `PGRST204` "could not find column" means
the form and table are out of sync — shouldn't happen if you ran the
provided migration as-is. A `23514` / check constraint error usually
means `startup_stage` got a value outside `Idea / Prototype / MVP /
Early Users / Revenue` — don't edit the dropdown's `value=` attributes.

**Admin login fails**
Make sure you created the user in **Authentication → Users** (step 3)
— RLS alone doesn't create a login, and the dashboard requires a real
signed-in session to read/update/delete rows.

**Admin panel loads but shows nothing**
Check the row actually exists in **Table Editor** in Supabase. If it's
there but the dashboard is empty, check the console for an RLS/auth
error — it usually means you're not signed in.

---

Everything else (design, validation rules, six-step flow, draft
autosave) is already built into `index.html` and `admin/index.html` —
this guide only covers wiring up your new Supabase project correctly.
