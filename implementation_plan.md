# Gym Website for "Fat2Fit" - Implementation Plan

This plan outlines the creation of a premium, highly responsive single-page web application for the "Fat2Fit" gym. To provide an outstanding visual experience, we will implement a sleek dark mode theme with energetic orange-gold accents, modern typography, glassmorphism elements, and fully functioning interactive components (including a BMI calculator and filterable gallery).

We will generate realistic gym and trainer images using the `generate_image` tool to deliver a complete, high-fidelity experience from day one.

## Proposed Changes

### [HTML, CSS, JS Foundation]

We will create a clean and structured static website in the workspace root.

#### [NEW] [index.html](file:///Users/vidusiniabesekara/fat2fit/index.html)
The entry point of the website. It will contain:
- **Navigation Bar**: Sticky, blur-background (glassmorphism) header with navigation links and a Call-To-Action (CTA) button.
- **Hero Section**: Catchy fitness tagline, background image, dynamic text fade-in, and CTA buttons ("Get Started", "View Schedule").
- **Facilities Gallery**: Interactive filter categories (All, Strength, Cardio, Studio) displaying high-quality facility images in a responsive grid.
- **Trainers Section**: High-quality trainer profiles showcasing their expertise, certifications, and social links with hover animations.
- **Interactive BMI Calculator**: A client-side calculator where users can input height/weight and get feedback on their BMI and weight category, styled with a dial/progress bar.
- **Client Reviews**: An interactive slider/carousel featuring reviews, ratings, and client transformation comments.
- **Contact Us**: Section featuring contact details (address, phone, email), hours of operation, an embedded custom styled map mockup, and a fully validation-supported contact form.
- **Footer**: Branding, quick links, and social icon integrations.

#### [NEW] [style.css](file:///Users/vidusiniabesekara/fat2fit/style.css)
The style definitions:
- **Design System Tokens**: Custom CSS variables for color palette (charcoal background, premium gold/orange `#ff6b00` and `#ffa000` accents, light gray texts, glassmorphism gradients), typography (using Google Font `Outfit` or `Inter`), grid layout, and spacing.
- **Animations**: Page fade-ins, card hover elevations, border-glow transitions, slider slide-effects.
- **Responsiveness**: Mobile-first media queries to support desktop, tablet, and mobile screens seamlessly.

#### [NEW] [app.js](file:///Users/vidusiniabesekara/fat2fit/app.js)
The logic container:
- **Mobile Menu**: Toggle for burger-menu.
- **Facilities Filter**: Logic to filter gallery cards with smooth fade animations.
- **BMI Calculator**: Function to compute BMI (`weight / (height^2)`) and display interactive feedback based on the result.
- **Reviews Carousel**: Sliding carousel logic with auto-play and manual navigation (prev/next dots).
- **Contact Form Handler**: Validates user inputs, simulates sending, and displays a premium success toast message.

---

### [Assets & Media]

We will create an `assets` directory to store premium, generated fitness imagery.

#### [NEW] [hero.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/hero.jpg)
High-quality hero banner image showing a modern, high-tech gym setting with ambient lighting.
#### [NEW] [facility-cardio.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/facility-cardio.jpg)
Cardio zone with modern treadmills, ellipticals, and neon accents.
#### [NEW] [facility-strength.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/facility-strength.jpg)
Strength training section with high-end racks, barbells, and free weights.
#### [NEW] [facility-studio.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/facility-studio.jpg)
Yoga/Pilates studio with soft natural light, mats, and wooden floors.
#### [NEW] [trainer-1.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/trainer-1.jpg)
Professional profile picture of a head trainer (male, athletic build, friendly smile).
#### [NEW] [trainer-2.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/trainer-2.jpg)
Professional profile picture of a yoga/strength coach (female, energetic posture).
#### [NEW] [trainer-3.jpg](file:///Users/vidusiniabesekara/fat2fit/assets/trainer-3.jpg)
Professional profile picture of a nutrition/conditioning coach (male/female).

---

## Verification Plan

### Automated/Tool Verification
- Run a static file server to host the page locally and use the **Browser Subagent** tool to interactively test:
  1. Responsive breakpoints (Mobile, Tablet, Desktop)
  2. Mobile menu toggle functioning
  3. Facilities filter buttons (Cardio, Strength, Studio)
  4. BMI Calculator validation and calculations
  5. Reviews slider navigation
  6. Contact form validation, submit logic, and success toast
- Capture a recording/screenshot of the finalized website to ensure the aesthetics match a high-premium, professional standard.

### Manual Verification
- We will provide clean, well-commented code, making it extremely easy for the user to double-click `index.html` or host it on any static hosting provider.
