# PrepWise - AI-Powered Interview Preparation Platform

## Overview
PrepWise helps job seekers prepare for technical interviews through realistic AI-powered mock interviews. Practice with voice-based interviews, get instant feedback on your performance, and identify areas for improvement.

[Live Demo](https://prepwise-app.vercel.app) | [License](LICENSE)

## Key Features
- **Voice-based AI Interviews** - Natural conversation with AI interviewers
- **Performance Analytics** - Scores across 5 key interview categories
- **Personalized Feedback** - Actionable improvement recommendations
- **Dynamic Question Generator** - Customized questions based on role/tech stack
- **Secure Authentication** - Firebase-powered user management
- **Responsive Design** - Works seamlessly on desktop and mobile

## Tech Stack
**Frontend:**
- Next.js 14
- TypeScript 5
- Tailwind CSS 3

**Backend & AI:**
- Firebase 11
- Vapi.ai 2.3
- Gemini AI 1.0

**Utilities:**
- React Hook Form 7
- Zod 3
- Sonner 2

## Getting Started

### Prerequisites
- Node.js 18+
- Firebase account
- Vapi.ai account
- Google Cloud account (for Gemini API)

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/prepwise.git

# Navigate to project directory
cd prepwise

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
