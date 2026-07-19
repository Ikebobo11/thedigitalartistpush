import fs from 'fs';
import sitemap from 'react-router-sitemap';

// 1. Define your website's routes
const routes = [
    { path: '/' },
    { path: '/contact' },
];

// 2. Map the routes into the format the generator expects
const pathFilter = {
    accept: true,
};

// 3. Build the sitemap
const idMap = []; 
const smParams = {
    'http://www.sitemaps.org/schemas/sitemap/0.9': true
};

const hostname = 'https://thedigitalartistpush.site'; 

// Note: When using ES Module imports, you instantiate the module directly 
// depending on how the package exports it. 
const generatedSitemap = new sitemap(routes)
    .build(hostname)
    .save('./public/sitemap.xml'); 

console.log('✅ sitemap.xml successfully generated in the public folder!');