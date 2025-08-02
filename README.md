#HTML
# Kori's Portfolio – HTML Structure

This is the main HTML file for the personal portfolio of **David Kori**, a passionate full-stack developer and computer science student based in Kilifi, Kenya.

## 🔍 Overview

The page showcases:
- An "About Me" section
- Programming languages and technologies used
- Educational background and certifications
- Personal interests and goals
- Featured projects
- Contact information with a working contact form

## 🧱 Structure

- **Header**: Navigation and brand logo.
- **Main content**:
  - About section with bio and experience
  - Programming languages and tools
  - Education and certifications
  - Interests and long-term goals
  - Projects with links and visuals
  - Contact section with contact form (Formspree integrated)
- **Footer**: Social media links and copyright

## 📨 Contact Form

- Integrated with **Formspree**
- Submits asynchronously (when JS is included)
- Accessible, responsive design

## ✅ Meta Features

- Responsive layout with `viewport` meta tag
- SEO-friendly metadata (`description`, `keywords`, `author`)
- Icons and logos via Devicon and Font Awesome
- Favicon and project images included from the `/media` folder


#CSS

# 💻 Portfolio Webpage with CSS-Only Loader

This is a responsive, single-page personal portfolio website built with **HTML and CSS only**. It includes a **CSS-only animated dot loader** that displays when the page loads and fades out after a few seconds. No JavaScript is used for the loader or transitions.

---

## 🎯 Features

- ✅ Pure HTML & CSS only — no JavaScript required
- 🎨 Visually rich and responsive layout
- 💫 Dot loader animation on page load
- 📱 Fully responsive navigation and layout for mobile and desktop
- 📚 Sections include: About Me, Languages & Tools, Education, Interests, Projects, Contact, and Footer
- 🌈 Aesthetic use of gradients, blur effects, and hover interactions

---

## 🚀 1. Loader Animation (Dot Loader)

### How it works

A minimal dot animation appears on initial page load and automatically disappears after `X` seconds using only CSS transitions.

### Example Structure

```html
<div class="loader-wrapper">
  <div class="loader">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
</div>


📁 Project Structure Overview
This CSS file styles various sections of the website and ensures full responsiveness across desktop, tablet, and mobile views.

🎨 Main Features & Design Concepts

✅ Global Styles
Centered and capitalized headings.

Span image alignment and clean link styles.

Elegant radial-gradient background.

Hidden horizontal scroll (overflow-x: hidden).


🧭 Header & Navigation
Fixed top navigation bar with logo.

Flexbox-based layout.

Responsive hamburger menu for small screens.


👤 About Me Section
Reversed flex layout for desktop.

Circular profile image with drop shadow.

Blurred card-like background with textual intro and CTA button.


🧰 Languages & Tools
Badges for skills and technologies using Flexbox.

Smooth hover effects.

Blurred and semi-transparent backgrounds for modern aesthetics.


🎓 Education
Card-based layout with highlighted entries.

Button for downloading/viewing CV.

Course list styled with rounded background.


💡 Interests
Grid-based layout with styled paragraphs and lists.

Full responsiveness with smart width constraints.


💻 Projects
Responsive card layout with hover scaling.

Subtle radial gradients in cards.

Spinning animation for music-related imagery.


📬 Contact Form
Flex-based contact form with custom styling.

Interactive form fields and styled submit button.

Icon-based contact links.


📎 Footer
Clean navigation links.

Social icons with circular styling.

Radial gradient footer background.


📱 Responsive Design
Fully mobile-friendly using media queries:

Custom layout for <840px, <1024px, and <600px.

Responsive typography, margins, and padding.

Mobile-friendly navigation and images.


📷 Visual Highlights
🎨 Modern design using radial gradients and blur effects.


✨ Smooth transitions on buttons, links, and cards.


🌀 Interactive animations, such as spinning music icon.


🧩 Modular and scalable layout with Flex and Grid.

