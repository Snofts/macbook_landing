# MacBook Product Landing Page

A modern, interactive **MacBook-style product landing page** built with **Tailwind CSS v4**, **GSAP**, and **Three.js**, focused on smooth animations, immersive 3D visuals, and a premium Apple-inspired user experience.

🔗 **Live Demo:**  
https://macbook-landing-flax.vercel.app/

---

## 📸 Overview

This project recreates the feel of Apple’s product landing pages by combining clean typography, motion-driven storytelling, and interactive 3D visuals.

The goal of the project was to build a **high-end frontend experience** that feels smooth, modern, and production-ready across all screen sizes.

---

## 🚀 Features

- Fully responsive design (mobile → desktop)
- Tailwind CSS v4 (CSS-first architecture)
- GSAP-powered animations
  - Scroll-based animations
  - Smooth transitions and element reveals
- Three.js integration
  - Interactive 3D product rendering
  - WebGL canvas integration
- Custom fonts via `@font-face`
- Reusable utilities using `@utility`
- Component-based styling with `@layer components`
- Optimized performance and smooth interactions
- Deployed on Vercel

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS v4  
- JavaScript (ES6+)  
- GSAP (GreenSock Animation Platform)  
- Three.js  
- Vercel (Deployment)

---

## 📁 Project Structure

```

├── public/
│   ├── fonts/
│   ├── images/
│   └── videos/
│
├── src/
│   ├── styles.css     # Tailwind + custom utilities
│   ├── main.js        # GSAP animations & logic
│   ├── three.js       # Three.js scene setup
│   └── index.html
│
├── tailwind.css       # Tailwind entry file
├── package.json
└── README.md

````

---

## 🎨 Styling Architecture (Tailwind v4)

This project uses **Tailwind CSS v4 with a CSS-first approach**, minimizing configuration and keeping styles scalable.

Key concepts used:
- `@theme` for design tokens (fonts, colors, breakpoints)
- `@utility` for reusable layout helpers
- `@layer components` for structured component styles
- Arbitrary values for fine-grained layout control
- Custom breakpoints for precise mobile design

Example:
```css
@utility flex-center {
  @apply flex items-center justify-center;
}
````

---

## 🎞️ Animations (GSAP)

GSAP is used to:

* Animate sections on scroll
* Control opacity, transforms, and timing
* Create smooth, cinematic transitions
* Enhance user experience without impacting performance

Animations are structured to be responsive and maintainable.

---

## 🧊 3D Rendering (Three.js)

Three.js is used to:

* Render interactive 3D product visuals
* Manage camera, lighting, and materials
* Integrate WebGL content seamlessly into the UI
* Maintain responsiveness across screen sizes

The 3D canvas adapts to layout changes and works alongside GSAP animations.

---

## 📱 Responsiveness

The layout adapts smoothly across:

* Small mobile devices (≤ 480px)
* Tablets
* Large screens and ultra-wide displays

The project follows a mobile-first approach with adaptive typography and spacing.

---

## ⚙️ Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/macbook-landing-page.git
```

### 2. Navigate into the project

```bash
cd macbook-landing-page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

---

## 📦 Deployment

This project is deployed using **Vercel**.

Deployment steps:

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Deploy using default settings

---

## 🧠 What This Project Demonstrates

* Advanced frontend UI/UX engineering
* Practical use of GSAP for animation systems
* Real-world Three.js integration
* Clean and scalable CSS architecture
* Strong responsive design skills
* Attention to performance and detail

---

## 🔮 Possible Improvements

* Add GSAP ScrollTrigger timelines
* Improve accessibility (ARIA roles, focus states)
* Further optimize 3D assets
* Add loading states for 3D scenes
* Improve SEO metadata

---

## 🙌 Acknowledgements

* Design inspiration from Apple product pages
* Built with Tailwind CSS, GSAP, and Three.js
* Hosted on Vercel

---

## 📄 License

This project is for **educational and portfolio purposes** only.
All product names, trademarks, and branding belong to their respective owners.


