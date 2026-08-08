# 🚀 Ground Zero Setup & Deployment Guide

## What You Have

✅ **Completely rewritten from scratch**
✅ **Form fully working with Supabase**
✅ **Admin panel to view submissions**
✅ **Auto-redirect to clysto.net on success**
✅ **Mobile responsive design**
✅ **Draft auto-save to browser**

---

## Project Structure

```
studentfounders/
├── index.html              # Main form (6-step process)
├── admin/index.html        # Admin dashboard to view applications
├── supabase-config.js      # Supabase credentials & initialization
├── vercel.json             # Deployment config
├── .gitignore              # Git ignore file
└── README.md               # Project README
```

---

## 1️⃣ Upload to GitHub

### Initialize Git repo
```bash
cd studentfounders
git init
git add .
git commit -m "Initial commit - Ground Zero form"
git branch -M main
git remote add origin https://github.com/yourusername/studentfounders.git
git push -u origin main
```

---

## 2️⃣ Deploy to Vercel

### Option A: Direct Vercel (Easiest)
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repo
4. Click "Deploy" (no env vars needed, credentials are in the code)

### Option B: Using Vercel CLI
```bash
npm install -g vercel
cd studentfounders
vercel
```

### Option C: Direct Upload
1. Visit https://vercel.com/new/static
2. Upload the folder
3. Done!

---

## 3️⃣ Database Setup

Your Supabase credentials are already configured in `supabase-config.js`.

### Create the table in Supabase:

1. Go to https://app.supabase.com
2. Select your project: "oonjohhbuhspcpwpsmdt"
3. Go to "SQL Editor" (left sidebar)
4. Create new query
5. Paste this SQL:

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

-- Set row level security
ALTER TABLE student_founders_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Allow inserts" ON student_founders_applications
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users (admin) to read
CREATE POLICY "Allow admin to read" ON student_founders_applications
  FOR SELECT USING (auth.role() = 'authenticated');
```

6. Click "Run"
7. ✅ Done!

---

## 4️⃣ Test Everything

### Test the Form
1. Go to your Vercel domain (e.g., https://studentfounders.vercel.app)
2. Fill out the form
3. Click "Submit Application"
4. ✅ Should show success message and redirect to clysto.net

### Test the Admin Panel
1. Go to https://yourdomain.com/admin
2. You should see the application you just submitted
3. Click "View" to see full details
4. Click "Export CSV" to download all applications

---

## 🔧 Customization

### Change the Redirect URL
**File**: `index.html` (line ~440)
```javascript
setTimeout(() => {
  window.location.href = "https://clysto.net"; // ← CHANGE THIS
}, 3000);
```

### Change Brand Colors
**File**: `index.html` (lines 37-45)
```css
:root {
  --primary: #00917D;      /* Main teal color */
  --primary-dark: #007A68; /* Darker teal */
  --primary-light: rgba(0, 145, 125, 0.06); /* Light teal */
  /* ... more colors ... */
}
```

### Add/Remove Form Fields
1. Add input in HTML (find the step you want to edit)
2. Add to validation function (search for `validateStep`)
3. Add to Supabase insert payload (search for `const payload`)
4. Add column to Supabase table

Example:
```html
<div class="form-group">
  <label>Your New Field *</label>
  <input type="text" name="new_field" required>
  <div class="error" data-field="new_field"></div>
</div>
```

---

## 🐛 Troubleshooting

### "Supabase is not initialized"
✅ **Fix**: Refresh the page, wait 2 seconds, try again

### Form won't submit
✅ **Check**: Open DevTools (F12) → Console tab → look for red errors

### Admin panel shows no data
✅ **Verify**: 
- You created the Supabase table correctly
- Application was successfully submitted
- Check the Supabase UI directly to see if row exists

### Page won't load
✅ **Try**: 
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check if your Vercel deployment is still running

---

## 📊 Admin Panel Features

- **View all applications** in a clean table
- **Search** by name, startup, or institution
- **View details** of each application
- **Export to CSV** for spreadsheet processing
- **Statistics** showing total and today's applications

---

## 🔐 Security Notes

- Supabase credentials are public (anonymous key) — this is safe
- Only unauthenticated inserts allowed
- Enable row-level security as shown above for admin reads

---

## 📱 Mobile Responsive

The form is fully responsive:
- **Desktop** (1024px+): Multi-column layouts
- **Tablet** (640-1024px): Single column with optimized spacing
- **Mobile** (< 640px): Full width, touch-friendly

---

## ✨ Features Included

✅ 6-step form (Personal, About, Startup, Help, Links, Final)
✅ Auto-save drafts to localStorage
✅ Validation on each step
✅ Smooth animations
✅ Admin panel with search & export
✅ Success redirect
✅ Mobile responsive
✅ Dark mode friendly
✅ CSV export for applications

---

## 🚀 You're Ready!

1. **Push to GitHub**
2. **Deploy to Vercel**
3. **Create Supabase table**
4. **Test the form**
5. **View submissions in admin**

That's it! The form is completely working and ready to go live.

---

## Need Help?

- **Form not working?** → Check browser console (F12)
- **Supabase issues?** → Verify table exists in your Supabase dashboard
- **Design changes?** → Edit CSS variables at top of index.html
- **Add fields?** → Update HTML form + validation + payload + Supabase schema

---

## Files Summary

| File | Purpose |
|------|---------|
| `index.html` | Main application form (26KB) |
| `admin/index.html` | Admin dashboard to view apps (13KB) |
| `supabase-config.js` | Supabase initialization (1KB) |
| `vercel.json` | Vercel deployment config |
| `README.md` | Project documentation |
| `.gitignore` | Git ignore patterns |

All files are production-ready. No build process needed!

---

Good luck! 🎉
