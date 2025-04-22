# playlist.ai

An AI-powered YouTube playlist generator for iOS and Android.

## Project Overview

playlist.ai is a mobile application that allows users to create customized YouTube playlists based on their preferences. Users select a playlist type and language, provide a brief text prompt (25-50 words), and the app generates a curated YouTube playlist with 100+ relevant videos.

The application leverages OpenAI's API for understanding user prompts and YouTube's API for content discovery and playlist creation. All playlists are created as unlisted on a dedicated "Playlist.AI" YouTube account, with the option for users to be added as collaborators.

## Tech Stack

### Backend

- **FastAPI**: High-performance Python web framework for building APIs
- **PostgreSQL**: Relational database for storing user and playlist data
- **Celery**: Distributed task queue for handling asynchronous playlist generation
- **Redis**: In-memory data structure store used as a message broker and caching layer
- **Docker**: Containerization for consistent development and deployment environments
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment

### Mobile Application

- **React Native**: Cross-platform mobile framework for iOS and Android development
- **Redux**: State management library for JavaScript applications
- **React Navigation**: Routing and navigation library for React Native
- **Axios**: Promise-based HTTP client for API requests

### External APIs and Services

- **YouTube Data API v3**: For searching videos and creating playlists
- **OpenAI API**: For natural language processing and content matching
- **Firebase Authentication**: User authentication and management
- **Firebase Cloud Messaging**: Push notifications

## Prerequisites

- Python 3.9+
- Node.js 14+
- Docker and Docker Compose
- YouTube API credentials
- OpenAI API key
- Firebase project
