# Bottts (Modern Fork)

A modern React component library for generating customizable bot avatars. Built with TypeScript, React 19, and designed for Next.js compatibility.

> 🌟 This is a modernized fork of the original [bottts](https://github.com/mether/bottts) library by [Mackenzie Etherington](https://github.com/mether), updated for React 19 and modern development practices.

<p align="center">
  <img src="./bottts-example.png" alt="Bottts Example" width="300" height="300" />
</p>

## ✨ Features

- 🚀 **Modern React 19**: Built with the latest React features and patterns
- 📱 **Next.js Ready**: Full SSR/SSG support for modern applications  
- 🎨 **Highly Customizable**: Hundreds of combinations for unique avatars
- 📦 **TypeScript First**: Complete type safety and IntelliSense support
- 🌳 **Tree Shakeable**: Import only what you need
- 📖 **Storybook**: Interactive component documentation
- ✅ **Well Tested**: Comprehensive test coverage
- 🔧 **Zero Dependencies**: Minimal runtime footprint

## 📦 Installation

```bash
# npm
npm install @plasticbugs/bottts

# yarn  
yarn add @plasticbugs/bottts

# pnpm
pnpm add @plasticbugs/bottts
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { Bot } from '@plasticbugs/bottts'

function MyComponent() {
  return (
    <Bot
      botStyle="Circle"
      circleColor="BlueGrey300"
      topType="Bulb02"
      topColor="BlueGrey500"
      faceType="Square01"
      faceColor="BlueGrey500"
      eyeType="Round"
      mouthType="Square01"
      sideType="Square"
      sidesColor="BlueGrey500"
      size={240}
    />
  )
}
```

### Using Individual Pieces

```tsx
import { Piece } from '@plasticbugs/bottts'

function BotParts() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Piece
        pieceType="top"
        botStyle="Circle"
        topType="Bulb02"
        topColor="BlueGrey500"
        pieceSize={100}
      />
      <Piece
        pieceType="face"
        botStyle="Circle"
        faceType="Square01"
        faceColor="BlueGrey500"
        pieceSize={100}
      />
      <Piece
        pieceType="eye"
        botStyle="Circle"
        eyeType="Happy"
        pieceSize={100}
      />
    </div>
  )
}
```

### With Context for Dynamic Updates

```tsx
import { BotProvider, useBotContext } from '@plasticbugs/bottts'

function BotCustomizer() {
  const { eyeType, updateOptions } = useBotContext()
  
  return (
    <div>
      <button 
        onClick={() => updateOptions({ eyeType: 'Happy' })}
      >
        Make Happy
      </button>
      <p>Current eyes: {eyeType}</p>
    </div>
  )
}

function App() {
  return (
    <BotProvider initialOptions={{ botStyle: 'Circle' }}>
      <Bot />
      <BotCustomizer />
    </BotProvider>
  )
}
```

## 🎨 Customization Options

### Bot Styles
- `Circle` - Circular background
- `Transparent` - No background

### Available Parts

| Part | Options |
|------|---------|
| **Top** | Antenna, AntennaCrooked, Bulb01, Bulb02, GlowingBulb01, GlowingBulb02, Horns, Lights, Plankton, Pyramid, Radar |
| **Face** | Arturito, RoboCop, Round01, Round02, Square01, Square02, Square03, Square04 |
| **Eyes** | Arturito, Bulging, Dizzy, Eva, Frame01, Frame02, Glow, Hal, Happy, Hearts, RoboCop, Round, RoundFrame01, RoundFrame02, Sensor, Shades |
| **Mouth** | Arturito, Bite, Diagram, Grill01, Grill02, Grill03, RoboCop, Smile01, Smile02, Square01, Square02 |
| **Sides** | Antenna01, Antenna02, Cables01, Cables02, Round, Square, SquareAsymmetric |

### Colors
- Blue variants: `Blue01`, `Blue02`, `Blue03`
- BlueGrey variants: `BlueGrey01`, `BlueGrey02`, `BlueGrey03`, `BlueGrey300`, `BlueGrey500`
- Orange variants: `Orange01`, `Orange02`, `Orange03`  
- Red variants: `Red01`, `Red02`, `Red03`
- Yellow variants: `Yellow01`, `Yellow02`, `Yellow03`

## 📚 API Reference

### `Bot` Component

```tsx
interface BotProps {
  botStyle: 'Circle' | 'Transparent'
  circleColor?: CircleColor
  topType?: TopType
  topColor?: TopColor
  faceType?: FaceType
  faceColor?: FaceColor
  textureType?: TextureType
  eyeType?: EyeType
  mouthType?: MouthType
  sideType?: SideType
  sidesColor?: SidesColor
  size?: number
  style?: React.CSSProperties
  className?: string
}
```

### `Piece` Component

```tsx
interface PieceProps extends BotOptions {
  pieceType: 'top' | 'face' | 'eye' | 'mouth' | 'sides'
  pieceSize?: string | number
  style?: React.CSSProperties
  className?: string
}
```

### `BotProvider` & `useBotContext`

```tsx
// Provider
interface BotProviderProps {
  children: ReactNode
  initialOptions?: Partial<BotOptions>
}

// Hook return type
interface BotContextValue extends BotOptions {
  updateOptions: (updates: Partial<BotOptions>) => void
  resetOptions: () => void
}
```

## 🏗️ Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm run dev

# Run tests
pnpm run test

# Run Storybook
pnpm run storybook

# Build library
pnpm run build

# Run linting
pnpm run lint

# Format code
pnpm run format
```

## 🧪 Testing

The library includes comprehensive tests using Vitest and React Testing Library:

```bash
# Run tests
pnpm run test

# Run tests with UI
pnpm run test:ui

# Run tests with coverage
pnpm run test:coverage
```

## 📖 Storybook

Interactive component documentation is available via Storybook:

```bash
# Start Storybook development server
pnpm run storybook

# Build static Storybook
pnpm run build-storybook
```

## 🚀 Next.js Integration

Bottts is fully compatible with Next.js applications:

```tsx
// pages/index.tsx or app/page.tsx
import { Bot } from '@plasticbugs/bottts'

export default function HomePage() {
  return (
    <div>
      <h1>My Bot</h1>
      <Bot
        botStyle="Circle"
        faceType="Square01"
        eyeType="Happy"
        mouthType="Smile01"
        size={200}
      />
    </div>
  )
}
```

### SSR/SSG Support

The library is designed to work seamlessly with server-side rendering:

- No client-side only dependencies
- Proper SVG rendering in Node.js environments  
- Hydration-safe components

## 🔧 TypeScript

Bottts is built with TypeScript and provides complete type definitions:

```tsx
import type { BotProps, PieceProps, BotStyle, EyeType } from '@plasticbugs/bottts'

const botConfig: BotProps = {
  botStyle: 'Circle', // ✅ Type-safe
  eyeType: 'Round',   // ✅ Autocomplete available
  // invalidProp: true // ❌ TypeScript error
}
```

## 🎨 Styling

### Custom Styles

```tsx
<Bot
  botStyle="Circle"
  style={{ 
    border: '2px solid #333',
    borderRadius: '8px',
    background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)' 
  }}
  className="my-custom-bot"
/>
```

### CSS Classes

The components include helpful CSS classes for styling:

- `.bottt-svg` - Main SVG container
- `.bottt-piece` - Individual piece container
- `.bottt-piece--top` - Top piece specific
- `.bottt-piece--face` - Face piece specific
- etc.

## 🌟 Migration from v1.x

If you're upgrading from the original version, see our [Migration Guide](./MIGRATION.md) for breaking changes and upgrade instructions.

### Key Changes

- ✅ React 19 support
- ✅ Modern hooks-based architecture  
- ✅ TypeScript-first design
- ✅ Tree-shakeable exports
- ✅ Next.js compatibility
- ❌ Dropped React < 19 support
- ❌ Removed PropTypes (use TypeScript)
- ❌ Changed import structure

## 📄 License

MIT © [Mackenzie Etherington](https://github.com/mether)

## 🙏 Credits

- Original design by [Pablo Stanley](https://twitter.com/pablostanley)
- Based on the [Bottts](https://bottts.com/) Sketch library
- Inspired by [Avataaars](https://github.com/fangpenlin/avataaars) by [Fang-Pen Lin](https://twitter.com/fangpenlin)
- Modernized for React 19 and Next.js

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

Made with ❤️ for the React community