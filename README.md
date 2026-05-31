# Anchitya - Linux & Cloud Infrastructure Portfolio

A professional portfolio website showcasing infrastructure expertise with light and dark theme support.

## 🎯 Overview

This is a responsive portfolio website for **Anchitya**, a Linux & Cloud Infrastructure Analyst with 3.5+ years of experience in:
- Cloud Infrastructure (AWS, Azure, GCP)
- Virtualization (VMware VCP-VCF, KVM)
- Linux/RHEL Administration
- Infrastructure Automation (Ansible, Prometheus, Grafana)
- DevOps and SRE Practices

## ✨ Features

### 🌓 Theme System
- **Light Theme**: Professional blue colors with clean white backgrounds
- **Dark Theme**: Stunning cyan accents with deep dark backgrounds
- **Auto-Save**: Theme preference saved to browser localStorage
- **Smooth Transitions**: Seamless 0.3s CSS transitions
- **Toggle Button**: Floating button in bottom-right corner (moon/sun icons)

### Modern Design
- Fully responsive layout (mobile, tablet, desktop)
- Smooth animations and scroll effects
- Professional gradient accents
- Interactive elements and hover states

### Key Sections
- **Hero**: Professional introduction with certifications
- **About**: Detailed professional summary with key statistics (3.5+ years, 250+ VMs, 60%+ efficiency)
- **Experience**: Interactive timeline with 4 positions
  - Analyst I Infrastructure Services (DXC Technology, Current)
  - Analyst II Infrastructure Services (DXC Technology)
  - Associate Professional Software Engineer (DXC Technology)
  - Technical Trainee (GAOTek Inc.)
- **Skills**: Organized by categories
  - Cloud Platforms: GCP, AWS, Azure
  - Virtualization: VMware VCP-VCF, KVM, Linux, RHEL
  - DevOps: Ansible, Prometheus, Grafana, IaC
  - Languages: English, Hindi
- **Certifications**: 8 professional certifications and 5 awards
- **Education**: SMIT (BTech CSE, 2018-2022)
- **Contact**: Email, location, LinkedIn integration

### Interactive Features
- 🎯 Smooth scroll navigation with active link highlighting
- 🎬 Scroll animations using Intersection Observer API
- 📊 Animated skill bars and stat counters
- 📱 Mobile hamburger menu
- 💬 Contact form with validation
- ⏱️ Timeline visualization for experience
- 🌓 Light/Dark theme toggle with persistence

## 📁 File Structure

```
portfolio/
├── index.html       # Main HTML with all sections
├── styles.css       # Responsive styling with theme variables
├── script.js        # Interactivity, animations, and theme toggle
└── README.md        # Documentation (this file)
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/anchitya/portfolio.git
cd portfolio
```

### 2. Open in Browser
- **Option A**: Double-click `index.html`
- **Option B**: Use a local server
  ```bash
  python -m http.server 8000
  # Visit http://localhost:8000
  ```

### 3. Deploy to GitHub Pages
1. Push code to GitHub
2. Go to Repository **Settings**
3. Navigate to **Pages** section
4. Select **main** branch as source
5. Access at: `https://anchitya.github.io/portfolio`

## 🎨 Theme Toggle

### How It Works
1. **Click** the floating button in bottom-right corner
2. **Icon changes** from moon ☀️ to sun 🌙 (or vice versa)
3. **Theme switches** instantly with smooth animation
4. **Preference saved** to browser localStorage
5. **Persists** across browser sessions

### Available Themes

**Light Theme (Default)**
```css
--primary-color: #0066cc;
--text-dark: #2d3748;
--bg-dark: #ffffff;
--bg-card: #f7fafc;
--border-color: #e2e8f0;
```

**Dark Theme**
```css
--primary-color: #00d4ff;
--text-dark: #e0e0e0;
--bg-dark: #0f1419;
--bg-card: #1a1f2e;
--border-color: #2a3f5f;
```

## 🛠️ Customization

### Update Personal Information

**Edit `index.html`:**
1. **Hero Section**
   ```html
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   ```

2. **About Section**
   - Update professional summary
   - Modify statistics (Years, Projects, Achievements)
   - Change social media links

