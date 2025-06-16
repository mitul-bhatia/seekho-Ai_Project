# SEEKHO - AI-Powered Interview Practice

A Next.js application that helps users practice interview questions using AI.

## Features

- Course management with predefined and custom courses
- AI-generated interview questions using Google's Gemini API
- Answer evaluation and feedback
- Dark mode support
- Responsive design
- Accessibility features

## Prerequisites

- Node.js 18+ and npm
- Google Gemini API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Install required Shadcn UI components:
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   npx shadcn-ui@latest add alert
   npx shadcn-ui@latest add alert-dialog
   npx shadcn-ui@latest add tooltip
   npx shadcn-ui@latest add textarea
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Add your shield logo

1. Place your shield logo image in the `public` directory as `shield-logo.png`
2. Update `src/app/page.tsx` to use the logo:
   ```tsx
   import Image from "next/image";
   
   // In your component:
   <Image
     src="/shield-logo.png"
     alt="SEEKHO Logo"
     width={128}
     height={128}
     className="rounded-full"
   />
   ```

## Usage

1. Visit the landing page to see the SEEKHO branding
2. Click "Get Started" to go to the courses page
3. Add new courses or use predefined ones
4. Click "Practice" on a course to start answering questions
5. Type your answer and submit for evaluation
6. Receive a score and feedback on your answer

## Development

- Built with Next.js 15.0.1
- Uses TypeScript for type safety
- Styled with Tailwind CSS 3.4.14
- UI components from Shadcn UI
- AI integration with Google's Gemini API

## License

MIT
