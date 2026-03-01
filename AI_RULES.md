# Ecofertile Development Rules

This project uses Vite + React + TypeScript.

CRITICAL STRUCTURE RULES:

DO NOT:
- Modify vite.config.ts
- Modify tsconfig.json
- Modify tailwind.config.js
- Modify postcss.config.js
- Add CDN scripts
- Add import maps
- Add React via CDN
- Change project root structure
- Add new root-level config files

ALWAYS:
- Create new pages inside /src/pages
- Create reusable components inside /src/components
- Preserve all animations and visual styling
- Keep Tailwind utility classes unchanged
- Ensure compatibility with npm run build
- Maintain pixel-perfect visual output

The UI must remain visually identical unless explicitly instructed.