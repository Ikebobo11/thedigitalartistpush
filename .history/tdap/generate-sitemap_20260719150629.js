import fs from 'fs';
// 1. Import the package wrapper
import sitemapPackage from 'react-router-sitemap';

// 2. Extract the actual constructor safely for ES Modules
const sitemap = sitemapPackage.default || sitemapPackage;

// 3. Define your website's routes
const routes = [
    { path: '/' },
    { path: '/contact' },
];

const hostname = 'https://thedigitalartistpush.site'; 

// 4. Build and save the sitemap
const generatedSitemap = new sitemap(routes)
    .build(hostname)
    .save('./public/sitemap.xml'); 

console.log('✅ sitemap.xml successfully generated in the public folder!');