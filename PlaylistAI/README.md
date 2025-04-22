# PlaylistAI Mobile App

A React Native mobile application for generating AI-powered YouTube playlists based on user preferences.

## Tech Stack

- **React Native (Expo)**: Cross-platform mobile framework
- **TypeScript**: Strongly-typed JavaScript
- **React Navigation**: Navigation and routing
- **React Native Paper**: Material Design component library
- **ESLint/Prettier**: Code quality and formatting

## Features

- Create playlists based on type, language, and text description
- View and manage playlist history
- Preview generated playlists with thumbnail grid
- User settings management

## Project Structure

```
PlaylistAI/
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens
│   ├── navigation/          # Navigation configuration
│   ├── services/            # API services and data fetching
│   └── utils/               # Utility functions
├── assets/                  # Static assets like images
├── app.json                 # Expo configuration
├── App.tsx                  # Root component
├── babel.config.js          # Babel configuration
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.js             # ESLint configuration
└── .prettierrc.js           # Prettier configuration
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/playlist-ai.git
   cd PlaylistAI
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```
   npm start
   # or
   yarn start
   ```

4. Open the app:
   - Use the Expo Go app on your phone to scan the QR code, or
   - Press `i` to open in iOS simulator (macOS only)
   - Press `a` to open in Android emulator

## Current State

The app currently contains the UI for the core screens as specified in the requirements:
- Home/Playlist creation screen with type and language dropdowns and text input
- Settings screen for account management
- Playlist history screen
- Playlist preview screen with thumbnail grid

Backend integration for API calls and authentication will be implemented in future tasks.

## Next Steps

- Implement backend API integration for playlist generation
- Add authentication flow
- Set up offline capabilities
- Implement push notifications when playlists are ready 