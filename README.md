# ✍️ Novelle — Modern Publishing & Blogging Platform

<p align="center">
  <img src="public/vite.svg" alt="Novelle Logo" width="80" height="80" />
</p>

<p align="center">
  <strong>A modern, distraction-free space for stories, deep dives, tech tutorials, and insights.</strong>
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://appwrite.io/"><img src="https://img.shields.io/badge/Appwrite-BaaS-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" /></a>
  <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/Redux_Toolkit-State-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.tinymce.com/"><img src="https://img.shields.io/badge/TinyMCE-Rich_Text_Editor-2B579A?style=for-the-badge&logo=tinymce&logoColor=white" alt="TinyMCE" /></a>
</p>

---

## 🌟 Overview

**Novelle** is a full-featured, responsive, modern blogging and content publishing platform. Built with **React 19**, **Vite**, and **Tailwind CSS**, with seamless backend and storage powered by **Appwrite Cloud/BaaS**.

Whether you're crafting long-form engineering essays, short tutorials, or personal journals, Novelle provides a clean typography-first writing and reading experience, complete with dark mode, rich text editing, profile settings, and community interactions.

---

## ✨ Features

### 🔐 Authentication & Session Management
- **User Authentication**: Secure Sign-up and Login powered by Appwrite Account API.
- **Protected Routes**: Custom `<AuthLayout>` wrapper guarding authenticated endpoints.
- **Redux State Persistence**: Real-time authentication state with automatic token recovery on reload.

