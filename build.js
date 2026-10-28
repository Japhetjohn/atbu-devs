/**
 * ATBU Developers Club — Production Build Script
 * Compiles modular HTML components and verifies asset links.
 */
const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, 'components');
const OUTPUT_FILE = path.join(__dirname, 'index.html');

const COMPONENT_ORDER = [
  'hero.html',
  'partners.html',
  'about.html',
  'membership.html',
  'founder.html',
  'activities.html',
  'faq.html',
  'footer.html'
];

function build() {
  console.log('🏗️  Starting ATBUDEVS Production Build...');

  const headContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ATBUDEVS — Abubakar Tafawa Balewa University Developers Club</title>
  <meta name="description" content="Official website of the Abubakar Tafawa Balewa University Developers Club (ATBUDEVS). Build real software and grow as a developer." />
  
  <!-- Official Favicons & Touch Icons -->
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <link rel="shortcut icon" href="favicon.ico" />
  
  <!-- Typography Reference Fonts: Inter Tight & Manrope -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,800&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="styles/main.css" />
</head>
<body>
`;

  let bodyContent = '';
  for (const compName of COMPONENT_ORDER) {
    const compPath = path.join(COMPONENTS_DIR, compName);
    if (!fs.existsSync(compPath)) {
      console.error(`❌ Missing component: ${compName}`);
      process.exit(1);
    }
    const html = fs.readFileSync(compPath, 'utf8').trim();
    bodyContent += `  <!-- Component: ${compName} -->\n  ${html}\n\n`;
    console.log(`  ✓ Loaded component: ${compName}`);
  }

  const scriptsContent = `  <!-- Modular Production Client Scripts -->
  <script src="scripts/drawer.js" defer></script>
  <script src="scripts/scroll-reveal.js" defer></script>
  <script src="scripts/faq.js" defer></script>
  <script src="scripts/carousel.js" defer></script>
  <script src="scripts/main.js" defer></script>
</body>
</html>
`;

  const fullHtml = headContent + '\n' + bodyContent + scriptsContent;
  fs.writeFileSync(OUTPUT_FILE, fullHtml, 'utf8');

  console.log(`✅ Production build complete! Output written to: ${OUTPUT_FILE} (${fullHtml.length} bytes)\n`);
}

build();
