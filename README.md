
# Maximally Website

A modern, pixel-art inspired educational platform built with React and Vite. The website combines retro gaming aesthetics with modern web technologies to create an engaging experience for teens learning tech and entrepreneurship skills.

## 🚀 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom animations
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Charts**: Recharts
- **Deployment**: Replit

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── ...            # Custom components (Navbar, Footer, etc.)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
│   ├── BlogPost/      # Blog post pages
│   └── ...            # Main site pages
└── styles/            # Global styles and Tailwind config
```

## 🎨 Key Features

- **Pixel Art Theme**: Custom animations and UI elements inspired by retro gaming
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Interactive Elements**: Animated components using Framer Motion
- **Modern UI**: shadcn/ui components with custom styling
- **Blog System**: Dynamic blog posts with SEO optimization
- **Form Integration**: Tally.so forms integration

## 🔧 Main Components

- `components/Navbar.tsx`: Main navigation with responsive menu
- `components/Footer.tsx`: Site-wide footer with links and social media
- `components/Hero.tsx`: Landing page hero section
- `components/SkillTracks.tsx`: Educational tracks display
- `pages/Index.tsx`: Homepage with main content sections
- `pages/BlogPost/*.tsx`: Individual blog post components

## 🎯 Special Features

- Custom pixel borders and retro-style buttons
- Interactive hover effects and animations
- Responsive grid layouts for different screen sizes
- SEO optimization with meta tags
- WhatsApp integration for communication

## 🚀 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the site at `http://localhost:8081`

## 🛠️ Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## 🎨 Styling System

The project uses a combination of:
- Tailwind CSS for utility classes
- Custom CSS animations
- shadcn/ui for component styling
- Custom pixel art inspired designs

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1400px

## 🔒 Environment Variables

The project uses environment variables for:
- API endpoints
- External service configurations
- Feature flags

## 📦 Dependencies

Key dependencies include:
- react-router-dom for routing
- framer-motion for animations
- lucide-react for icons
- recharts for data visualization
- react-hook-form for form handling

For a complete list, check `package.json`.
