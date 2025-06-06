# Bottts Library Modernization Action Plan

## Overview
This plan outlines the complete modernization of the Bottts React component library to work with React 19.1, TypeScript 5.x, and modern development tooling. The goal is to create a library that can be seamlessly integrated into modern Next.js projects while maintaining backward compatibility where possible.

## Phase 1: Development Environment Setup

### 1.1 Package Manager Migration
- [ ] Replace `yarn.lock` with `pnpm-lock.yaml`
- [ ] Update scripts to use pnpm commands
- [ ] Configure `.npmrc` for pnpm workspace settings

### 1.2 TypeScript Configuration Modernization
- [ ] Upgrade TypeScript to 5.x
- [ ] Update `tsconfig.json` with modern compiler options:
  - Target ES2022 or later
  - Use module resolution "bundler"
  - Enable strict mode completely
  - Add path mapping for better imports
  - Configure for React 19 JSX transform

### 1.3 Build System Modernization
- [ ] Replace TSLint with ESLint + Prettier
- [ ] Add Rollup or Vite for modern bundling
- [ ] Configure dual ESM/CJS output
- [ ] Add TypeScript declaration generation
- [ ] Set up sourcemap generation

## Phase 2: Dependencies and Tooling

### 2.1 Core Dependencies Update
- [ ] Upgrade React peer dependency to `^19.1.0`
- [ ] Remove PropTypes (replaced by TypeScript)
- [ ] Update Lodash to latest or replace with native methods
- [ ] Add React 19 types

### 2.2 Development Dependencies
- [ ] Add ESLint with React 19 plugin
- [ ] Add Prettier for code formatting
- [ ] Add Husky for git hooks
- [ ] Add lint-staged for pre-commit checks
- [ ] Add Vitest for testing
- [ ] Add Storybook for component development

### 2.3 Build and Bundle Tools
- [ ] Add Rollup with TypeScript plugin
- [ ] Configure bundle analysis tools
- [ ] Add size-limit for bundle size monitoring
- [ ] Set up automated changelog generation

## Phase 3: Code Modernization

### 3.1 React Component Updates
- [ ] Convert class components to functional components with hooks
- [ ] Remove deprecated lifecycle methods (`componentWillMount`, `componentWillReceiveProps`)
- [ ] Replace Context API usage with modern React Context
- [ ] Remove PropTypes usage in favor of TypeScript
- [ ] Update to React 19's new JSX transform

### 3.2 TypeScript Improvements
- [ ] Add strict typing for all props and state
- [ ] Create proper type definitions for all options
- [ ] Add union types for component variants
- [ ] Implement proper generic typing
- [ ] Add JSDoc comments for better IntelliSense

### 3.3 Modern React Patterns
- [ ] Implement proper forwardRef for component refs
- [ ] Add proper displayName for debugging
- [ ] Use React.memo for performance optimization where appropriate
- [ ] Implement proper error boundaries if needed

## Phase 4: API Design Improvements

### 4.1 Component API Modernization
- [ ] Create separate typed interfaces for each component variant
- [ ] Implement polymorphic component patterns where appropriate
- [ ] Add compound component patterns for better composition
- [ ] Improve prop naming consistency

### 4.2 Tree Shaking Optimization
- [ ] Restructure exports for better tree shaking
- [ ] Create individual component exports
- [ ] Minimize barrel exports
- [ ] Optimize bundle splitting

### 4.3 Performance Optimizations
- [ ] Lazy load component variants
- [ ] Implement SVG optimization
- [ ] Add dynamic imports for large components
- [ ] Optimize re-renders with proper memoization

## Phase 5: Developer Experience

### 5.1 Documentation
- [ ] Update README with modern usage examples
- [ ] Add TypeScript usage examples
- [ ] Create comprehensive API documentation
- [ ] Add migration guide from v1

### 5.2 Storybook Integration
- [ ] Set up Storybook 8.x
- [ ] Create stories for all component variants
- [ ] Add controls for interactive testing
- [ ] Implement visual regression testing

### 5.3 Testing Infrastructure
- [ ] Set up Vitest for unit testing
- [ ] Add React Testing Library
- [ ] Create comprehensive test coverage
- [ ] Add visual regression tests

## Phase 6: Next.js Compatibility

### 6.1 SSR/SSG Support
- [ ] Ensure components work with server-side rendering
- [ ] Handle SVG rendering in Node.js environment
- [ ] Add proper client-side hydration support
- [ ] Test with Next.js app directory

### 6.2 Bundle Optimization
- [ ] Ensure proper ESM support for Next.js
- [ ] Optimize for Next.js bundle analyzer
- [ ] Test tree shaking with Next.js builds
- [ ] Verify dynamic imports work correctly

## Phase 7: Publishing and Distribution

### 7.1 Package Configuration
- [ ] Update package.json with modern fields
- [ ] Add proper exports map for Node.js
- [ ] Configure dual package.json approach if needed
- [ ] Add engines field for Node.js/npm versions

### 7.2 Release Process
- [ ] Set up semantic versioning
- [ ] Configure automated releases with GitHub Actions
- [ ] Add changelog generation
- [ ] Set up npm provenance

## File Structure Changes

```
src/
├── components/           # Main components
│   ├── Bot/
│   │   ├── Bot.tsx
│   │   ├── Bot.types.ts
│   │   └── index.ts
│   ├── Piece/
│   │   ├── Piece.tsx
│   │   ├── Piece.types.ts
│   │   └── index.ts
│   └── parts/           # Individual bot parts
│       ├── Eyes/
│       ├── Face/
│       ├── Mouth/
│       └── ...
├── types/               # Shared TypeScript types
│   ├── BotOptions.ts
│   └── index.ts
├── utils/               # Utility functions
│   └── index.ts
├── hooks/               # Custom React hooks
│   └── index.ts
└── index.ts             # Main export
```

## Breaking Changes to Consider

### Major Version (v2.0.0)
- Minimum React version: 19.1.0
- Minimum Node.js version: 18.0.0
- Removed PropTypes support
- Updated component APIs for better TypeScript support
- Changed import paths for tree shaking

### Migration Path
- Provide automated migration scripts where possible
- Comprehensive migration documentation
- Temporary compatibility layer for gradual migration

## Timeline Estimate

- **Phase 1-2**: 2-3 days (Setup and dependencies)
- **Phase 3**: 3-4 days (Code modernization)
- **Phase 4**: 2-3 days (API improvements)
- **Phase 5**: 2-3 days (Developer experience)
- **Phase 6**: 1-2 days (Next.js compatibility)
- **Phase 7**: 1 day (Publishing setup)

**Total estimated time**: 11-18 days

## Success Metrics

- [ ] Bundle size reduction of at least 20%
- [ ] TypeScript coverage of 100%
- [ ] All tests passing with >90% coverage
- [ ] Successful integration with Next.js 15+
- [ ] Storybook stories for all components
- [ ] Zero security vulnerabilities
- [ ] Tree shaking working properly
- [ ] SSR/SSG compatibility confirmed