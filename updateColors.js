const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Find <p> tags and replace text color classes
  // e.g. text-gray-400, text-[#98A0AB], text-gray-300
  content = content.replace(/<p\b([^>]*)className=["']([^"']*)["']([^>]*)>/g, (match, before, classes, after) => {
    let newClasses = classes.replace(/text-(gray-\d{3}|\[#[A-Fa-f0-9]+\])/g, 'text-[#8C95A3]');
    // Note: if there's no existing text-color class, we might want to add it, but usually there is one.
    // However, the rule was "use this color for all the p tags text not the titles", so if it doesn't have a text color, maybe we should add it.
    // For safety, let's just replace existing ones first, then check if we need to enforce it.
    if (newClasses === classes) {
       newClasses = `${classes} text-[#8C95A3]`.replace(/\s+/g, ' ').trim();
    }
    return `<p${before}className="${newClasses}"${after}>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

// Ensure working only on app and components
walk(path.join(__dirname, 'components'));
walk(path.join(__dirname, 'app'));
