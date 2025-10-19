<div align="center">

![Banner](public/assets/comfortPG.png)

![GitHub contributors](https://img.shields.io/github/contributors/codewithdhruba01/ComfortPG_Website?color=lightgrey)
[![GitHub forks](https://img.shields.io/github/forks/codewithdhruba01/ComfortPG_Website?color=lightgrey)](https://github.com/codewithdhruba01/ComfortPG_Website/network)
[![GitHub stars](https://img.shields.io/github/stars/codewithdhruba01/ComfortPG_Website?color=lightgrey)](https://github.com/codewithdhruba01/ComfortPG_Website/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/codewithdhruba01/ComfortPG_Website?color=lightgrey)](https://github.com/codewithdhruba01/ComfortPG_Website/issues)
[![Apache-2.0 License](https://img.shields.io/badge/Apache-2.0license-lightgrey)](./LICENSE)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)


</div>

# ComfortPG - Complete PG Website with Room Booking System

A modern, responsive PG (Paying Guest) accommodation website built with React, TypeScript, and Tailwind CSS. This comprehensive platform provides a complete solution for PG businesses to showcase their properties, manage bookings, and connect with potential residents.

## CONTENTS OF THE FILE
- [Overview](#comfortpg---complete-pg-website-with-room-booking-system)
- [Features](#-features)
- [Configuration](#-configuration)
- [Installation](#-installation)
- [Contributing](#-contributing)
- [License](#-license)
- [Contributing](#-contributing)
- [Tech Stack](#️-tech-stack)
- [Room Management](#room-management)
- [Home Page](#home-page)
- [Additional Pages](#additional-pages)
- [Project Structure](#-project-structure)
- [Animations & Interactions](#animations--interactions)
- [links](#links)
- [Deployment](#-deployment)
- [Acknowledgments](#-acknowledgments)

## 🌟 Features

### Core Functionality
- **Multi-page Website**: Home, Rooms, About, Contact, Privacy Policy, Terms & Conditions, Funding Information, Partner Us, and FAQ pages
- **Room Booking System**: Complete room listing, search, filtering, and detailed room pages
- **Dark/Light Mode**: Seamless theme switching with persistent storage
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive UI**: Smooth animations and micro-interactions using Framer Motion

### Home Page
- **Hero Section**: Beautiful background with room images and call-to-action
- **Statistics Section**: Key metrics and achievements
- **Features Showcase**: Why choose ComfortPG with interactive cards
- **Featured Rooms**: Highlighted accommodations with quick access
- **Testimonials**: Customer reviews and ratings
- **Newsletter Signup**: Email subscription functionality

### Room Management
- **Advanced Search**: Real-time search with filters
- **Category Filtering**: Single, Double, Shared, Deluxe, AC, Non-AC rooms
- **Price Range Filter**: Adjustable price filtering
- **Room Cards**: Interactive cards with hover effects
- **Detailed Room Pages**: 
  - Image gallery with navigation
  - Full room descriptions
  - Amenities list with icons
  - Booking and cart functionality
  - Contact information

### Additional Pages
- **About Page**: Company story, team, values, and achievements
- **Contact Page**: Contact form, location map, and business hours
- **Privacy Policy**: Comprehensive privacy information
- **Terms & Conditions**: Legal terms and conditions
- **Funding Information**: Investment details and funding timeline
- **Partner Us**: Partnership opportunities and application form
- **FAQ**: Searchable frequently asked questions

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript 5.5.3**: Type-safe development
- **Vite 5.4.2**: Fast build tool and development server

### Development Tools
- **ESLint 9.9.1**: Code linting
- **TypeScript ESLint 8.3.0**: TypeScript-specific linting rules
- **Vite Plugin React 4.3.1**: React support for Vite

### Build & Development
- **Node.js**: Runtime environment
- **npm**: Package manager

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithdhruba01/ComfortPG_Website.git
   cd ComfortPG_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The website will automatically reload when you make changes

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   - Upload the `dist` folder to your web server
   - Or use services like Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar with logo and menu
│   ├── Footer.tsx      # Footer with links and contact info
│   └── RoomCard.tsx    # Room listing card component
├── context/            # React context providers
│   └── ThemeContext.tsx # Dark/light mode management
├── data/               # Static data and configurations
│   └── rooms.ts        # Room data and categories
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Rooms.tsx       # Room listings with search
│   ├── RoomDetail.tsx  # Individual room details
│   ├── About.tsx       # About company page
│   ├── Contact.tsx     # Contact form and info
│   ├── PrivacyPolicy.tsx # Privacy policy
│   ├── Terms.tsx       # Terms and conditions
│   ├── Funding.tsx     # Funding information
│   ├── Partner.tsx     # Partnership page
│   └── FAQ.tsx         # Frequently asked questions
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```


## 🚀 Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Auto-deploy on push
3. Environment variables configuration


## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Make changes and test
4. Commit: `git commit -m "Add new feature"`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test on multiple devices

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENS](./LICENSE) file for details.

## Links

For support and questions:
- **GitHub**: [Follow More](https://github.com/codewithdhruba01)
- **Website**: [ComfortPG](https://comfort-pg.vercel.app)

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons
- **Pexels**: For high-quality stock images

---

**Made with ❤️ Dhrubaraj Pati**
