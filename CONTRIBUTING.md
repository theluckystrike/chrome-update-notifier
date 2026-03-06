# Contributing to chrome-update-notifier

Thank you for your interest in contributing to chrome-update-notifier. This document outlines the process for contributing to this project.

## Reporting Issues

Before opening a new issue, please search existing issues to avoid duplicates.

When reporting a bug, include:
- A clear description of the issue
- Steps to reproduce the problem
- Your environment details (Node version, Chrome version, OS)
- Any relevant error messages or logs

For feature requests, explain:
- What you would like to see added
- Why this feature would be useful
- Any alternative solutions you have considered

## Development Workflow

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch from main
4. Make your changes
5. Test your changes
6. Commit with a clear message
7. Push to your fork
8. Submit a pull request

### Setting Up Development Environment

```bash
git clone https://github.com/theluckystrike/chrome-update-notifier.git
cd chrome-update-notifier
npm install
```

### Building

```bash
npm run build
```

This compiles TypeScript to JavaScript in the dist directory.

## Code Style

This project follows standard TypeScript conventions:
- Use TypeScript for all new code
- Run type checking with `npx tsc --noEmit` before committing
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep lines under 100 characters when practical

## Testing

Before submitting changes, ensure the code compiles without errors:

```bash
npm run build
```

Verify type safety:

```bash
npx tsc --noEmit
```

## License

By contributing to chrome-update-notifier, you agree that your contributions will be licensed under the MIT License.
