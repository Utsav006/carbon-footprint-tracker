# 🌱 Carbon Tracker — Personal Sustainability Platform

> **Track your footprint. Own your impact. Live smarter.**

A data-driven web application that helps individuals measure, visualize, and reduce their personal carbon emissions — one day at a time.

🔗 **[Live Demo →](https://carbon-footprint-tracker-puce.vercel.app/)**

---

## 🏆 Built For

This project was built as a submission for **[Virtual Prompt Wars](https://promptwars.in/promptwarsVirtual.html)** — a competitive challenge focused on leveraging AI tools to build real-world solutions rapidly and effectively.

**Vertical:** Sustainability & Environmental Impact

---

## 📌 Overview

Carbon Tracker is a smart, dynamic assistant that translates your daily lifestyle choices into quantifiable environmental impact. Whether it's the commute you take, the energy you consume, or the food on your plate — every action has a carbon cost. This platform makes that cost visible, comparable, and actionable.

---

## ✨ Features

- **🚗 Transport Logging** — Track emissions from daily commutes and travel
- **⚡ Energy Monitoring** — Log household electricity and fuel consumption
- **🥗 Diet Impact Tracking** — Understand the carbon cost of your food choices
- **📊 Real-time Visualization** — Dynamic breakdown charts powered by Recharts
- **📅 Historical Logs** — Firebase Firestore persists your data across sessions
- **🌍 Global Benchmark Comparison** — See how your footprint stacks up against sustainability averages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| Visualization | Recharts |
| Deployment | Vercel |
| Environment | `.env` variables (secure credential management) |

---

## 🔄 How It Works

```
User Input → Emission Calculation → Firestore Save → Dashboard Visualization
```

1. **Data Capture** — A responsive form collects data across three high-impact categories: Transport, Energy, and Diet.
2. **Processing** — Standard CO₂ conversion factors are applied to each input to calculate emissions.
3. **Visualization & Feedback** — Recharts renders an instant breakdown, benchmarked against global sustainability averages.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- A Firebase project with Firestore enabled

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/carbon-tracker.git
cd carbon-tracker

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your Firebase config values in .env

# 4. Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> ⚠️ **Never commit your `.env` file.** It is listed in `.gitignore` by default.

---

## 📐 Emission Calculation Methodology

Emissions are estimated using generalized average conversion factors across three categories:

| Category | Basis |
|---|---|
| 🚗 Transport | kg CO₂ per km, per mode of transport |
| ⚡ Energy | kg CO₂ per kWh consumed |
| 🥗 Diet | kg CO₂ per meal type (vegan / vegetarian / meat-based) |

> These figures are based on widely published environmental benchmarks and provide a reliable baseline estimate for personal carbon awareness.

---

## ✅ Validation

- **Functional Testing** — Sample data submitted across all three categories; Firestore document creation confirmed via the Firebase console.
- **Security Audit** — All API credentials managed via environment variables; `.env` excluded from version control.

---

## 📁 Project Structure

```
CARBON_FOOTPRINT/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # Static assets
│   ├── components/           # Reusable UI components
│   ├── App.css               # Global component styles
│   ├── App.jsx               # Root application component
│   ├── firebase.js           # Firebase initialization
│   ├── index.css             # Base styles
│   └── main.jsx              # React entry point
├── .env                      # Local environment variables (DO NOT COMMIT)
├── .env.example              # Template for environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## 🔐 Security Notes

- Firebase credentials are loaded exclusively through `import.meta.env` variables.
- The `.env` file is listed in `.gitignore` and must **never** be pushed to the repository.
- Firestore security rules should be configured to restrict read/write access appropriately.

---

## 🌐 Assumptions

- Emission calculations use generalized average conversion factors as a baseline; regional grids and individual vehicle efficiency are not accounted for.
- The application is optimized for modern web browsers (Chrome, Firefox, Edge, Safari).
- Users are responsible for configuring their own Firebase project and Firestore instance.

---

## 📄 License

This project is open-sourced for evaluation purposes as part of the Virtual Prompt Wars competition. All rights reserved by the author.

---

<div align="center">
  <strong>Built with 💚 for a more sustainable future</strong><br/>
  Submitted to <a href="https://promptwars.in/promptwarsVirtual.html">Virtual Prompt Wars</a> · Sustainability & Environmental Impact Track<br/><br/>
  🔗 <a href="https://carbon-footprint-tracker-puce.vercel.app/"><strong>Live Demo</strong></a>
</div>