3. **Experience Section**
   - Add/remove job positions
   - Update company names, dates, locations
   - Modify job descriptions

4. **Skills Section**
   - Update skill names and categories
   - Adjust proficiency percentages (0-100%)

5. **Contact Information**
   - Update email and phone
   - Change LinkedIn profile URL
   - Modify location

### Change Colors

**Edit `styles.css` Root Variables:**

For Light Theme:
```css
:root {
    --primary-color: #0066cc;      /* Main color */
    --secondary-color: #004a99;    /* Accent */
    --text-dark: #2d3748;          /* Text */
    --bg-dark: #ffffff;            /* Background */
    --accent-green: #28a745;       /* Highlights */
}
```

For Dark Theme:
```css
:root[data-theme="dark"] {
    --primary-color: #00d4ff;      /* Cyan */
    --secondary-color: #0099cc;    /* Blue */
    --text-dark: #e0e0e0;          /* Light text */
    --bg-dark: #0f1419;            /* Deep dark */
    --accent-green: #00ff88;       /* Neon green */
}
```

## 💻 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Zero Dependencies**: Pure HTML, CSS, JavaScript
- **Small Size**: ~50KB total
- **Fast Load**: Optimized animations with GPU acceleration
- **Responsive**: Mobile-first design approach
- **Accessible**: Semantic HTML and ARIA attributes

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations, media queries
- **JavaScript (Vanilla)**: No frameworks or libraries
- **Font Awesome**: Icon library (CDN)
- **localStorage**: Theme persistence

## 📋 Professional Content

### Current Role
- **Analyst I Infrastructure Services** at DXC Technology
- Location: Bengaluru
- Focus: Mission-critical server solutions, SAN migrations, infrastructure deployment
- Achievements: 2000+ servers migrated, 6 data centers managed

### Key Achievements
- 250+ VMs successfully migrated across 3 data centers
- 60%+ operational efficiency improvements
- 125k+ migration instructions executed
- Zero unplanned downtime maintained

### Certifications
- VCP-VCF Certified (VMware)
- AWS Certified (1x)
- Azure Certified (3x: AZ-104, AZ-900, 2V0-11-25)
- Multiple professional development certifications

### Awards & Recognition
- DXC Champs Award
- Champion Collaborators Award
- Sapphire Award
- Multiple excellence and delivery recognitions

## 📧 Contact

- **Email**: anchitya@hotmail.com
- **LinkedIn**: [linkedin.com/in/anchitya](https://www.linkedin.com/in/anchitya/)
- **Location**: Delhi, India

## 📝 Contact Form

The contact form currently logs to console. To enable email functionality:

### Option 1: Formspree (Recommended)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
- Integrate EmailJS API
- Add library reference to HTML

### Option 3: Backend Solution
- Set up Node.js/Python backend
- Handle form submissions server-side

## 🎓 Education

**Sikkim Manipal Institute of Technology**
- Bachelor of Technology (BTech)
- Computer Science
- 2018 - 2022

## 🚀 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Project showcase with detailed case studies
- [ ] Speaking engagements and conferences section
- [ ] Resume PDF download
- [ ] Newsletter subscription
- [ ] Video testimonials
- [ ] Dark/Light theme switcher in navbar
- [ ] Multiple language support
- [ ] Performance metrics dashboard

## 📄 License

Free to use and modify for personal purposes.

## 💡 Support & Questions

For questions or improvements:
- **Email**: anchitya@hotmail.com
- **LinkedIn**: [linkedin.com/in/anchitya](https://www.linkedin.com/in/anchitya/)

---

## 📊 Theme Toggle Implementation Details

### JavaScript Theme Management
```javascript
// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
```

### CSS Theme Application
```css
/* Light theme (default) */
:root {
    --primary-color: #0066cc;
    /* ... */
}

/* Dark theme */
:root[data-theme="dark"] {
    --primary-color: #00d4ff;
    /* ... */
}
```

---

**Built with ❤️ for infrastructure professionals**

Happy exploring! 🚀

Version: 1.0.0 | Last Updated: May 31, 2026
