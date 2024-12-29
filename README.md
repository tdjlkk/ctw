# CTW (Conditional Tailwind)

A lightweight and performant utility for conditionally joining Tailwind CSS classes.

## Why CTW?

- 🪶 **Lightweight**: Tiny footprint with zero dependencies.
- ⚡ **Performant**: Optimized for speed with minimal runtime overhead.
- 🧩 **Flexible**: Handles strings, arrays, and conditional expressions seamlessly.
- 🎯 **TypeScript-First**: Full TypeScript support with type definitions.
- 🎨 **Tailwind-Focused**: Perfect companion for Tailwind CSS projects (but not limited to it).

## Installation

```bash
# npm
npm install ctw

# pnpm
pnpm add ctw

# yarn
yarn add ctw

# bun
bun add ctw
```

## Usage

```typescript
import { ctw } from 'ctw'; // or import ctw from 'ctw';

// Basic Usage
ctw('flex items-center', 'p-4');
// => "flex items-center p-4"

// Conditional Classes
ctw(
  'text-sm',
  isLarge && 'font-bold',
  isPrimary && 'text-blue-500'
);
// => "text-sm font-bold" (if isLarge is true and isPrimary is false)

// With Arrays of Classes
ctw(
  "border rounded",
  variant === "primary" && color === "default" && [
    "text-neutral-100 bg-neutral-900",
    "hover:bg-neutral-800",
  ]
);
// => "border rounded text-neutral-100 bg-neutral-900 hover:bg-neutral-800" (if variant is "primary" and color is "default")
```

## Tailwind CSS IntelliSense

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["ctw\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
}
```
