# Harikrishnan Girikumar - Data Scientist Portfolio

A modern, responsive portfolio website showcasing data science expertise, work experience, and key projects.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices (desktop, tablet, mobile)
- **Interactive Navigation**: Fixed navigation bar with smooth scrolling and active section highlighting
- **Animated Elements**: Scroll-triggered animations for enhanced user experience
- **Contact Form**: Functional contact form with validation and notification system
- **Project Showcase**: Detailed project cards highlighting key achievements
- **Skills Display**: Organized technical skills by category with interactive tags
- **Timeline**: Professional experience displayed in an elegant timeline format
- **Performance Optimized**: Fast loading with optimized assets and lazy loading

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Getting Started

1. **Clone or Download**: Get the portfolio files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Customize Content**: Edit the HTML file to update your information
4. **Deploy**: Upload to any web hosting service

## Customization Guide

### Personal Information

Edit the following sections in `index.html`:

1. **Hero Section**: Update name, title, and contact information
2. **About Section**: Modify the summary and highlight items
3. **Experience Section**: Add/remove timeline items for work history
4. **Projects Section**: Update project cards with your own projects
5. **Skills Section**: Modify skill categories and tags
6. **Contact Section**: Update contact details

### Design Customization

#### Colors
The website uses a blue-purple gradient theme. To change colors, update these CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--secondary-color: #764ba2;
--gradient-start: #667eea;
--gradient-end: #764ba2;
```

#### Fonts
The site uses Inter font from Google Fonts. To change fonts, update the import in the HTML head:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Layout
- Modify section padding in `styles.css` under `section { padding: 80px 0; }`
- Adjust container max-width: `.container { max-width: 1200px; }`
- Change grid layouts for different screen sizes in the responsive sections

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu to include new section
4. Add scroll animation classes if desired

### Adding Images

1. Create an `images/` folder
2. Add your images to the folder
3. Update image sources in HTML
4. For lazy loading, use `data-src` attribute instead of `src`

Example:
```html
<img data-src="images/profile.jpg" alt="Profile Picture" class="lazy">
```

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your site will be automatically deployed with a custom URL
3. Connect to GitHub for automatic updates

### Vercel
1. Upload to [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployment with custom domain options

### Traditional Web Hosting
1. Upload files via FTP to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be available at your domain

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Image Optimization**: Compress images before adding them
2. **CDN**: Use CDN links for external libraries (already implemented)
3. **Caching**: Enable browser caching on your server
4. **Minification**: Minify CSS and JavaScript for production (optional)

## Contact Form Integration

The contact form currently shows a success message. To make it functional:

1. **Email Service**: Integrate with services like:
   - [Formspree](https://formspree.io)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/)
   - [EmailJS](https://www.emailjs.com/)

2. **Backend Integration**: Connect to your own backend API

Example with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## Analytics Integration

Add Google Analytics or other tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## SEO Optimization

The website includes basic SEO elements. For better optimization:

1. Add meta description
2. Include Open Graph tags
3. Add structured data
4. Create a sitemap.xml
5. Add robots.txt

## License

This portfolio template is free to use and modify for personal and commercial purposes.

## Support

For questions or customization help, feel free to reach out through the contact form on the website.

---

Built with ❤️ for showcasing data science expertise.
