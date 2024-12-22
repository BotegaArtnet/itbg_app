import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_KEY = 'csb_v1_LGHxb3YvEwgTX0XXidmJtWu-39gg6Agk5AiAO7y2s9w';
const API_URL = 'https://codesandbox.io/api/v1/sandboxes/define';

interface SandboxResponse {
  sandbox_id: string;
}

const REQUIRED_FILES = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'package.json',
  'tsconfig.json',
  'tailwind.config.js',
];

async function main() {
  try {
    console.log('Preparing files...');
    const files: { [key: string]: { content: string } } = {};

    // Read only the required files
    for (const filePath of REQUIRED_FILES) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        files[filePath] = { content };
        console.log(`Added ${filePath}`);
      } catch (error) {
        if (error instanceof Error) {
          console.warn(`Warning: Could not read ${filePath}: ${error.message}`);
        }
      }
    }

    const parameters = {
      files,
      template: 'node',
      title: 'ITBG App',
      description: 'A modern web application'
    };

    console.log('Deploying to CodeSandbox...');
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(parameters)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Deployment failed: ${response.statusText}\n${errorText}`);
    }

    const result = await response.json() as SandboxResponse;
    console.log('Deployment successful!');
    console.log(`Sandbox URL: https://codesandbox.io/s/${result.sandbox_id}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Deployment failed:', error.message);
    } else {
      console.error('Deployment failed with unknown error');
    }
    process.exit(1);
  }
}

main(); 