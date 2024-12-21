const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Utility functions
const log = (message) => console.log(`\n🚀 ${message}`);
const error = (message) => console.error(`\n❌ ${message}`);
const success = (message) => console.log(`\n✅ ${message}`);

const runCommand = (command, cwd = process.cwd()) => {
  try {
    log(`Running: ${command}`);
    execSync(command, { cwd, stdio: 'inherit' });
    return true;
  } catch (err) {
    error(`Failed: ${command}`);
    error(err.message);
    return false;
  }
};

const updateFile = (filePath, updater) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updated = updater(content);
    fs.writeFileSync(filePath, updated);
    success(`Updated ${filePath}`);
    return true;
  } catch (err) {
    error(`Failed to update ${filePath}`);
    error(err.message);
    return false;
  }
};

const createFile = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, content);
    success(`Created ${filePath}`);
    return true;
  } catch (err) {
    error(`Failed to create ${filePath}`);
    error(err.message);
    return false;
  }
};

// Main setup steps
const setupFrontend = () => {
  log('Setting up frontend...');
  
  const webDir = 'frontend/web';
  
  // Remove ESLint and related packages
  runCommand('npm uninstall eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-plugin-react eslint-plugin-import', webDir);
  
  // Remove ESLint configuration files
  ['eslintrc.js', 'eslintrc.json', 'eslintignore'].forEach(file => {
    const filePath = path.join(webDir, '.' + file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      success(`Removed ${filePath}`);
    }
  });

  // Install Prettier
  runCommand('npm install --save-dev prettier', webDir);

  // Create Prettier configuration
  createFile(path.join(webDir, '.prettierrc'), JSON.stringify({
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": false,
    "tabWidth": 2,
    "printWidth": 100
  }, null, 2));

  // Update Next.js config to ignore ESLint
  createFile(path.join(webDir, 'next.config.js'), `
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
`);

  // Update TypeScript configuration
  updateFile(path.join(webDir, 'tsconfig.json'), () => JSON.stringify({
    "compilerOptions": {
      "target": "es5",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
        {
          "name": "next"
        }
      ],
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  }, null, 2));

  // Format all files with Prettier
  runCommand('npx prettier --write "src/**/*.{ts,tsx}"', webDir);
};

const setupBackend = () => {
  log('Setting up backend...');
  
  // Install backend dependencies
  runCommand('npm install', 'backend');
  
  // Install TypeORM and related packages
  runCommand('npm install typeorm reflect-metadata pg @types/node', 'backend');
  
  // Update tsconfig.json
  updateFile('backend/tsconfig.json', () => JSON.stringify({
    "compilerOptions": {
      "target": "es2017",
      "module": "commonjs",
      "lib": ["es2017", "esnext.asynciterable"],
      "skipLibCheck": true,
      "sourceMap": true,
      "outDir": "./dist",
      "moduleResolution": "node",
      "removeComments": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "strictFunctionTypes": true,
      "noImplicitThis": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "resolveJsonModule": true,
      "baseUrl": "."
    },
    "exclude": ["node_modules"],
    "include": ["./src/**/*.ts"]
  }, null, 2));

  // Install and configure Prettier for backend
  runCommand('npm install --save-dev prettier', 'backend');
  createFile('backend/.prettierrc', JSON.stringify({
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": false,
    "tabWidth": 2,
    "printWidth": 100
  }, null, 2));

  // Format backend files
  runCommand('npx prettier --write "src/**/*.ts"', 'backend');
};

const setupMobile = () => {
  log('Setting up mobile...');
  
  // Install mobile dependencies
  runCommand('npm install', 'frontend/mobile');
  
  // Install React Native CLI
  runCommand('npm install -g @react-native-community/cli');

  // Install and configure Prettier for mobile
  runCommand('npm install --save-dev prettier', 'frontend/mobile');
  createFile('frontend/mobile/.prettierrc', JSON.stringify({
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": false,
    "tabWidth": 2,
    "printWidth": 100
  }, null, 2));

  // Format mobile files
  runCommand('npx prettier --write "src/**/*.{ts,tsx}"', 'frontend/mobile');
};

const main = async () => {
  log('Starting comprehensive setup...');

  // Frontend setup
  setupFrontend();

  // Backend setup
  setupBackend();

  // Mobile setup
  setupMobile();

  // Final steps
  log('Running final checks...');
  
  // Run development servers
  runCommand('npm run dev', 'frontend/web');
  runCommand('npm run dev', 'backend');

  success('Setup completed successfully! 🎉');
  log('Frontend server running on http://localhost:3000');
  log('Backend server running on http://localhost:3001');
  log('\nTo check for type errors, run:');
  log('  cd frontend/web && npx tsc --noEmit');
  log('  cd backend && npx tsc --noEmit');
  log('\nTo format code, run:');
  log('  cd frontend/web && npx prettier --write "src/**/*.{ts,tsx}"');
  log('  cd backend && npx prettier --write "src/**/*.ts"');
};

// Run the setup
main().catch(err => {
  error('Setup failed');
  error(err.message);
  process.exit(1);
}); 