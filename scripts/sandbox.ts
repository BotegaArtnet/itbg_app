import { CodeSandbox } from "@codesandbox/sdk";

async function main() {
  const sdk = new CodeSandbox("csb_v1_LGHxb3YvEwgTX0XXidmJtWu-39gg6Agk5AiAO7y2s9w");

  // Create a sandbox
  console.log("Creating sandbox...");
  const sandbox = await sdk.sandbox.create({
    template: "next",
  });

  // Install dependencies
  console.log("Installing dependencies...");
  await sandbox.shells.run("npm install framer-motion @headlessui/react");

  // Copy project files
  console.log("Setting up project files...");
  
  // Create directories
  await sandbox.shells.run("mkdir -p src/app src/components/Navigation");

  // Copy files
  await sandbox.fs.writeTextFile(
    "src/app/layout.tsx",
    `import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ITBG',
  description: 'A minimalist web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={\`\${inter.className} antialiased\`}>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}`
  );

  // Start the development server
  console.log("Starting development server...");
  const dev = sandbox.shells.run("npm run dev");

  // Wait for port to open
  const portInfo = await sandbox.ports.waitForPort(3000);
  console.log("Server is running!");
  console.log(`Preview URL: ${portInfo.getPreviewUrl()}`);

  // Keep the process running
  process.stdin.resume();
}

main().catch(console.error); 