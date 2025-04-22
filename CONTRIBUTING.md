# Contributing to Playlist.AI

Thank you for your interest in contributing to Playlist.AI! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Please help us maintain a positive and inclusive environment. Be respectful of other contributors, use welcoming language, and accept constructive feedback.

## Development Workflow

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```
   git clone https://github.com/yourusername/playlist.ai.git
   cd playlist.ai
   ```
3. Add the upstream repository:
   ```
   git remote add upstream https://github.com/mainrepo/playlist.ai.git
   ```
4. Create a new branch:
   ```
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. Follow the code style guidelines
2. Write clear, commented, and testable code
3. Keep commits focused and atomic
4. Include tests when adding features
5. Update documentation as needed

### Commit Message Guidelines

Follow this format for commit messages:
```
feat(component): add new feature X

- Details about implementation
- Additional context
```

Types:
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools

### Testing

- Make sure all tests pass before submitting your changes
- Add new tests for new functionality

#### Backend Tests
```
cd backend
pytest
```

#### Mobile Tests
```
cd mobile
npm test
```

### Pull Request Process

1. Update your fork with the latest upstream changes:
   ```
   git fetch upstream
   git rebase upstream/main
   ```
2. Push your changes to your fork:
   ```
   git push origin feature/your-feature-name
   ```
3. Submit a pull request via GitHub
4. In your PR description:
   - Explain the changes you've made
   - Link to any related issues
   - Describe how to test your changes

### Code Review

All submissions require review. The maintainers will review your PR and may suggest changes.

## Development Environment Setup

### Backend

See the [README.md](README.md) for detailed backend setup instructions.

### Mobile

See the [README.md](README.md) for detailed mobile setup instructions.

## Coding Standards

### Python

- Follow PEP 8 style guide
- Use type hints where applicable
- Include docstrings for functions and classes
- Maximum line length of 100 characters

### JavaScript/TypeScript

- Follow ESLint configuration
- Use async/await over Promises where applicable
- Use TypeScript interfaces for complex objects
- Use functional components and hooks in React Native

## Reporting Bugs

When reporting bugs, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior and actual behavior
- Screenshots if applicable
- Environment details (OS, browser, device, etc.)

## Feature Requests

Feature requests are welcome. Please provide:

- A clear description of the feature
- The motivation behind the feature
- Any potential implementation details you can provide

Thank you for contributing to Playlist.AI! 