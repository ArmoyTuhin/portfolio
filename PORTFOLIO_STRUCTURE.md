# Academic Portfolio - Multi-Page Structure

## Overview
This portfolio has been restructured into a **multi-page, research-friendly academic portfolio** designed specifically for professors and academic institutions. The design emphasizes clarity, professionalism, and easy navigation with a mechanical/monospace font aesthetic.

## Key Features

### ✅ Multi-Page Navigation
- **Home Page** - Introduction, research interests, and quick stats
- **Research Page** - Publications, conferences, and competitive programming
- **Projects Page** - Professional projects with detailed descriptions
- **Teaching Page** - Teaching experience, mentorship, and leadership
- **Contact Page** - Contact information and collaboration opportunities

### ✅ Typography
- **Mechanical Fonts**: Roboto Mono & IBM Plex Mono
- Professional, academic appearance
- Excellent readability for technical content
- Monospace aesthetic for code-focused presentation

### ✅ Research-Focused Content
- Detailed publication information with DOI references
- Conference presentations and participations
- Research interests clearly highlighted
- Academic achievements prominently displayed

### ✅ Professional Design
- Clean, minimalist layout
- Consistent spacing and typography
- Responsive design for all devices
- Smooth animations and transitions
- Professional color scheme

## Page Structure

### 1. Home Page (`/`)
- Hero section with portrait and introduction
- Research interests grid (6 key areas)
- Quick statistics (publications, projects, experience, mentorship)
- Call-to-action buttons to Research and Projects

### 2. Research Page (`/research`)
- **Published Research Section**
  - BLDAR: Ensemble Learning for Energy Analytics (Springer 2025)
  - Tribal Clothing Classification using CNNs (IEEE 2022)
- **Conference Presentations**
  - IEEE CS Bangladesh Chapter Symposium (2024)
  - ICERECT IEEE Conference (2022)
- **Competitive Programming & Hackathons**
  - Facebook Developer Circles Challenge (Top 20)
  - ICPC Intra University Selection (Top 50/900)
  - Leading University National Contest

### 3. Projects Page (`/projects`)
- **AI-Driven Hospital Management System** (MHM, Houston, TX)
- **Church Census Records Archiving** (Family Search, Utah)
- **Invoice Data Extraction** (OCR + LLM)
- **Satellite Billing System** (Bangladesh Satellite Corporation)

Each project includes:
- Client information
- Detailed description
- Key achievements
- Technical challenges
- Technologies used
- Category filtering

### 4. Teaching Page (`/teaching`)
- **Teaching Experience**
  - Java & Data Structures Instructor (2022-Present)
  - Mathematics & Physics Instructor (2018-2022)
- **Leadership & Extracurricular**
  - General Secretary - Computer Society
  - Campus Director - Bohubrihi EdTech
  - VP & Instructor - SECPA Photography Club
  - Founding Campus Director - HULT Prize
- **Teaching Philosophy**

### 5. Contact Page (`/contact`)
- Contact information (Email, Phone, Location)
- Social media links (LinkedIn, GitHub)
- Contact form
- Research collaboration opportunities

## Technical Stack

- **React 19** - UI framework
- **React Router DOM 7.6.1** - Multi-page navigation
- **Framer Motion** - Smooth animations
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## Running the Portfolio

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm build
```

## Navigation Structure

```
/                    → Home Page
/research            → Research & Publications
/projects            → Professional Projects
/teaching            → Teaching & Mentorship
/contact             → Contact Information
```

## Design Principles

1. **Academic Focus**: Content structured for academic audiences
2. **Clarity**: Clear hierarchy and organization
3. **Professionalism**: Formal tone and presentation
4. **Accessibility**: Easy navigation and readable fonts
5. **Responsiveness**: Works on all device sizes

## Font Usage

- **Primary Font**: Roboto Mono (mechanical, clean)
- **Secondary Font**: IBM Plex Mono (fallback)
- **Fallback**: Courier New, monospace
- **Weight Range**: 300-700 for various emphasis levels

## Color Scheme

- **Background**: Clean, light background
- **Foreground**: High contrast text
- **Secondary**: Subtle backgrounds for cards
- **Borders**: Minimal, professional borders
- **Accents**: Used sparingly for emphasis

## Key Components

- `Navigation.jsx` - Sticky navigation bar with active states
- `HomePage.jsx` - Landing page with research interests
- `ResearchPage.jsx` - Publications and academic work
- `ProjectsPage.jsx` - Professional project showcase
- `TeachingPage.jsx` - Teaching experience and philosophy
- `ContactPage.jsx` - Contact form and information
- `Footer.jsx` - Footer with copyright information

## Future Enhancements

- [ ] Add project images/screenshots
- [ ] Implement contact form backend
- [ ] Add PDF CV download
- [ ] Add dark mode toggle
- [ ] Add blog/articles section
- [ ] Add Google Scholar integration
- [ ] Add publication citation counts

## Notes for Professors

This portfolio is designed to:
- Showcase research capabilities and publications
- Demonstrate technical expertise through projects
- Highlight teaching and mentorship experience
- Provide easy contact for collaboration opportunities
- Present information in an academic, professional manner

The multi-page structure allows professors to quickly navigate to relevant sections without scrolling through a long single-page layout.

