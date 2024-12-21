const fs = require('fs');
const path = require('path');
const glob = require('glob');

function replaceDoubleQuotes(content) {
  return content
    .replace(/className="([^"]*)"/g, 'className=\'$1\'')
    .replace(/type="([^"]*)"/g, 'type=\'$1\'')
    .replace(/href="([^"]*)"/g, 'href=\'$1\'')
    .replace(/fill="([^"]*)"/g, 'fill=\'$1\'')
    .replace(/stroke="([^"]*)"/g, 'stroke=\'$1\'')
    .replace(/viewBox="([^"]*)"/g, 'viewBox=\'$1\'')
    .replace(/strokeLinecap="([^"]*)"/g, 'strokeLinecap=\'$1\'')
    .replace(/strokeLinejoin="([^"]*)"/g, 'strokeLinejoin=\'$1\'')
    .replace(/strokeWidth="([^"]*)"/g, 'strokeWidth=\'$1\'')
    .replace(/as="([^"]*)"/g, 'as=\'$1\'')
    .replace(/show="([^"]*)"/g, 'show=\'$1\'')
    .replace(/enter="([^"]*)"/g, 'enter=\'$1\'')
    .replace(/enterFrom="([^"]*)"/g, 'enterFrom=\'$1\'')
    .replace(/enterTo="([^"]*)"/g, 'enterTo=\'$1\'')
    .replace(/leave="([^"]*)"/g, 'leave=\'$1\'')
    .replace(/leaveFrom="([^"]*)"/g, 'leaveFrom=\'$1\'')
    .replace(/leaveTo="([^"]*)"/g, 'leaveTo=\'$1\'')
    .replace(/onClose="([^"]*)"/g, 'onClose=\'$1\'')
    .replace(/onClick="([^"]*)"/g, 'onClick=\'$1\'')
    .replace(/lang="([^"]*)"/g, 'lang=\'$1\'')
    .replace(/src="([^"]*)"/g, 'src=\'$1\'')
    .replace(/alt="([^"]*)"/g, 'alt=\'$1\'')
    .replace(/placeholder="([^"]*)"/g, 'placeholder=\'$1\'')
    .replace(/value="([^"]*)"/g, 'value=\'$1\'')
    .replace(/name="([^"]*)"/g, 'name=\'$1\'')
    .replace(/id="([^"]*)"/g, 'id=\'$1\'')
    .replace(/role="([^"]*)"/g, 'role=\'$1\'')
    // Replace any remaining double quotes in JSX attributes
    .replace(/(\s+\w+)="([^"]*)"/g, '$1=\'$2\'');
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = replaceDoubleQuotes(content);
  fs.writeFileSync(filePath, updatedContent);
  console.log(`Processed: ${filePath}`);
}

// Find all TypeScript and TSX files in the src directory
const files = glob.sync('src/**/*.{ts,tsx}');

// Process each file
files.forEach(processFile);

console.log('All files processed successfully!'); 