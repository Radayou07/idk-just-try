# 📚 BookNotes — Full Stack Mini Website

A beginner-friendly full-stack web app to help you learn how
Frontend, Backend, and Database connect together.

---

## 📁 Project Structure

```
booknotes/
├── frontend/
│   └── index.html       ← What users SEE (HTML, CSS, JavaScript)
│
├── backend/
│   ├── server.js        ← The "brain" (Node.js + Express)
│   ├── package.json     ← Lists backend dependencies
│   └── books.db         ← SQLite database (auto-created when you run)
│
└── README.md            ← This file!
```

---

## 🧠 How It All Connects

```
[ User fills form ]
        ↓
[ Frontend (index.html) ]
   JavaScript calls fetch("http://localhost:3000/books", {...})
        ↓
[ Backend (server.js) ]
   Express receives the request
   Reads/writes to the database
   Returns JSON response
        ↓
[ Database (books.db) ]
   SQLite stores the data in a file
        ↑
   JSON flows back up to the frontend
        ↑
[ Frontend updates the page ]
```

---

## 🚀 How to Run Locally

### Step 1 — Install Node.js
Download from: https://nodejs.org  (get the LTS version)

### Step 2 — Install backend packages
```bash
cd backend
npm install
```

### Step 3 — Start the backend
```bash
node server.js
# You'll see: 🚀 Backend running at http://localhost:3000
```

### Step 4 — Open the frontend
Just double-click `frontend/index.html` in your file explorer,
OR open your browser and go to:
```
file:///path/to/booknotes/frontend/index.html
```

That's it! The page talks to your local backend automatically.

---

## 🗄️ Understanding the Database

We use **SQLite** — the simplest database for beginners:
- It's just a **single file** (books.db) — no server needed
- You can open it with: https://sqlitebrowser.org (free GUI app)
- The SQL table looks like this:

```sql
CREATE TABLE books (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  title      TEXT NOT NULL,
  author     TEXT NOT NULL,
  note       TEXT,
  rating     INTEGER,
  created_at TEXT DEFAULT (datetime('now'))
)
```

---

## 🌐 Where to Deploy for FREE

Once you're ready to put your website on the internet:

### Frontend (index.html)
| Service    | URL                    | Notes                        |
|------------|------------------------|------------------------------|
| **Netlify**    | netlify.com        | Drag & drop your HTML file ✅ |
| **Vercel**     | vercel.com         | Connect to GitHub            |
| **GitHub Pages**| pages.github.com  | Free with any GitHub repo    |

### Backend (server.js)
| Service       | URL               | Free Tier                   |
|---------------|-------------------|-----------------------------|
| **Railway**   | railway.app       | Easy, $5 credit/month free  |
| **Render**    | render.com        | Free tier (sleeps when idle)|
| **Fly.io**    | fly.io            | Free small apps             |
| **Cyclic**    | cyclic.sh         | Free Node.js hosting        |

### Full-Stack (Both together)
| Service    | Notes                                        |
|------------|----------------------------------------------|
| **Railway** | Deploy both frontend + backend easily        |
| **Render**  | One repo = one web service                   |

### 🔑 Deployment Tip
When you deploy, change the API URL in index.html from:
```javascript
const API = "http://localhost:3000";   // local
```
to your real backend URL, like:
```javascript
const API = "https://my-app.railway.app";   // deployed
```

---

## 📚 What to Learn Next

1. **React** — Better way to build frontends (instead of plain HTML/JS)
2. **PostgreSQL or MySQL** — More powerful databases than SQLite
3. **Authentication** — Add login/signup with Passport.js or Supabase
4. **Environment Variables** — Store secrets safely with .env files
5. **REST vs GraphQL** — Different ways to design your API

---

## 🛠️ Tech Stack

| Layer     | Technology        | What it does                   |
|-----------|-------------------|--------------------------------|
| Frontend  | HTML + CSS + JS   | What users see and click       |
| Backend   | Node.js + Express | Handles requests, runs logic   |
| Database  | SQLite            | Stores data permanently        |
| Protocol  | HTTP + JSON       | Language frontend/backend speak|
# idk-just-try
