# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0-alpha.5] - 2025-06-03
- Feature complete
- Remove Camo and Grunge textures to reduce bundle size
- Fix BotContext to make it reactive

## [2.0.0-alpha.1] - 2025-06-03

### 🚀 Added
- **Modern React 19 Support**: Completely rewritten for React 19.1+ with modern hooks
- **TypeScript First**: Full TypeScript rewrite with complete type safety
- **Next.js Compatibility**: Built-in SSR/SSG support for modern applications
- **Tree Shaking**: Optimized imports and bundle splitting
- **Storybook Integration**: Interactive component documentation
- **Comprehensive Testing**: Vitest + React Testing Library setup
- **Modern Build System**: Rollup-based build with ESM/CJS dual output
- **Development Tools**: ESLint 9, Prettier, Husky git hooks
- **pnpm Support**: Modern package manager with workspace support

### 🎨 Enhanced
- **Component API**: Cleaner, more intuitive prop interfaces
- **Context System**: React Context-based state management
- **Accessibility**: Improved ARIA labels and semantic markup
- **Performance**: Optimized re-renders with React.memo and proper memoization
- **Developer Experience**: Better IntelliSense and autocomplete

### 💥 Breaking Changes
- **Minimum React Version**: Now requires React 19.1+
- **Node.js Version**: Requires Node.js 18+
- **Import Structure**: New named exports structure
- **PropTypes Removed**: Use TypeScript types instead
- **Legacy Context**: Replaced with modern React Context
- **Build Output**: New ESM/CJS dual package structure

### 🗑️ Removed
- PropTypes dependency
- Legacy class component patterns
- Old selector/option system
- React < 19 support

### 🔧 Technical
- Upgraded to TypeScript 5.7+
- Modern build toolchain with Rollup
- ESLint 9 flat config
- Vitest for testing
- Storybook 8.x for documentation
- GitHub Actions CI/CD pipeline

### 📚 Documentation
- Complete README overhaul
- TypeScript usage examples
- Next.js integration guide
- Migration guide from v1.x
- Comprehensive Storybook stories

---

## [1.0.11] - Previous Release

See git history for v1.x changelog.

### Legacy Features (v1.x)
- React 16+ support
- Class-based components
- PropTypes validation
- TSLint configuration
- Yarn package management

[Unreleased]: https://github.com/mether/bottts/compare/v2.0.0-alpha.1...HEAD
[2.0.0-alpha.1]: https://github.com/mether/bottts/compare/v1.0.11...v2.0.0-alpha.1