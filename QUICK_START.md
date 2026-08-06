# ⚡ Quick Start (5 Minutes)

## What's Included

✅ Complete form (index.html)
✅ Admin panel (admin/index.html)  
✅ Supabase config ready to go
✅ All files production-ready

## Step 1: Push to GitHub (1 min)

```bash
git init
git add .
git commit -m "Ground Zero form"
git remote add origin https://github.com/YOU/studentfounders
git push -u origin main
```

## Step 2: Deploy to Vercel (1 min)

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. Click "Deploy"
4. Done! You get a live URL

## Step 3: Create Supabase Table (2 min)

1. Go to https://app.supabase.com
2. Select your project
3. SQL Editor → New Query
4. Paste this:

```sql
CREATE TABLE IF NOT EXISTS student_founders_applications (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  age INTEGER,
  institution TEXT,
  grade_year TEXT,
  course TEXT,
  about TEXT,
  startup_name TEXT,
  startup_stage TEXT,
  year_founded INTEGER,
  idea TEXT,
  help_needed TEXT,
  website TEXT,
  app_link TEXT,
  github TEXT,
  figma TEXT,
  demo_video TEXT,
  linkedin TEXT,
  why_select TEXT
);

ALTER TABLE student_founders_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserts" ON student_founders_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin to read" ON student_founders_applications
  FOR SELECT USING (auth.role() = 'authenticated');
```

5. Click "Run"

## Step 4: Test (1 min)

1. Open your Vercel URL
2. Fill form → Submit
3. Should redirect to clysto.net ✅
4. Go to /admin to see submission

## That's It! 🎉

Your form is live and working.

---

## URLs

- **Form**: `https://yourdomain.vercel.app`
- **Admin**: `https://yourdomain.vercel.app/admin`

## Files Checklist

- [ ] index.html (main form)
- [ ] admin/index.html (admin panel)
- [ ] supabase-config.js (config - don't change)
- [ ] vercel.json (deployment config)
- [ ] README.md (docs)

All ready to push! 🚀
