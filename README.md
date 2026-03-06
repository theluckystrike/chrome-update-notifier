# chrome-update-notifier

Update notification system for Chrome extensions. Provides version detection, changelog display, migration hooks, and first-run welcome for Manifest V3.

## Installation

```bash
npm install chrome-update-notifier
```

## Overview

chrome-update-notifier is a TypeScript library that helps Chrome extension developers handle installation and update events. It provides utilities to detect when users install or update your extension, run migration code between versions, and track installation dates.

## API Reference

### UpdateNotifier Class

```typescript
import { UpdateNotifier } from 'chrome-update-notifier';

const notifier = new UpdateNotifier();
```

#### Methods

**listen(handlers)**

Listen for install and update events from Chrome.

```typescript
notifier.listen({
  onInstall: (version: string) => {
    console.log('Extension installed:', version);
  },
  onUpdate: (previousVersion: string, currentVersion: string) => {
    console.log(`Updated from ${previousVersion} to ${currentVersion}`);
  }
});
```

**addMigration(version, handler)**

Register a migration function that runs when updating to a specific version.

```typescript
notifier.addMigration('2.0.0', async () => {
  // Migrate data from v1 to v2
  await migrateUserData();
});
```

**static getVersion()**

Get the current extension version from manifest.

```typescript
const version = UpdateNotifier.getVersion();
```

**static async getInstallDate()**

Get the timestamp of when the extension was first installed.

```typescript
const timestamp = await UpdateNotifier.getInstallDate();
```

**static async isFirstRun()**

Check if this is the first time the extension is running.

```typescript
const isFirstRun = await UpdateNotifier.isFirstRun();
```

**static async getDaysSinceInstall()**

Get the number of days since the extension was installed.

```typescript
const days = await UpdateNotifier.getDaysSinceInstall();
```

## Usage Example

```typescript
import { UpdateNotifier } from 'chrome-update-notifier';

const notifier = new UpdateNotifier();

// Register migrations
notifier.addMigration('1.1.0', async () => {
  // Handle data schema changes
});

notifier.addMigration('2.0.0', async () => {
  // Handle major version changes
});

// Listen for events
notifier.listen({
  onInstall: (version) => {
    console.log('Welcome! Version:', version);
    // Show first-run onboarding
  },
  onUpdate: (prev, current) => {
    console.log(`Updated from ${prev} to ${current}`);
    // Show changelog
  }
});
```

## Requirements

- TypeScript 5.x
- Chrome Extensions API (Manifest V3)
- Chrome browser or Chromium-based browsers

## Related Packages

- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage utilities
- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Toast notification system

## About

chrome-update-notifier is maintained by theluckystrike and is part of the zovo.one developer tools ecosystem. zovo.one provides utilities and extensions for modern web development.

## License

MIT
