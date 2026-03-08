# Woof Korean Academy

A 3D Korean learning game built with VIVERSE platform. Learn Korean with cute doggy teachers in an immersive virtual campus!

## 🎯 Project Overview

- **Genre**: Educational 3D Web Game
- **Target Users**: Anyone who wants to learn Korean
- **Platform**: VIVERSE (WebGL)
- **Tech Stack**: Three.js + VIVERSE SDK

## 🎮 Core Gameplay

Players enter the "Woof Korean Academy" virtual campus and learn Korean by interacting with dog NPC teachers:

| Scene | Learning Content | Game Mechanic |
|-------|------------------|---------------|
| Classroom | Korean Alphabet (한글) | Spelling Game |
| Café | Daily Conversations | Dialogue Choices |
| Library | Vocabulary | Card Matching |
| Playground | Comprehensive Quiz | Multiplayer Q&A |

## 🐕 Characters

- **Shiba Teacher (시바쌤)** - Beginner Korean, friendly and gentle
- **Husky Teacher (허스키쌤)** - Intermediate conversations, fun and energetic
- **Corgi Teacher (코기쌤)** - Advanced challenges, strict and serious

## 🛠️ Tech Stack

### VIVERSE SDK Integration

| SDK | Purpose |
|-----|---------|
| Login & Authentication | User login, progress saving |
| Avatar SDK | Player avatar customization |
| Leaderboard SDK | Learning leaderboard |
| Matchmaking & Networking | Multiplayer classroom, real-time battles |

### Project Structure

```
capstone/
├── README.md                 # Project documentation
├── docs/
│   ├── GDD.md               # Game Design Document
│   └── TECHNICAL.md         # Technical Specification
├── src/
│   ├── main.js              # Entry point
│   ├── game.js              # Game logic
│   ├── scene.js             # 3D scene
│   ├── lessons.js           # Korean lessons
│   ├── viverse.js           # VIVERSE SDK wrapper
│   └── audio.js             # Audio manager
└── index.html               # Main HTML
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Publish to VIVERSE
npx @viverse/cli app publish ./dist --app-id 6h77ztr367
```

## � Links

- [Live Demo](https://worlds.viverse.com/eG8w4Qx)
- [Game Design Document (GDD)](./docs/GDD.md)
- [Technical Specification](./docs/TECHNICAL.md)
- [VIVERSE Developer Docs](https://docs.viverse.com/developer-tools)

## 📝 License

MIT License - Academic Project
