# Syed Qasim Ali — AI/ML Engineer Portfolio Website

A minimal, monochrome, futuristic, and editorial portfolio built for **Syed Qasim Ali**, AI/ML Engineer specializing in Computer Vision, Deep Learning, Affective Computing, and Multimodal AI systems.

---

## ⚡ Tech Stack

- **React 19** with **Vite**
- **Tailwind CSS v4** for clean, utility-first monochrome styling
- **Motion (Framer Motion v12)** for subtle entrance sequences, scroll reveals, and accordion transitions
- **Lucide React** for crisp, contextual vector icons
- **TypeScript** for strict type safety across all projects, services, and profile models

---

## 🚀 Getting Started

To run the application locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📂 Customization & Configuration Guide

All editable information is centralized in a single file: **`/src/data/portfolioData.ts`**. You do not need to modify multiple React components to update your portfolio.

### 1. Personal Information & Social Links
Open `/src/data/portfolioData.ts` and edit `PERSONAL_INFO`:
- `name`: Your full name
- `role`: Professional title
- `email`: Your primary contact email
- `githubUrl`: Your GitHub profile link
- `linkedinUrl`: Your LinkedIn profile URL
- `availabilityStatus`: Status badge text (e.g., "Available for Opportunities")
- `educationBadge`: Academic degree and institution

### 2. Portrait Image
To change your portrait photograph:
1. Save your photo into `/src/assets/images/`
2. Update the `portraitImage` field in `PERSONAL_INFO` inside `/src/data/portfolioData.ts`

### 3. Project Showcase & Thumbnails
In `/src/data/portfolioData.ts`, each project in `PROJECTS_DATA` contains:
- `title` & `subtitle`: Name of the AI project
- `category`: 'Machine Learning' | 'Deep Learning' | 'Computer Vision' | 'NLP' | 'Web Applications'
- `thumbnail`: Path to the project preview screenshot
- `tags`: Key frameworks (e.g. `["TensorFlow", "OpenCV", "FastAPI"]`)
- `metrics`: Quantitative benchmarks (e.g. `Val Accuracy: 92.8%`)
- `architecture`: Step-by-step breakdown rendered in the project modal
- `githubUrl`: Link to your source code repository
- `demoUrl`: Live deployment link (optional)

### 4. Resume / CV
- The interactive resume viewer (`ResumeModal.tsx`) renders your academic coursework, projects, skills, and certifications with an instant **"Print / Save PDF"** capability.
- You can also place an actual PDF file in `/public/resume-syed-qasim-ali.pdf` and link to it in `PERSONAL_INFO.resumePath`.

---

## ✅ Feature Checklist

- [x] **Hero Section (Section A)**: Centered white panel, outlined stroke typography ("SYED") paired with solid black ("QASIM"), live availability badge, studio portrait, mission bio, and direct action pills.
- [x] **Selected Work (Section B)**: 2-column grid, interactive category filtering (All, Deep Learning, Computer Vision, Machine Learning, NLP), image hover zoom with circular arrow button, and full-screen project architecture modal.
- [x] **Capabilities / What I Do (Section C)**: 4 expandable accordion rows with smooth animations, dark-charcoal expanded state, technical deliverables, and skill chips.
- [x] **About Me & Skills (Section D)**: Academic background at NUML, 5 domain skill categories with detailed focus areas, and comprehensive tech stack index.
- [x] **Journey & Trajectory (Section E)**: High-contrast dark charcoal panel with chronological vertical timeline for education, research capstone, and certifications.
- [x] **Contact & Form (Section F)**: Functional contact form with client-side validation, project domain selector, status indicators, and direct email fallback.
- [x] **Responsive Layout**: Fluid breakpoints tested across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px).
- [x] **Accessibility**: High contrast monochrome palette, clean keyboard navigation, `aria-*` tags, and zero-pill clean typographic metadata.
