const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. nav ul
css = css.replace(
  /nav ul \{\s*display: flex;\s*gap: 2rem;\s*list-style: none;\s*\}/,
  'nav ul {\n  display: none;\n  gap: 2rem;\n  list-style: none;\n}'
);

// 2. .hero-content
css = css.replace(
  /\.hero-content \{\s*display: flex;\s*flex-direction: column;\s*align-items: center;\s*width: 100%;\s*padding: 2rem 5%;\s*max-width: 1000px;\s*margin: 0 auto;\s*\}/,
  '.hero-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  padding: 0 5%;\n  max-width: 1000px;\n  margin: 0 auto;\n}'
);

// 3. .services-highlight
css = css.replace(
  /\.services-highlight \{\s*display: flex;\s*justify-content: center;\s*gap: 2rem;\s*margin-bottom: 3rem;\s*flex-wrap: wrap;\s*\}/,
  '.services-highlight {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 3rem;\n}'
);

// 4. .section-sobre
css = css.replace(
  /\.section-sobre \{\s*background-color: var\(--bg-secondary\);\s*position: relative;\s*max-width: 100%; \/\* Override the global section max-width \*\/\s*padding: 6rem 5%;\s*border-top: 1px solid rgba\(255, 255, 255, 0.05\);\s*border-bottom: 1px solid rgba\(255, 255, 255, 0.05\);\s*\}/,
  '.section-sobre {\n  background-color: var(--bg-secondary);\n  position: relative;\n  max-width: 100%;\n  padding: 4rem 5%;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}'
);

// 5. .cta-group
css = css.replace(
  /\.cta-group \{\s*display: flex;\s*gap: 1rem;\s*flex-wrap: wrap;\s*\}/,
  '.cta-group {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}'
);

// 6. section
css = css.replace(
  /\/\* Sections \*\/\s*section \{\s*padding: 6rem 10%;\s*max-width: 1200px;\s*margin: 0 auto;\s*\}/,
  '/* Sections */\nsection {\n  padding: 4rem 5%;\n  max-width: 1200px;\n  margin: 0 auto;\n}'
);

// 7. .section-stack
css = css.replace(
  /\.section-stack \{\s*padding: 6rem 10%;\s*max-width: 1200px;\s*margin: 0 auto;\s*\}/,
  '.section-stack {\n  padding: 4rem 5%;\n  max-width: 1200px;\n  margin: 0 auto;\n}'
);

// 8. .bottom-bar-content
css = css.replace(
  /\.bottom-bar-content \{\s*max-width: 1200px;\s*margin: 0 auto;\s*display: flex;\s*justify-content: space-between;\s*align-items: center;\s*flex-wrap: wrap;\s*gap: 1rem;\s*\}/,
  '.bottom-bar-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1.5rem;\n}'
);

// 9. .bottom-bar-text.right-align
css = css.replace(
  /\.bottom-bar-text\.right-align \{\s*text-align: right;\s*\}/,
  '.bottom-bar-text.right-align {\n  text-align: center;\n}'
);

// 10. media query
const mediaQueryDesktop = `
/* Desktop Responsiveness (Mobile First) */
@media (min-width: 768px) {
  nav ul {
    display: flex;
  }
  
  .hero-content {
    padding: 2rem 5%;
  }

  .services-highlight {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  section {
    padding: 6rem 10%;
  }
  
  .section-sobre {
    padding: 6rem 5%;
  }

  .section-stack {
    padding: 6rem 10%;
  }

  .cta-group {
    justify-content: flex-start;
  }

  .bottom-bar-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .bottom-bar-text.right-align {
    text-align: right;
  }
}
`;

css = css.replace(
  /\/\* Mobile Responsiveness \*\/[\s\S]*?@media \(max-width: 768px\) \{[\s\S]*?\}\s*\}/,
  mediaQueryDesktop
);

fs.writeFileSync('styles.css', css);
console.log('Mobile first conversion complete.');
