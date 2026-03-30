# 🧹 Cleaning Dashboard

A mobile-first operations dashboard built for cleaning companies — designed to manage jobs, teams, and schedules in one clean interface.

---

## 📋 Overview

Cleaning Dashboard is a modern web application that gives cleaning companies a simple way to manage their daily operations. Instead of juggling spreadsheets or paper lists, teams can track jobs, assign staff, and monitor progress in real time — all from a mobile-friendly dashboard.

The project was built to practice building real-world, production-style applications with a modern tech stack.

---

## ✨ Key Features

- 📱 **Mobile-first design** — fully responsive, works great on phones and tablets
- 🗓️ **Job scheduling** — create, view, and manage cleaning jobs by date
- 👥 **Team management** — assign staff to jobs and track availability
- 📊 **Status tracking** — monitor job progress (pending, in progress, completed)
- 🔍 **Filtering & search** — quickly find jobs or team members
- 🌙 **Clean UI** — minimal, distraction-free interface built with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | Framework & routing |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [React](https://react.dev/) | UI components |

---

## 🧠 Concepts Used

- **React Server Components** — fetching data on the server for better performance
- **Client Components** — handling interactivity where needed (`"use client"`)
- **TypeScript interfaces & types** — defining clear data shapes for jobs, staff, etc.
- **Custom hooks** — reusable logic (e.g. `useJobs`, `useFilter`)
- **Component composition** — building complex UIs from small, reusable pieces
- **Conditional rendering** — showing different UI states (loading, empty, error)
- **Props & state management** — passing data down and managing local UI state

---

## 📸 Screenshots

> _Screenshots coming soon — the app is currently in development._

<!-- Add screenshots here once available:
![Dashboard Overview](./screenshots/dashboard.png)
![Job Detail View](./screenshots/job-detail.png)
-->

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/FerasHB/cleaning-dashboard.git

# 2. Navigate into the project folder
cd cleaning-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
cleaning-dashboard/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Dashboard home page
│   └── jobs/
│       └── [id]/page.tsx   # Job detail page
├── components/             # Reusable UI components
│   ├── JobCard.tsx
│   ├── StaffList.tsx
│   └── StatusBadge.tsx
├── hooks/                  # Custom React hooks
│   └── useJobs.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── lib/                    # Utility functions & helpers
│   └── utils.ts
└── public/                 # Static assets
```

---

## 🎯 Goal of This Project

This project is part of my developer portfolio. My goal was to build something that looks and feels like a real product — not just a tutorial clone.

I wanted to practice:
- Structuring a **Next.js App Router** project from scratch
- Writing clean, typed code with **TypeScript**
- Building a **mobile-first UI** with Tailwind CSS
- Thinking about real user needs and translating them into features

---

## 🔮 Future Improvements

- [ ] Authentication (login for admins and staff)
- [ ] Database integration (e.g. Supabase or PlanetScale)
- [ ] Push notifications for job updates
- [ ] Export reports as PDF
- [ ] Dark mode support
- [ ] Multi-language support (DE / EN)

---

## 👤 Author

Feras Hababa
Junior Frontend Developer

- GitHub: [@your-username](https://github.com/FerasHB)


---

> Built with ☕ and a lot of `console.log()` — feel free to reach out if you have feedback!