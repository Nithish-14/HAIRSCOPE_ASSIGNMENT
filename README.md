# 🔐 Lab Login Doors Animation (React + Vite + Tailwind + Framer Motion)

An animated login-to-lab demo built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

* 🔑 Single-password auth (demo): **`open`**
* 🎬 Framer Motion animations (login rotate+shrink+fade, doors slide+fade)
* 🧪 Lab background always visible beneath overlays
* ⏳ Session timer (default **5 minutes**) with persistence via `localStorage`
* 🧭 Header with live countdown always on top
* 🔄 Exit without reset; optional reset button for demos

---

## 🛠 Tech Stack

* **React 18**
* **Vite**
* **Tailwind CSS**
* **Framer Motion**

---

## 🌐 Live Demo

👉 [LINK](https://hairscope-assignment-rho.vercel.app/)

---

## 🚀 Getting Started

### 1) Clone & Install

```bash
git clone https://github.com/Nithish-14/HAIRSCOPE_ASSIGNMENT.git
npm install
```

### 2) Run Dev Server

```bash
npm run dev
```

### 3) Build for Production

```bash
npm run build
```

### 4) Preview Production Build (optional)

```bash
npm run preview
```

---

## ⚙️ Configuration

Update credentials and session time in `src/App.jsx` (or your config file):

```js
const CREDENTIALS = { password: "open" };
const ALLOCATED_MS = 5 * 60 * 1000; // 5 minutes
```

Local storage keys used: `remaining`, `lockout`.

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ Header.jsx    # Always-visible timer bar
 │   ├─ Login.jsx     # Form overlay (rotates/shrinks/fades on success)
 │   ├─ Doors.jsx     # Left/Right sliding doors (fade + slide on exit)
 │   └─ Lab.jsx       # Background content + Exit button
 ├─ utils/
 │   └─ storage.js    # loadState/saveState/clearState helpers
 ├─ assets/           # Images (imported via ES modules or /public)
 ├─ App.jsx           # App state (phase, timer, lockout)
 └─ main.jsx          # Vite entry point
```

---

## 🧩 Key Interactions

* **Enter Lab** → validates password → `step` changes from `"login"` → `"lab"` →
  `AnimatePresence` triggers `exit` animations for Login & Doors.
* **Exit Lab** → returns to `"login"` (timer continues; no reset).
* **Reset Demo** → clears `localStorage` and restores full time.

---

## 🧪 Testing Scenarios

* Wrong password → error message; no animation.
* Correct password → form rotates/shrinks/fades; doors slide & fade outward.
* Exit during session → back to login; timer preserved.
* Time expiry → auto lockout; login restricted until reset.

---
