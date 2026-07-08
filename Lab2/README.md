# Lab 2: Personal Branding Website with Vibe Coding

## Project Description

This project was created for the Samsung Innovation Campus Generative AI
Module. It is a responsive personal branding website for a Computer
Engineering student interested in Artificial Intelligence, Data Engineering,
LLM/RAG systems, and software development.

The website uses a customized implementation of the 21st.dev Hero Section 5
component as its main hero:

https://21st.dev/@tailark/components/hero-section-5

## Technologies Used

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS
- Motion for interface animation
- Lucide React for icons
- AI-generated visual assets

## How to Run

Requirements:

- Node.js 20 or newer
- npm

From the `Lab2` directory, run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

To validate a production build:

```bash
npm run lint
npm run build
```

## Website Sections

1. **Hero Section** - Introduces the personal brand with the headline
   "Building AI & Data-Driven Solutions" and navigation calls to action.
2. **Who I Am** - Presents my Computer Engineering background and interest in
   AI, data, LLM/RAG systems, and software development.
3. **My Skills** - Highlights Python, SQL, Java, Power BI, test automation,
   data processing, and AI-based project experience.
4. **My Future Goal** - Explains my goal of working in AI and Data Engineering
   roles to build systems that solve real business problems.
5. **Final Reflection** - Summarizes how Generative AI supported the content,
   coding, design, and personal branding process.

## Image Generation Prompts

The three generated visuals are stored in `public/images/` and used in their
matching website sections:

- `who-i-am.png`
- `my-skills.png`
- `future-goal.png`

The complete prompts are documented in [image-prompts.md](./image-prompts.md).

## Final Reflection

I aimed for an AI and Data Engineering role, and I wanted my website to feel clean, professional, and technology-focused.
I used AI to organize my personal profile, generate visual ideas, and improve the website design.
This lab helped me understand how Generative AI can support not only content creation but also coding, design, and personal branding.
