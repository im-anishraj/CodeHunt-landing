const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'components', 'layout', 'sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace section headings
  content = content.replace(/text-3xl\s+md:text-4xl\s+text-center\s+font-bold/g, 'text-[42px] font-heading font-semibold text-center');
  content = content.replace(/text-4xl\s+md:text-5xl\s+text-center\s+font-bold/g, 'text-[42px] font-heading font-semibold text-center');
  content = content.replace(/text-3xl\s+md:text-4xl\s+font-bold/g, 'text-[42px] font-heading font-semibold');

  // Replace small sub-headers (Labels/Badges)
  // E.g., text-lg text-primary text-center mb-2 tracking-wider
  // The user says "Labels/Badges" are 11px uppercase tracked. Some h2s are used as section labels above the main h2.
  content = content.replace(/text-lg text-primary(.*?)tracking-wider/g, 'text-[11px] font-semibold uppercase tracking-wider text-primary$1');

  // Replace CardTitles generic
  // It's CardTitle components usually, or inside Cards.
  // CardTitle is usually from @/components/ui/card
  
  fs.writeFileSync(filePath, content);
}
console.log('Updated sections.');
