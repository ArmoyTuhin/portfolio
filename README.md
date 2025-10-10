# Tuhin's Portfolio - Black Sci-Fi Theme 🚀

A modern, cyberpunk-themed portfolio website featuring animated terminal, 3D elements, and automatic GitHub Pages deployment.

## 🌐 Live Site
**https://armoytuhin.github.io/portfolio/**

## ✨ Features

- 🎨 **Black Sci-Fi/Cyberpunk Theme** - Dark theme with neon cyan accents
- 💻 **Animated Linux Terminal** - Live typing animation in hero section
- 🎯 **Vertical Navigation** - Smooth scrolling with fixed sidebar navigation
- 🔷 **3D Elements** - Three.js integration for visual effects
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🚀 **Automatic Deployment** - Push to main, auto-deploys to GitHub Pages
- 👁️ **Profile View Counter** - Track visitor counts
- 📄 **CV Download** - Direct download and view options

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **React Router** - Navigation
- **Lucide React** - Icon library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone git@github.com:ArmoyTuhin/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📝 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

Every push to the `main` branch automatically deploys to GitHub Pages!

#### Method 1: Using the Deploy Script
```bash
# Make your changes, then run:
./deploy.sh
```

#### Method 2: Manual Git Commands
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will:
1. Build your React app
2. Deploy to GitHub Pages
3. Make it live at https://armoytuhin.github.io/portfolio/

### Monitor Deployments
Check deployment status: **https://github.com/ArmoyTuhin/portfolio/actions**

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── public/
│   ├── Tuhin_Chowdhury_CV.pdf
│   └── Tribal_Clothing_Research_Paper.pdf
├── src/
│   ├── components/
│   │   ├── 3D/              # Three.js components
│   │   ├── TerminalTyping.jsx
│   │   ├── Navigation.jsx
│   │   └── ...
│   ├── pages/
│   │   └── SinglePagePortfolio.jsx
│   ├── App.jsx
│   └── main.jsx
├── deploy.sh                # Quick deployment script
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information
Edit `src/pages/SinglePagePortfolio.jsx`:
- Profile image
- Name and title
- Social media links
- Education details
- Projects, skills, etc.

### Change Theme Colors
Edit `src/index.css`:
- Primary cyan: `#00d9ff`
- Background: `#000000`
- Secondary: `#0f0f23`

### Update Terminal Messages
Edit the terminal messages in `src/pages/SinglePagePortfolio.jsx`:
```javascript
const messages = [
  "Initializing system...",
  "Your custom message here...",
];
```

## 📋 GitHub Pages Setup

1. Go to: https://github.com/ArmoyTuhin/portfolio/settings/pages
2. **Source:** Select **"GitHub Actions"**
3. Click **Save**

That's it! Your portfolio will deploy automatically on every push to main.

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Deployment Issues
- Check GitHub Actions logs: https://github.com/ArmoyTuhin/portfolio/actions
- Ensure GitHub Pages is enabled with "GitHub Actions" as source
- Verify base path in `vite.config.js` is set to `/portfolio/`

### SSH Authentication
If you have SSH issues:
```bash
# Check SSH keys
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: https://github.com/settings/keys
```

## 📊 Performance

- Optimized chunk splitting for faster loads
- Lazy loading for images
- Code splitting with React.lazy
- Compressed assets

## 📄 License

This portfolio is personal property. Feel free to use the structure as inspiration for your own portfolio!

## 📧 Contact

**Tuhin Chowdhury**
- Email: tuhin.sec@gmail.com
- LinkedIn: [linkedin.com/in/tuhinsec](https://www.linkedin.com/in/tuhinsec/)
- GitHub: [@ArmoyTuhin](https://github.com/ArmoyTuhin)
- Google Scholar: [Profile](https://scholar.google.com/citations?hl=en&user=nXVEk7wAAAAJ)

---

Made with ❤️ and AI with one cup of ☕

