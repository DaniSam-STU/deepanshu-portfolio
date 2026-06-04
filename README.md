# 🚀 Deepanshu's Professional Cybersecurity Portfolio

A modern, minimalist React portfolio inspired by Voidfolio design. Built with React, Tailwind CSS, and Vite. Deployed on GitHub Pages.

## ✨ Features

- **Minimalist Design** - Clean, professional aesthetic inspired by Voidfolio
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Subtle fade-ins and scroll effects
- **Dark Theme** - Easy on the eyes, modern cybersecurity vibe
- **Fast Performance** - Built with Vite for lightning-fast load times
- **SEO Optimized** - Meta tags and structured data included
- **Easy to Customize** - All content in one component, easy to update

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful, consistent icons
- **GitHub Pages** - Free hosting

## 📋 Project Structure

```
deepanshu-portfolio/
├── src/
│   ├── Portfolio.jsx      # Main portfolio component
│   ├── App.jsx            # App wrapper
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── .gitignore            # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DaniSam-STU/deepanshu-portfolio.git
   cd deepanshu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Deployment to GitHub Pages

### Option 1: Using `gh-pages` (Recommended)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json** (already included)
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be live at: `https://DaniSam-STU.github.io/deepanshu-portfolio/`

### Option 2: Manual Deployment

1. Build the project
   ```bash
   npm run build
   ```

2. Push the `dist` folder to your repository
3. Configure GitHub Pages to deploy from `dist` folder

### Option 3: Vercel (Even Easier!)

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

3. Follow the prompts - your site will be live instantly!

## ✏️ Customization

### Update Your Information

Edit `src/Portfolio.jsx` and update the following sections:

1. **Hero Section** - Change name, title, description
2. **Projects Array** - Add/remove/edit your projects
3. **Experience Array** - Update work experience
4. **Skills Object** - Modify your technical skills
5. **Certifications Array** - Add your certifications
6. **Contact Links** - Update email, phone, LinkedIn, GitHub

### Example: Adding a New Project

```javascript
{
  title: "Your Project Title",
  description: "What you built and why",
  tech: ["Technology1", "Technology2", "Technology3"],
  impact: "Key achievement | Metric",
  github: "https://github.com/yourusername/project",
  date: "Month Year — Month Year"
}
```

### Change Colors

Modify the color classes in `src/Portfolio.jsx`:
- `bg-slate-950` → Background
- `text-blue-400` → Accent color
- `border-blue-500` → Border accents

For comprehensive Tailwind colors: [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔒 Security & Performance

- ✅ No external analytics (privacy-friendly)
- ✅ Optimized images and assets
- ✅ Fast load times (Vite optimization)
- ✅ Modern CSS features with fallbacks
- ✅ SEO-friendly structure

## 📊 SEO Optimization

- Meta tags for social media sharing
- Structured semantic HTML
- Mobile-friendly viewport
- Fast page load times
- Descriptive page title

## 🎨 Design Features

- **Smooth Animations** - Fade-in effects on page load
- **Hover States** - Interactive elements with transitions
- **Responsive Grid** - Adapts to all screen sizes
- **Typography** - Professional Inter font family
- **Dark Mode** - Built-in dark theme (great for cybersecurity aesthetic!)

## 🔧 Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you encounter any issues:
1. Check the [Vite Documentation](https://vitejs.dev/)
2. Check the [Tailwind Documentation](https://tailwindcss.com/)
3. Check the [React Documentation](https://react.dev/)

## 🎯 Next Steps After Deployment

1. ✅ Deploy to GitHub Pages / Vercel
2. ✅ Share your portfolio on LinkedIn
3. ✅ Add portfolio link to your resume
4. ✅ Share link with recruiters and in job applications
5. ✅ Keep it updated with new projects and achievements

---

**Created with ❤️ By DAani Sam**

Last Updated: 2026
