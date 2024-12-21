# TonsConnect

A modern social media platform integrating Mastodon with AI capabilities.

## Setup

1. Install dependencies:
   ```bash
   # Frontend (Web)
   cd frontend/web && npm install
   # Frontend (Mobile)
   cd ../mobile && npm install
   # Backend
   cd ../../backend && npm install
   # AI Service
   cd ../ai && npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env` in each component directory
   - Update the values according to your setup

3. Start development servers:
   ```bash
   # Frontend (Web)
   cd frontend/web && npm run dev
   # Backend
   cd ../../backend && npm run dev
   # AI Service
   cd ../ai && npm run dev
   ```

## Architecture

- Frontend (Web): Next.js + TypeScript + Tailwind CSS
- Frontend (Mobile): React Native
- Backend: Express + TypeScript + TypeORM
- AI Service: LangChain + Pinecone
- Database: PostgreSQL
- Infrastructure: Docker + Mastodon
