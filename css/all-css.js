function includeCSS(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

// Array of CSS file URLs to include
const cssFiles = [
    'css/RW-Helpline.css',
    'js/fancybox/fancybox.min.css',
    // Add more file URLs if needed
];

// Load each CSS file dynamically
Promise.all(cssFiles.map(includeCSS))
    .then(() => {
        console.log('All CSS files included successfully.');
    })
    .catch(error => {
        console.error('Error loading CSS files:', error);
    });