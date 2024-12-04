# ctw (Conditional Tailwind)

A tiny, zero-dependency utility for conditionally creating Tailwind CSS styles.

## Features

- ⚡️ Zero dependencies
- 🪶 Lightweight (~300 bytes minified + gzipped)
- 🔍 Full TypeScript support
- 🎨 Perfect for component-based styling

## Installation

You can install `ctw` using your preferred package manager:

```bash
# npm
npm install ctw

# yarn
yarn add ctw

# pnpm
pnpm add ctw

# bun
bun add ctw
```

## Usage

```typescript
import { ctw } from 'ctw';

// Usage with strings
ctw('text-red-500', 'font-bold'); // 'text-red-500 font-bold'

// Usage with arrays
ctw(['hover:bg-gray-100', 'rounded-lg'], 'shadow-sm'); // 'hover:bg-gray-100 rounded-lg shadow-sm'

// Usage with boolean expressions
ctw(
  'px-4 py-2',                                  // Added by default
  isActive && 'bg-blue-500 text-white',         // Applied when isActive is true
  isDisabled && 'opacity-50 cursor-not-allowed' // Applied when isDisabled is true
);
```

## Tailwind Intellisense

To enable Tailwind Intellisense within Visual Studio Code, install the Tailwind CSS Intellisense Extension and modify the experimental class regex in your settings:

```json
"tailwindCSS.experimental.classRegex": [
  ["ctw\\((.*?)\\)", "['\"`]([^'\"`]*)['\"`]"]
]
```