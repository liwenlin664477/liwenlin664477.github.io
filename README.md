# Wenlin Li — Academic Homepage

A clean, single-column academic personal homepage (zero dependencies, plain HTML/CSS/JS),
inspired by the al-folio style and built for GitHub Pages.

## 📂 Structure

```
.
├── index.html        # All page content
├── style.css         # Styling + light/dark theme (ASU maroon & gold)
├── main.js           # Theme toggle + footer year
├── CV.pdf            # Your CV (linked from the nav)
├── assets/
│   └── avatar.jpg    # Your profile photo  ←  ADD THIS
└── README.md
```

## ⚠️ One thing to do first: add your photo

Save your headshot as **`assets/avatar.jpg`**. From the terminal, for example:

```bash
cp ~/Downloads/your-photo.jpg "assets/avatar.jpg"
```

(Until you do, the photo box will show a broken-image icon.)

## 🛠 Customize

- **Name, bio, links** — edit `index.html` (the `.profile` and `.bio` sections).
- **Social URLs** — update the placeholder `https://github.com/`, Google Scholar,
  and LinkedIn links in `.profile__links` with your real profiles.
- **Sections** — Research Interests / Education / Experience / Projects / Skills are
  plain HTML lists in `index.html`; add or remove `<li class="entry">` blocks freely.
- **Colors** — tweak the `:root` variables at the top of `style.css`
  (currently ASU maroon in light mode, ASU gold in dark mode).

## 🚀 Deploy to GitHub Pages

1. Create a repo named **`<your-username>.github.io`**.
2. Push these files:

   ```bash
   git init
   git add .
   git commit -m "feat: academic homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source = Deploy from a branch**, branch `main` / `(root)`.
4. Wait ~1 minute, then visit `https://<your-username>.github.io`.

## 🔍 Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
