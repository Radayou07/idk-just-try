// ============================================
// BACKEND - server.js
// This is the "brain" of your website.
// It handles requests from the frontend,
// talks to the database, and sends back data.
// ============================================

const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

// ── MIDDLEWARE ────────────────────────────────
// Middleware runs on every request before your routes.
app.use(cors());               // Allow frontend (different port) to talk to backend
app.use(express.json());       // Parse JSON bodies from requests


// ── DATABASE SETUP ────────────────────────────
// We use SQLite — it's a simple file-based database.
// Great for learning and small projects!
const db = new sqlite3.Database("books.db", (err) => {
  if (err) return console.error("DB error:", err);
  console.log("✅ Database connected: books.db");
});

// Create our table if it doesn't exist yet
db.run(`
  CREATE TABLE IF NOT EXISTS books (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    title      TEXT NOT NULL,
    author     TEXT NOT NULL,
    note       TEXT,
    rating     INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);


// ── ROUTES (API Endpoints) ────────────────────
// Routes are URLs the frontend can "call".
// Frontend → calls a URL → backend runs code → returns data


// GET /books — Fetch ALL books from database
app.get("/books", (req, res) => {
  db.all("SELECT * FROM books ORDER BY created_at DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);  // Send books as JSON back to frontend
  });
});


// POST /books — Save a NEW book to database
app.post("/books", (req, res) => {
  const { title, author, note, rating } = req.body;  // Data sent from frontend

  // Basic validation
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  db.run(
    "INSERT INTO books (title, author, note, rating) VALUES (?, ?, ?, ?)",
    [title, author, note, rating],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });

      // Send back the newly created book
      db.get("SELECT * FROM books WHERE id = ?", [this.lastID], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(row);
      });
    }
  );
});


// DELETE /books/:id — Delete a book by ID
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;  // :id comes from the URL e.g. /books/3
  db.run("DELETE FROM books WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Book deleted" });
  });
});


// ── START SERVER ──────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
  console.log(`   Try: http://localhost:${PORT}/books`);
});
