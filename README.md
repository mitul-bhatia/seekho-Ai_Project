# Interview Practice App

A Next.js application for practicing interview questions using the Gemini API. The app allows users to create custom courses and generate interview questions for each course.

## Features

- Create and manage custom courses
- Generate interview questions using Gemini API
- Responsive design with Tailwind CSS
- Modern UI components with Shadcn UI
- Loading states and error handling

## Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later
- A Gemini API key

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-interview-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Add a new course using the form at the top of the page
2. Click the "Practice" button on any course card to generate an interview question
3. View the generated question below the course list
4. Add more courses or practice with existing ones

## Notes

- The application uses the Gemini API to generate interview questions
- Course data is stored in the browser's memory and will reset on page refresh
- Make sure your Gemini API key is valid and has sufficient quota
- The app is built with accessibility in mind, supporting keyboard navigation and screen readers

## Technologies Used

- Next.js 15.0.1
- TypeScript
- Tailwind CSS 3.4.14
- Shadcn UI
- Gemini API

## Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
