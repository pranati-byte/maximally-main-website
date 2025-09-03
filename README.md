# Maximally Main Website

Welcome to the codebase for Maximally's main website! This project powers the global hackathon league for teen builders, featuring playful hackathons, bootcamps, and a vibrant builder community. Below you'll find a comprehensive guide to the repository, its structure, technologies, and usage.

---

## 📁 Folder Structure & File Usage

```
maximally-main-website/
├── attached_assets/           # Images, logos, text assets, and design files
├── client/                   # Frontend React app
│   ├── index.html            # Main HTML entry point
│   ├── public/               # Static assets for frontend
│   └── src/                  # Source code for React app
│       ├── App.tsx           # Main React app, routing & providers
│       ├── pages/            # Route/page components (Home, Hackathons, Blog, etc.)
│       ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│       ├── ui/               # UI primitives from shadcn/ui
│       ├── lib/              # Utility functions
│       └── assets/           # Static assets (if present)
├── public/                   # Static files served directly (images, favicon, robots.txt, etc.)
├── server/                   # Backend API (Express, REST endpoints)
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Storage logic (e.g., file uploads)
│   └── vite.ts               # Vite server config
├── shared/                   # Shared TypeScript types/interfaces/utilities
│   └── schema.ts             # Database schema/types
├── components.json           # UI component registry (shadcn/ui)
├── drizzle.config.ts         # Drizzle ORM config (if using database)
├── package.json              # Project dependencies & scripts
├── postcss.config.js         # PostCSS setup
├── replit.md                 # Replit deployment & architecture docs
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite build config
```

---

## 🗂️ Detailed Folder & File Descriptions

### `attached_assets/`
- **Purpose:** Stores images, branding assets, exported text, and design files.
- **Usage:** Used for blog illustrations, logos, and static content referenced in the frontend.

### `client/`
- **Purpose:** Contains the entire frontend React application.
- **Key Files & Folders:**
  - `index.html`: Main HTML entry for the SPA.
  - `public/`: Static assets (images, icons, etc.) for the frontend.
  - `src/`: All React source code.
    - `App.tsx`: Main app component, sets up routing and global providers.
    - `pages/`: Each route/page (e.g., Home, Hackathons, Blog, About, Community, Bootcamps, etc.).
    - `components/`: Reusable UI components (Navbar, Footer, Testimonials, etc.).
    - `ui/`: UI primitives from shadcn/ui (Button, Card, Accordion, etc.).
    - `lib/`: Utility functions and helpers.
    - `assets/`: Static assets for the frontend (if present).

### `public/`
- **Purpose:** Static files served directly by the web server.
- **Usage:** SEO files (robots.txt, sitemap.xml), images, favicon, etc.

### `server/`
- **Purpose:** Backend API and server logic.
- **Key Files:**
  - `index.ts`: Main server entry point.
  - `routes.ts`: API route definitions.
  - `storage.ts`: File storage logic (uploads/downloads).
  - `vite.ts`: Vite server configuration.

### `shared/`
- **Purpose:** Shared TypeScript types, interfaces, and utilities for both client and server.
- **Usage:** Ensures type safety and consistency across the codebase.

### Top-Level Config Files
- `components.json`: Registry for shadcn/ui components.
- `drizzle.config.ts`: Configuration for Drizzle ORM (if using a database).
- `package.json`: Lists dependencies, scripts, and project metadata.
- `postcss.config.js`: PostCSS configuration for CSS processing.
- `replit.md`: Documentation for Replit deployment, architecture, and data flow.
- `tailwind.config.ts`: Tailwind CSS configuration (custom colors, themes).
- `tsconfig.json`: TypeScript configuration (compiler options, paths).
- `vite.config.ts`: Vite build and dev server configuration.

---

## 🛠️ Technologies Used

- **React + TypeScript**: Modern frontend stack for building interactive UIs.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework with custom Maximally colors.
- **shadcn/ui**: Accessible, unstyled UI primitives for rapid development.
- **TanStack Query**: Server state management for React.
- **React Router**: Client-side routing for SPA navigation.
- **Drizzle ORM**: Type-safe database access (if enabled).
- **Replit Plugins**: Enhanced development experience on Replit.

---

## 🌐 Routing & Main Pages

- `/` – Home page
- `/project-codegen` – Project CodeGen hackathon
- `/hacktober` – Hacktober month-long hackathon
- `/shipathon` – AI Shipathon
- `/makeathon` – Startup Makeathon
- `/community` – Builder community
- `/about` – About Maximally
- `/blog/*` – Blog posts
- `/bootcamps` – Bootcamp info
- `/thank-you` – Thank you page
- `/contact`, `/support`, `/terms`, `/privacy` – Misc info pages

All pages are implemented as React components in `client/src/pages/`.

---

## 📝 Content Management

- **Static Content:** Main pages and blog posts are React components.
- **Dynamic Forms:** Tally form integration for applications and sponsorship (see `TallyFormDialog` component).
- **SEO:** Dynamic meta tags via the `SEO` component.

---

## 🧩 UI Components

- **Navbar:** Responsive navigation bar.
- **Testimonials:** Carousel for user stories.
- **Community:** Feature highlights and builder stories.
- **MutualPactSection:** Partnership and collaboration details.
- **Footer:** Site-wide footer with links and info.

All components are in `client/src/components/`.

---

## 🏗️ Build & Deployment

### Local Development

```sh
npm install
npm run dev
```

### Production Build

```sh
npm run build
```
Output is generated in `dist/public/` (see `vite.config.ts`).

### Deployment
- **Netlify, Vercel, or Replit** are supported.
- See `replit.md` for Replit-specific instructions.

---

## 🔗 Path Aliases

- `@` → `client/src`
- `@shared` → `shared`
- `@assets` → `attached_assets`

---

## 🧑‍💻 Contributing

- Follow code style guidelines (ESLint, Prettier).
- Use TypeScript for all new code.
- Keep UI consistent with Maximally brand colors and playful style.
- Add new pages to routing in `App.tsx`.
- Document new components and pages.

---

## 📚 Documentation

- See `replit.md` for architecture, data flow, and deployment.
- Blog posts and guides are in `client/src/pages/blog/`.

---

## 🏆 Hackathon Pages

- **Project CodeGen:** Playful 48-hour hackathon.
- **Hacktober:** Month-long builder challenge.
- **AI Shipathon:** AI-focused hackathon.
- **Makeathon:** Startup simulation.

All hackathon pages are in `client/src/pages/`.

---

## 📄 License

See `LICENSE` file (if present).

---

## 💬 Support

For questions, open an issue or contact via the `/contact` page.

---

**Happy building! 🚀**
