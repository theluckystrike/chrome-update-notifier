# chrome-update-notifier

Notify users about extension updates in Chrome.

## Overview

chrome-update-notifier provides utilities to check for updates and notify users.

## Installation

```bash
npm install chrome-update-notifier
```

## Usage

```javascript
import { UpdateNotifier } from 'chrome-update-notifier';

const notifier = new UpdateNotifier();

notifier.on('update', (info) => {
  console.log('Update available:', info.version);
});

notifier.check();
```

## API

- `check()` - Check for updates
- `on('update', callback)` - Update available event

## License

MIT