### 📝 Content Creation & Publishing (CRUD)
- **Rich Text Editor (RTE)**: Integrated with [TinyMCE](https://www.tiny.cloud/) supporting typography, headings, code blocks, lists, and formatting.
- **Slug Generation**: Automatic URL-friendly slug generation based on post title with real-time updates.
- **Cover Image Uploads**: Image upload, storage management, and automatic public preview URL handling via Appwrite Storage.
- **Post Visibility Status**: Toggle between `active` (published) and `inactive` (draft) statuses.
- **Full Author Permissions**: Only the creator of an article has permission to edit or delete their posts.

### 📖 Reader & Community Experience
- **Community Library (`/all-posts`)**:
  - Live instant title search filter.
  - Sorting options: *Newest First*, *Oldest First*, and *Alphabetical (A-Z)*.
- **Post Reading View (`/post/:slug`)**:
  - Estimated reading time calculator and formatted publication dates.
  - Like system with local persistence counter.
  - Interactive comments section (with word limit validation & deletion).
  - One-click share / copy post link to clipboard with visual toast alerts.
  - Safe HTML rendering with `html-react-parser`.

### ⚙️ User Settings & Profile
- **Display Name Customization**: Update your author display name across the platform.
- **Password Management**: Change account password with integrated password strength indicator.
- **Account Metadata**: View Appwrite User ID with one-click copy.
- **Session Control**: Single-device and all-device logout support.

### 🎨 Design & UI/UX
- **Dark / Light Mode**: Smooth theme toggling with localStorage and system preference detection (`ThemeContext`).
- **Modern Design System**: Clean typography (`Plus Jakarta Sans`), glassmorphism elements, micro-animations, and responsive layouts for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) + React-Redux |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Custom CSS |
| **Rich Text Editor** | [@tinymce/tinymce-react](https://www.tiny.cloud/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) |
| **Backend & Database** | [Appwrite](https://appwrite.io/) (Auth, Databases, Storage) |
| **Parser** | [html-react-parser](https://www.npmjs.com/package/html-react-parser) |

---

## 📁 Project Structure

```text
Novelle_blog/
├── public/                  # Static assets
├── src/
│   ├── appwrite/            # Appwrite SDK services
│   │   ├── auth.js          # Authentication service (login, register, currentUser, settings)
│   │   └── config.js        # Database & Storage service (CRUD posts, file uploads/previews)
│   ├── components/          # Reusable UI components
│   │   ├── container/       # Responsive layout container
│   │   ├── Footer/          # Application footer
│   │   ├── Header/          # Navbar, theme toggle, nav links, logout
│   │   ├── post-form/       # Post create/edit form component
│   │   ├── AuthLayout.jsx   # Route authentication protection guard
│   │   ├── Button.jsx       # Custom styled button
│   │   ├── Input.jsx        # Custom accessible input with forwardRef
│   │   ├── Logo.jsx         # App logo
│   │   ├── PostCard.jsx     # Card preview for articles in feeds
│   │   ├── RTE.jsx          # TinyMCE Rich Text Editor wrapper
│   │   └── Select.jsx       # Custom select dropdown
│   ├── conf/
│   │   └── conf.js          # Environment variable mapping
│   ├── context/
│   │   └── ThemeContext.jsx # Dark / Light theme provider and hooks
│   ├── pages/               # Route page components
│   │   ├── AddPost.jsx      # Create post page
│   │   ├── AllPosts.jsx     # Explore all articles with search & sort
│   │   ├── EditPost.jsx     # Edit existing post
│   │   ├── Home.jsx         # Landing page with hero & featured posts
│   │   ├── Login.jsx        # User login page
│   │   ├── Post.jsx         # Single post reading view with comments & likes
│   │   ├── Settings.jsx     # Account & profile settings
│   │   └── Signup.jsx       # User registration page
│   ├── store/               # Redux state store
│   │   ├── authSlice.js     # Auth status & user data slice
│   │   └── store.js         # Redux store configuration
│   ├── App.css              # Custom styling, animations & theme rules
│   ├── App.jsx              # Main App layout component
│   ├── index.css            # Tailwind directives & base styles
│   └── main.jsx             # React entry point with RouterProvider
├── .env.sample              # Environment variables template
├── package.json             # Dependencies and npm scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (`v18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- An [Appwrite](https://appwrite.io/) account (Appwrite Cloud or self-hosted instance)
- (Optional) [TinyMCE API Key](https://www.tiny.cloud/) (free tier available)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Novelle_blog.git
cd Novelle_blog
```

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Appwrite Backend

1. Create a project in your **Appwrite Console**.
2. Create a **Database** and note its ID.
3. Inside the database, create a **Collection** (e.g., `articles` or `posts`) with the following attributes:

| Key | Type | Size | Required | Default |
|---|---|---|---|---|
| `title` | String | 255 | Yes | - |
| `content` | String | 65535 (or long text) | Yes | - |
| `featuredImage` | String | 100 | Yes | - |
| `status` | String | 20 | Yes | `active` |
| `userId` | String | 100 | Yes | - |

4. Under **Collection Settings > Permissions**, enable:
   - `Any` -> **Read**
   - `Users` -> **Create**, **Read**, **Update**, **Delete**
5. Create a **Storage Bucket** (e.g., `blog-images`) and grant **Read (Any / Users)** and **Create/Update/Delete (Users)** permissions.
6. Under **Project Settings > Web Platforms**, add `http://localhost:5173` (or your production domain) as a trusted hostname.

---

### 4. Configure Environment Variables

Create a `.env` file in the root directory by copying `.env.sample`:

```bash
cp .env.sample .env
```

Fill in your Appwrite and TinyMCE credentials:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_appwrite_project_id"
VITE_APPWRITE_DATABASE_ID="your_appwrite_database_id"
VITE_APPWRITE_COLLECTION_ID="your_appwrite_collection_id"
VITE_APPWRITE_BUCKET_ID="your_appwrite_bucket_id"
VITE_TINYMCE_API_KEY="your_tinymce_api_key"
```

---

### 5. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Starts Vite dev server with Hot Module Replacement (HMR). |
| **Build** | `npm run build` | Bundles and minifies the application for production into `/dist`. |
| **Preview** | `npm run preview` | Locally preview the production build output. |
| **Lint** | `npm run lint` | Runs ESLint to check code quality and formatting. |

---

## 🚢 Deployment

### Deploying on Vercel / Netlify

1. Push your repository to GitHub.
2. Connect your repository on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Set the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add all environment variables from `.env` in the platform dashboard.
5. In your Appwrite project dashboard, add your production domain to the allowed **Web Platforms**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ for writers, creators, and developers.
</p>
