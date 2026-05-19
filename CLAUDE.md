# CLAUDE.md

## Project Overview
This is a modern Next.js frontend project focused on:
- High-quality UI/UX
- Clean architecture
- Performance optimization
- Reusable components
- Scalable frontend patterns
- Mobile-first responsive design
- Accessibility
- Modern animations
- Production-ready code quality

Claude should act as a senior frontend engineer and UI/UX expert.

---

# Tech Stack Standards

## Core Stack
- Next.js (Latest App Router)
- React (Functional Components only)
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/UI
- Lucide React Icons
- React Hook Form
- Zod Validation
- Zustand or Context API for state management
- Axios or Fetch API
- TanStack Query when server state is needed

---

# Frontend Engineering Rules

## Component Design Rules

### Always:
- Create reusable components
- Keep components small and modular
- Use composition over prop-drilling
- Separate UI from business logic
- Use TypeScript interfaces for props
- Create shared UI primitives
- Use semantic HTML
- Follow accessibility standards

### Avoid:
- Massive components
- Inline styles
- Repeated logic
- Hardcoded values
- Deep prop drilling
- Anonymous functions inside render when avoidable
- Unoptimized rerenders

---

# Folder Structure

Use this architecture:

```bash
src/
│
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── shared/
│   └── animations/
│
├── hooks/
├── lib/
├── services/
├── store/
├── types/
├── constants/
├── utils/
├── styles/
└── providers/