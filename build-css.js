const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const fs = require('fs');

async function buildCss() {
  const css = fs.readFileSync('src/app/globals.css', 'utf8');
  const modalCss = fs.readFileSync('src/app/modal.css', 'utf8');
  const combinedCss = css + '\n\n' + modalCss;
  
  const result = await postcss([tailwind()]).process(combinedCss, {
    from: 'src/app/globals.css',
    to: 'public/tailwind.css',
  });
  
  // Append modal css directly to ensure zero purges
  const finalCss = result.css + '\n\n' + modalCss;
  fs.writeFileSync('public/tailwind.css', finalCss);
  console.log('✓ Tailwind and Custom Modal CSS compiled to public/tailwind.css (' + finalCss.length + ' bytes)');
}

buildCss().catch(console.error);
