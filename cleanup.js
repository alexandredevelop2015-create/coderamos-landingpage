const fs = require('fs');
let cssStr = fs.readFileSync('styles.css', 'utf8');

// The corrupted text contains null bytes because PowerShell `echo >>` outputs UTF-16LE.
// We'll split the file at the end of `.chat-body` rule.
let marker = ".chat-body {\n  padding: 1rem;\n  flex: 1;\n  color: #333;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}";

let idx = cssStr.indexOf(marker);
if (idx !== -1) {
  let cleanCss = cssStr.substring(0, idx + marker.length) + "\n\n";
  let carouselCss = `/* Tech Carousel */
.tech-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  margin-top: 4rem;
  padding: 1rem 0;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.tech-carousel {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: scroll 30s linear infinite;
  align-items: center;
}

.tech-carousel:hover {
  animation-play-state: paused;
}

.tech-carousel img {
  height: 50px;
  width: auto;
  filter: grayscale(100%) opacity(0.5) brightness(2);
  transition: all 0.3s;
}

.tech-carousel img:hover {
  filter: grayscale(0%) opacity(1) brightness(1);
  transform: scale(1.1);
}

@keyframes scroll {
  to {
    transform: translateX(calc(-50% - 2rem));
  }
}
`;
  fs.writeFileSync('styles.css', cleanCss + carouselCss, 'utf8');
  console.log('Fixed CSS');
} else {
  // if line endings are CRLF, try with \r\n
  marker = ".chat-body {\r\n  padding: 1rem;\r\n  flex: 1;\r\n  color: #333;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n}";
  idx = cssStr.indexOf(marker);
  if (idx !== -1) {
    let cleanCss = cssStr.substring(0, idx + marker.length) + "\r\n\r\n";
    let carouselCss = `/* Tech Carousel */
.tech-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  margin-top: 4rem;
  padding: 1rem 0;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.tech-carousel {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: scroll 30s linear infinite;
  align-items: center;
}

.tech-carousel:hover {
  animation-play-state: paused;
}

.tech-carousel img {
  height: 50px;
  width: auto;
  filter: grayscale(100%) opacity(0.5) brightness(2);
  transition: all 0.3s;
}

.tech-carousel img:hover {
  filter: grayscale(0%) opacity(1) brightness(1);
  transform: scale(1.1);
}

@keyframes scroll {
  to {
    transform: translateX(calc(-50% - 2rem));
  }
}
`;
    fs.writeFileSync('styles.css', cleanCss + carouselCss, 'utf8');
    console.log('Fixed CSS (CRLF)');
  } else {
    console.log('Could not find marker.');
  }
}
