# chrome-update-notifier — Version Detection and Migrations
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-update-notifier`

Install/update listeners, version-ordered migrations, first run detection, and install age tracking.

```typescript
import { UpdateNotifier } from 'chrome-update-notifier';
const notifier = new UpdateNotifier();
notifier.addMigration('1.2.0', async () => { /* migrate data */ });
notifier.listen({ onInstall: (v) => showWelcome(v), onUpdate: (prev, cur) => showChangelog(prev, cur) });
```
MIT License
