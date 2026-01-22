# Copilot Coding Agent Setup 🤖💻

## Environment Setup

Before you start coding like a caffeinated developer at 3 AM, let's make sure your environment is properly configured!

### Prerequisites

Ensure you have Node.js installed (version 20 or higher, because we're not living in the Stone Age):

```bash
node --version  # Should be v20.x.x or higher
npm --version   # Should be 10.x.x or higher
```

### Initial Setup

Run this magical incantation to install all dependencies:

```bash
npm install
```

This will install:
- React 19 (the shiny new version)
- TypeScript (your type-checking guardian angel)
- Vite (the speed demon build tool)
- TanStack Router & Query (the dynamic duo)
- ESLint (the code police)
- And a bunch of other cool packages that make everything work

### Development Server

To run the development server (where the magic happens):

```bash
npm run dev
```

This starts Vite's dev server at `http://localhost:5173` with:
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 🔧 React Compiler enabled
- 🧭 TanStack Router with auto-routing
- 🔍 React Query Devtools

### Building

To build for production (when it's time to show your work to the world):

```bash
npm run build
```

This will:
1. Run TypeScript compiler in build mode (`tsc -b`)
2. Build with Vite for production
3. Output to the `dist/` folder

### Linting

To check your code style (or to feel judged by a robot):

```bash
npm run lint       # Just check what's wrong
npm run lint:fix   # Fix what can be auto-fixed
```

We use ESLint with:
- TypeScript ESLint parser
- React Hooks plugin (to keep your hooks in order)
- React Refresh plugin (for that sweet HMR)

### Testing

To run tests (when we add them):

```bash
npm test
```

Tests use:
- Vitest (Vite-native test runner)
- React Testing Library (for behavior-driven testing)
- jsdom (for DOM simulation)

## Project Structure for AI Agents

When working in this codebase, here's what you need to know:

### Routes (`src/routes/`)
TanStack Router uses file-based routing. Files in this directory are automatically discovered and turned into routes. It's like magic, but with more type safety!

### Components (`src/components/`)
Reusable React components. Keep them small, focused, and well-typed.

### Services (`src/services/`)
API calls and external service integrations. This is where you talk to the outside world.

### Hooks (`src/hooks/`)
Custom React hooks. Follow the "use" prefix convention or the React police will come for you.

### Types (`src/types/`)
TypeScript type definitions. Keep your types DRY (Don't Repeat Yourself) and well-documented.

## Common Operations

### Adding a New Route
1. Create a new file in `src/routes/` (e.g., `about.tsx`)
2. Export a Route component using TanStack Router's createFileRoute
3. The router will auto-discover it (check `routeTree.gen.ts` - it updates automatically!)

### Adding a New Component
1. Create in `src/components/` with PascalCase naming
2. Use TypeScript for props typing
3. Export as default (for consistency)

### Adding API Integration
1. Create a service function in `src/services/`
2. Use React Query's `useQuery` or `useMutation` hooks
3. Handle loading, error, and success states

## Environment Variables

Vite uses the `VITE_` prefix for environment variables accessible in the client:

```bash
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Troubleshooting

### "Module not found" errors?
```bash
npm install  # Turn it off and on again
```

### "Type errors" everywhere?
```bash
npm run build  # TypeScript will tell you what's wrong
```

### "Port 5173 is already in use"?
```bash
# Kill the rogue process or change the port in vite.config.ts
# Or just close the other 47 terminal tabs you have open
```

## Pro Tips for AI Agents

1. **Always run `npm install` first** - Dependencies change, and you don't want to work with stale packages
2. **Use `npm run dev` for testing** - The dev server has better error messages than production builds
3. **Lint early, lint often** - Fix linting issues before they multiply like gremlins
4. **TypeScript is your friend** - If it type-checks, you're 80% of the way there
5. **Check `routeTree.gen.ts`** - If routes aren't working, this generated file will tell you why

## Ready to Code?

You're all set! Your environment is configured and ready to build something awesome. Remember:

> "Code is never finished, only abandoned... or shipped to production at 4:59 PM on Friday." - Ancient Developer Proverb

Now go make something cool! 🚀
