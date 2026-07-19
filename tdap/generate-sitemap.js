const fs = require('fs');
const sitemap = require('react-router-sitemap');

// 1. Define your website's routes
// Replace these with the actual paths of your website
const routes = [
    { path: '/' },
    { path: '/contact' },
    // Add any other pages you have here, e.g., { path: '/about' }
];

// 2. Map the routes into the format the generator expects
const pathFilter = {
    accept: true,
};

// 3. Build the sitemap
const idMap = []; // Used if you have dynamic IDs like /post/:id
const smParams = {
    'http://www.sitemaps.org/schemas/sitemap/0.9': true
};

// Replace 'https://thedigitalartistpush.site' with your exact live domain
const hostname = 'https://thedigitalartistpush.site'; 

const generatedSitemap = new sitemap.default(routes)
    .build(hostname)
    .save('./public/sitemap.xml'); // This saves it directly to your public folder

console.log('✅ sitemap.xml successfully generated in the public folder!');