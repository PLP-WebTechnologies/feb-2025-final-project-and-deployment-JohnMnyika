# Spike Tech Empire - E-commerce Website

## Overview
Spike Tech Empire is a modern e-commerce website specializing in tech products and accessories. Built with HTML, CSS, and JavaScript, it provides a responsive and user-friendly shopping experience for customers looking for quality tech products.

## Live Demo
[Visit Spike Tech Empire](https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-JohnMnyika/) - Hosted on GitHub Pages

## Features

### Product Catalog
- Curated selection of tech products with detailed descriptions
- Product categories: Electronics and Accessories
- Dynamic product filtering system:
  - Price range filter (0 - 50,000 KSH)
  - Category-based filtering
  - Real-time search functionality

### Shopping Cart
- Add and remove products
- Adjust product quantities
- Real-time price calculations
- Flat-rate shipping (500 KSH)
- Order summary with subtotal and total

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Intuitive navigation
- Clean and modern interface

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage for cart persistence

## Project Structure
├── css/
│   ├── style.css         # Main styling
│   └── responsive.css     # Responsive design rules
├── images/
│   ├── wireless_headphones.jpg
│   ├── smartwatch.jpg
│   ├── laptop_backpack.jpg
│   └── bt_speaker.jpg
├── js/
│   ├── main.js           # Core functionality
│   ├── products.js        # Product management
│   ├── cart.js           # Shopping cart logic
│   └── contact.js        # Contact form handling
├── pages/
│   ├── about.html        # About page
│   ├── cart.html         # Shopping cart page
│   ├── contact.html      # Contact page
│   └── products.html     # Products listing
└── index.html           # Homepage

## Key Features Implementation

### Product Management
- Products stored in JavaScript array
- Each product includes:
  - Unique ID
  - Name
  - Price in KSH
  - Image path
  - Description
  - Category

### Filter System
- Price range selector with real-time updates
- Category checkboxes for quick filtering
- Search input for finding specific products
- Combined filtering for precise results

### Shopping Cart
- Persistent cart data using localStorage
- Real-time price calculations
- Shipping cost calculation
- Clear cart functionality

## Contact Information
- **Email:** jmnyika514@gmail.com
- **Phone:** +254700878430
- **Location:** Tom Mboya street, Nairobi city

## Deployment
The website is deployed using GitHub Pages, which automatically serves the site from the repository's main branch. The deployment process is straightforward:

1. Code pushed to the main branch
2. GitHub Pages automatically builds and deploys the site
3. Site is accessible via the GitHub Pages URL

## Browser Support
- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

## Future Enhancements
1. User authentication system
2. Payment gateway integration
3. Product reviews and ratings
4. Admin dashboard
5. Order tracking system
6. Wishlist functionality
7. More product categories
8. Advanced search filters

## Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the [MIT License](LICENSE).