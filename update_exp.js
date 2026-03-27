const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/ExperienceLayer.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add imports and state
content = content.replace(
  "import { Utensils, Film, ShoppingBag, Compass, SlidersHorizontal, Sparkles, PlayCircle, History } from 'lucide-react';",
  "import { Utensils, Film, ShoppingBag, Compass, SlidersHorizontal, Sparkles, PlayCircle, History } from 'lucide-react';\nimport { useState, useEffect } from 'react';"
);

content = content.replace(
  "export default function ExperienceLayer() {",
  "export default function ExperienceLayer() {\n  const [activeIndex, setActiveIndex] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setActiveIndex((current) => (current + 1) % 4);\n    }, 3000);\n    return () => clearInterval(interval);\n  }, []);\n"
);

// 2. Header text edits
content = content.replace(
  "Your Twin doesn’t just answer.",
  "Your Twin doesn’t just respond."
);
content = content.replace(
  "Banza turns your connected apps",
  "Banza’s AI Twin turns your connected apps"
);

// 3. Remove Food block image
content = content.replace(
  /<div className="absolute bottom-0 right-0[^>]*>\s*<img[^>]*\/>\s*<\/div>/,
  ""
);

// 4. Edits for Shopping, Entertainment, Travel texts
content = content.replace(
  '"Matches your collection of brutalist pottery."',
  '"Matches your bookmarks on brutalist pottery."'
);
content = content.replace(
  "Entertainment that actually lands",
  "Entertainment you genuinely enjoy"
);
content = content.replace(
  "Travel ideas you’d actually take",
  "Travel itineraries you’d actually follow"
);

// 5. Replace group-hover: with group-[.is-active]:
content = content.replace(/group-hover:/g, 'group-[.is-active]:');

// 6. Fix interaction attributes
// We need to inject the active class and change whileHover to animate
const cards = ['Food', 'Entertainment', 'Shopping', 'Travel'];
cards.forEach((card, index) => {
  // Find the exact motion.div for each module and replace
  const searchStr = `          whileInView="visible"\n          exit="hidden"\n          whileHover="hover"`;
  const replaceStr = `          whileInView="visible"\n          exit="hidden"\n          animate={activeIndex === ${index} ? "hover" : "visible"}`;
  content = content.replace(searchStr, replaceStr);
  
  // Now add is-active class to the cards
  // The className starts with either "group relative bg-surface-container-" or "group relative " etc.
  // We'll replace ` className="group relative ` with ` className={\`group relative \${activeIndex === ${index} ? 'is-active' : ''} `
  // using a regex that targets the specific class definition inside the motion.div of each card.
});

// Since doing it via index replacement could be tricky, let's just do a blanket regex for the card classNames.
content = content.replace(
  /className="group relative bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between min-h-\[480px\]/g,
  "className={`group relative bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between min-h-[480px] ${activeIndex === 0 ? 'is-active' : ''}"
);
content = content.replace(
  /className="group relative bg-surface-container p-8/g,
  "className={`group relative bg-surface-container p-8 ${activeIndex === 1 ? 'is-active' : ''}"
);
content = content.replace(
  /className="group relative bg-surface-container-high p-8/g,
  "className={`group relative bg-surface-container-high p-8 ${activeIndex === 2 ? 'is-active' : ''}"
);
content = content.replace(
  /className="group relative bg-surface-container-lowest p-8/g,
  "className={`group relative bg-surface-container-lowest p-8 ${activeIndex === 3 ? 'is-active' : ''}"
);

// We need to close the template literals for the classNames
content = content.replace(
  /transition-colors duration-500"/g,
  "transition-colors duration-500`}"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update complete.');
