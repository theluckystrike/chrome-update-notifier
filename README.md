# chrome-update-notifier

[![npm version](https://img.shields.io/npm/v/chrome-update-notifier)](https://npmjs.com/package/chrome-update-notifier)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-update-notifier/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-update-notifier/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-update-notifier?style=social)](https://github.com/theluckystrike/chrome-update-notifier)

> Notify users about extension updates in Chrome.

**chrome-update-notifier** provides utilities to check for updates and notify users. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Update Checking** - Check for new versions
- ✅ **User Notifications** - Notify users of updates
- ✅ **Changelog Display** - Show what's new
- ✅ **TypeScript Support** - Full type definitions included

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

| Method | Description |
|--------|-------------|
| `check()` | Check for updates |
| `on('update', callback)` | Update available event |
| `on('no-update', callback)` | No update event |

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/update-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/update-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage
- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Notifications

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)
