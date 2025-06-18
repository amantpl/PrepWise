**PrepWise**
*AI-Powered Mock Interview Platform*

[![Live Demo](https://img.shields.io/badge/demo-online-blue)](https://prep-wise-nu-one.vercel.app/)

---

## 🚀 Overview

PrepWise empowers job seekers to ace technical interviews through realistic **voice-based AI interviews** and in-depth **performance analytics**. Practice anytime, get instant feedback, and track your progress—all in one place.

<p align="center">
  <img src="/dashboard.jpg" alt="PrepWise Screenshot" width="600"/>
</p>

---

## 📋 Table of Contents

1. [Key Features](#key-features)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [Configuration](#configuration)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## 🔑 Key Features

* 🎤 **Voice-Based AI Interviews**: Engage in natural conversation with AI interviewers.
* 📊 **Performance Analytics**: Detailed scores across:

  * Communication Skills
  * Technical Knowledge
  * Problem-Solving
  * Cultural & Role Fit
  * Confidence & Clarity
* 📝 **Personalized Feedback**: Actionable recommendations to improve.
* 🛠️ **Dynamic Question Generator**: Tailored questions by role, level, and tech stack.
* 🔒 **Secure Authentication**: Firebase-backed user management.
* 📱 **Responsive Design**: Desktop & mobile-ready UI.

---

## 🏗️ Tech Stack

| Layer            | Technology                                 |
| ---------------- | ------------------------------------------ |
| **Frontend**     | Next.js 14 · TypeScript 5 · Tailwind CSS 3 |
| **Backend & AI** | Firebase 11 · Vapi.ai 2.3 · Gemini AI 1.0  |
| **Utilities**    | React Hook Form 7 · Zod 3 · Sonner 2       |

---

## 🤸 Quick Start

**Prerequisites**

* Git
* Node.js
* npm

```bash
# Clone & navigate
git clone https://github.com/amantpl/PrepWise.git
cd ai_mock_interviews

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

---

## ⚙️ Configuration

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Populate keys:

   ```ini
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=
   GOOGLE_GENERATIVE_AI_API_KEY=
   NEXT_PUBLIC_BASE_URL=

   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=

   FIREBASE_PROJECT_ID=
   FIREBASE_CLIENT_EMAIL=
   FIREBASE_PRIVATE_KEY=
   ```

---

## 🗂️ Project Structure

```
├── app/                  # Next.js routes & pages
│   ├── (auth)/           # Authentication layouts
│   └── (root)/           # Main app layouts & pages
├── components/           # Reusable UI components
├── constants/            # Static assets & config
├── lib/                  # Utils & API integrations
│   └── actions/          # Business logic & prompts
├── styles/               # Global & component styles
├── public/               # Static files (images, icons)
├── .env.local            # Environment variables
└── package.json          # Scripts & dependencies
```

---

## 🤝 Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/YourFeature`
5. Open a pull request.

Please ensure code follows project conventions and includes tests where applicable.

---

*Made by Aman Thapliyal*

