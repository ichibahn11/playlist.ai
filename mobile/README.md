# Playlist.AI Mobile Application

This directory contains the React Native mobile application for Playlist.AI, supporting both iOS and Android platforms.

## Tech Stack

- **React Native**: Cross-platform mobile framework
- **TypeScript**: Statically typed JavaScript
- **React Navigation**: Routing and navigation
- **Redux/Context API**: State management
- **React Native Paper**: UI component library
- **Axios**: HTTP client
- **Jest**: Testing framework
- **Firebase**: Authentication and push notifications

## Directory Structure

```
mobile/
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens
│   ├── navigation/          # Navigation configuration
│   ├── services/            # API services and data fetching
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── store/               # State management (Redux or Context)
│   └── App.tsx              # Root component
├── android/                 # Android-specific code
├── ios/                     # iOS-specific code
├── __tests__/               # Test files
├── .eslintrc.js             # ESLint configuration
├── .prettierrc.js           # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm or yarn
- CocoaPods (for iOS)
- Android Studio (for Android)
- Xcode (for iOS, macOS only)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Install iOS dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of the mobile directory
   ```
   API_URL=http://localhost:8000
   ```

### Running the App

#### iOS
```bash
npm run ios
# or
yarn ios
```

#### Android
```bash
npm run android
# or
yarn android
```

#### Development Server
```bash
npm start
# or
yarn start
```

## Core Features

- **Authentication**: User login, registration, and profile management
- **Playlist Creation**: Generate playlists based on user inputs
- **Playlist History**: View and manage previously created playlists
- **Settings**: Manage user preferences and application settings
- **Offline Support**: View previously generated playlists without an internet connection

## Testing

Run tests with Jest:
```bash
npm test
# or
yarn test
```

Run tests with coverage:
```bash
npm test -- --coverage
# or
yarn test --coverage
```

## Building for Production

### iOS
```bash
npm run build:ios
# or
yarn build:ios
```

### Android
```bash
npm run build:android
# or
yarn build:android
```

## Troubleshooting

### Common Issues

- **Metro Bundler Issues**: Clear cache and restart
  ```bash
  npm start -- --reset-cache
  ```

- **iOS Build Errors**: Check CocoaPods installation and run pod install
  ```bash
  cd ios && pod install
  ```

- **Android Gradle Issues**: Clean and rebuild
  ```bash
  cd android && ./gradlew clean
  ```

### Debug Tools

- **React Native Debugger**: For debugging React and Redux
- **Flipper**: For inspecting network, storage, and UI 