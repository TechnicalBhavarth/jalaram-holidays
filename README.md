# Jalaram Holidays Trip Finder

Coming soon: Jalaram Holidays Trip Finder.

## UI Setup

### shadcn/ui Configuration

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. The necessary dependencies have already been added to `package.json`:

#### Pre-installed Dependencies

**UI Framework:**
- `@radix-ui/react-dialog` - Modal dialogs and overlays
- `@radix-ui/react-slot` - Composition primitives
- `class-variance-authority` - CVA for component variants
- `clsx` - Utility for constructing className strings
- `tailwind-merge` - Merge Tailwind CSS classes without conflicts

**Animation & Icons:**
- `framer-motion` - Animation library for React
- `lucide-react` - Icon library

**Utility:**
- `tailwindcss-animate` - Animation utilities for Tailwind CSS

### Setup Process

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Component structure**:
   - Components will be added to the `components/` directory
   - Use `components/ui/` for shadcn/ui components
   - Use `components/` for custom components

3. **Adding shadcn/ui components**:
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```
   Example:
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   npx shadcn-ui@latest add dialog
   ```

4. **Utility functions**:
   - The `lib/utils.ts` file contains helper functions for className merging
   - Use the `cn()` function for conditional styling

### Development Notes

- Tailwind CSS is configured with animations support
- All shadcn/ui dependencies are pre-installed
- Import placeholders are added in `app/page.tsx` for UI development
- Follow the TODO comments in code files for implementation guidance

### Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Add shadcn/ui components as needed
npx shadcn-ui@latest add button card
```

## License

MIT
