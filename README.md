# 🛍️ Full Stack E-Commerce Frontend - Next.js

This is the frontend of the Full Stack E-Commerce application, built with **Next.js + TypeScript**. It connects to the backend server via REST APIs and provides SSR-rendered product pages, dynamic routing, cart functionality, and reports UI.

## 🚀 Tech Stack

- **Framework**: Next.js (with Server-Side Rendering)
- **Language**: TypeScript (.tsx)
- **Styling**: Tailwind CSS / CSS Modules
- **Data Fetching**: Axios , React-query
- **Routing**: Dynamic Routing
- **Authentication**: JWT (via backend)
- **State Management**: React useState / Context API

## 📁 Project Structure

```
frontend/
│
├── public/               # Static assets
├── src/
│   ├── app/              # App router (routes defined here)
│   │   ├── (site)/       # Layout or site-wide pages
│   │   ├── context/      # React contexts
│   │   ├── css/          # Global styles
│   │   ├── fonts/        # Custom fonts
│   │   └── favicon.ico   # App favicon
│   ├── components/       # Shared UI components
│   ├── constants/        # Constant values
│   ├── lib/              # Utility libraries or helpers
│   ├── redux/            # Redux slices and store setup
│   ├── services/         # API service handlers
│   ├── shared/           # Reusable shared logic
│   ├── types/            # TypeScript types and interfaces
│   └── utils/            # Utility functions
│
├── .env                  # Environment variables
├── .eslintrc.json        # ESLint config
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js config
├── next-env.d.ts         # TypeScript environment setup
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS config
├── tailwind.config.ts    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── README.md             # Project README
```

## 🛠️ How to Run Frontend

### 1. Clone the Repository

```bash
git clone https://github.com/prakash-dev-code/FullStackExam-prakash-sahu-18-july
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
npm start
```

## ✅ Features Implemented

- ✅ SSR product listing page
- ✅ Dynamic route for product details
- ✅ Cart page and checkout flow
- ✅ Login/Register functionality
- ✅ Protected pages
- ✅ Admin Controle panel 
