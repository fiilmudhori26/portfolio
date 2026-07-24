# Quick Start Guide

## Prerequisites
- Node.js 18+
- npm or yarn

## Installation & Setup

1. Navigate to project directory:
```bash
cd F:\Portofolio\web
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser:
```
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Setup

Create `.env.local` (optional):
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Customization Guide

### Update Contact Information
Edit `components/sections/Contact.tsx`:
- Email: rachmad@example.com
- Phone: +62 812 3456 7890

### Add Social Links
Edit `components/sections/Content.tsx`:
- Instagram, TikTok, LinkedIn, GitHub links

### Update Projects
Edit `components/sections/Projects.tsx`:
- Add/edit project details
- Update project images
- Change tech stacks

### Modify Skills
Edit `components/sections/Skills.tsx`:
- Add new skill categories
- Update skill lists

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Performance Tips

- Use image optimization for project images
- Lazy load images with Next.js Image component
- Minimize custom fonts
- Use CSS variables for theming

## Support

For issues or questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
