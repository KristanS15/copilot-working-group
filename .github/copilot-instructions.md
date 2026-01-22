# GitHub Copilot Instructions for This Repository 🎯🤖

Welcome to the Copilot Working Group repository! Here are some ~totally serious~ instructions to help you navigate this codebase like a pro (or at least like someone who knows what they're doing).

## Project Overview

This is a React + TypeScript + Vite application that uses TanStack Router and React Query. Think of it as a modern web app that's cooler than your dad's jQuery site from 2010 (no offense, dad).

## Tech Stack (aka The Cool Kids Club)

- **React 19** - Because we like to live dangerously with the latest features
- **TypeScript** - We believe types are friends, not food
- **Vite** - Fast enough to make Webpack jealous
- **TanStack Router** - File-based routing that just works™
- **TanStack React Query** - Server state management that handles cache invalidation (one of the hardest problems in computer science, after naming things and off-by-one errors)
- **ESLint** - Our friendly neighborhood code enforcer

## Code Style & Conventions

### General Wisdom
- **Always use TypeScript** - If it compiles, it probably works. If it doesn't compile, well, that's why we have TypeScript! 🎉
- **Functional components only** - Class components are so 2018. We don't talk about them anymore.
- **React Compiler is enabled** - This means you can be slightly lazier with memoization. The compiler's got your back!

### Testing Philosophy
- **Behavior-driven tests** - Use React Testing Library queries like `getByRole`, `getByText`, `getByLabelText`
- **Avoid implementation details** - Test what the user sees, not how React renders it
- **Use user-event** - Simulate real user interactions, not synthetic events from the Matrix

### Naming Conventions
- **Components**: PascalCase (e.g., `FancyButton.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useAwesomeData.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with descriptive names (e.g., `UserProfile`, not `UP` - we're not running a railroad here)

### File Organization
```
src/
├── components/     # Reusable UI components (the LEGO blocks)
├── routes/         # Route components (TanStack Router auto-discovers these like magic ✨)
├── hooks/          # Custom hooks (where the real magic happens)
├── services/       # API calls and external integrations
├── contexts/       # React contexts (use sparingly, we're not animals)
├── types/          # TypeScript type definitions
└── test/           # Test setup and utilities
```

## Common Tasks

### Running the App
```bash
npm run dev  # Starts the dev server. Your app will be at http://localhost:5173
```

### Building for Production
```bash
npm run build  # TypeScript check + Vite build. Fingers crossed! 🤞
```

### Linting
```bash
npm run lint      # Find out what you did wrong
npm run lint:fix  # Let the robots fix your mistakes
```

### Testing
```bash
npm test  # Run the test suite (when we add tests, they'll be here!)
```

## Important Notes

- **Don't commit to main** - Use feature branches like a civilized developer
- **TanStack Router auto-generates routeTree.gen.ts** - Don't edit this file manually unless you enjoy pain
- **React 19 is bleeding edge** - Some packages might complain. That's normal. We like living on the edge.
- **Use the React Compiler wisely** - It's smart, but not psychic. Write clean code and it'll optimize the heck out of it.

## When Adding New Features

1. **Think about the user first** - What are they trying to do?
2. **Keep it simple** - YAGNI (You Ain't Gonna Need It) is your friend
3. **Type everything** - Future you will thank present you
4. **Test it** - Behavior-driven tests using React Testing Library
5. **Lint it** - Run `npm run lint:fix` before committing

## Pro Tips for Copilot

- When suggesting route components, remember they go in `src/routes/` and TanStack Router will auto-discover them
- When creating API calls, put them in `src/services/` 
- Always prefer `getByRole` over `getByTestId` in tests - accessibility matters!
- If you're generating a form, remember to use proper semantic HTML. `<div>` is not a button, no matter how much CSS you throw at it.

## Words of Wisdom

> "Code is like humor. When you have to explain it, it's bad." - Cory House

> "First, solve the problem. Then, write the code." - John Johnson

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler

Now go forth and code something awesome! 🚀

---

*P.S. If something breaks, it's probably a feature, not a bug. Just rebrand it accordingly.*
