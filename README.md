# Interview Practice App

A Next.js application for practicing interview questions across various courses.

## Getting Started

1. Navigate to the project directory:
```bash
cd my-interview-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up the Gemini API:
   - Sign up for a Gemini API key at https://aistudio.google.com/
   - Create a `.env.local` file in the root directory
   - Add your API key: `GEMINI_API_KEY=your-key-here`

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Built with Next.js 15.0.1
- TypeScript support
- Tailwind CSS for styling
- Shadcn UI components
- Responsive design for mobile and desktop
- Gemini AI integration for generating interview questions

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
