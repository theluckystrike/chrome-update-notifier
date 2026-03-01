/**
 * Update Notifier — Version detection, changelog, and migration hooks
 */
export class UpdateNotifier {
    private migrations = new Map<string, () => Promise<void>>();

    /** Listen for install/update events */
    listen(handlers: { onInstall?: (version: string) => void; onUpdate?: (prev: string, current: string) => void }): void {
        chrome.runtime.onInstalled.addListener(async (details) => {
            const version = chrome.runtime.getManifest().version;
            if (details.reason === 'install') {
                await chrome.storage.local.set({ __installed_version__: version, __install_date__: Date.now() });
                handlers.onInstall?.(version);
            } else if (details.reason === 'update' && details.previousVersion) {
                await this.runMigrations(details.previousVersion, version);
                await chrome.storage.local.set({ __installed_version__: version });
                handlers.onUpdate?.(details.previousVersion, version);
            }
        });
    }

    /** Register a migration for a specific version */
    addMigration(version: string, handler: () => Promise<void>): this {
        this.migrations.set(version, handler);
        return this;
    }

    /** Run migrations between versions */
    private async runMigrations(fromVersion: string, toVersion: string): Promise<void> {
        const sorted = Array.from(this.migrations.keys()).sort(this.compareVersions);
        for (const ver of sorted) {
            if (this.compareVersions(ver, fromVersion) > 0 && this.compareVersions(ver, toVersion) <= 0) {
                await this.migrations.get(ver)!();
            }
        }
    }

    /** Get current version */
    static getVersion(): string { return chrome.runtime.getManifest().version; }

    /** Get install date */
    static async getInstallDate(): Promise<number> {
        const result = await chrome.storage.local.get('__install_date__');
        return result.__install_date__ || 0;
    }

    /** Check if first run */
    static async isFirstRun(): Promise<boolean> {
        const result = await chrome.storage.local.get('__installed_version__');
        return !result.__installed_version__;
    }

    /** Get days since install */
    static async getDaysSinceInstall(): Promise<number> {
        const installDate = await this.getInstallDate();
        return installDate ? Math.floor((Date.now() - installDate) / 86400000) : 0;
    }

    private compareVersions(a: string, b: string): number {
        const pa = a.split('.').map(Number);
        const pb = b.split('.').map(Number);
        for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
            const diff = (pa[i] || 0) - (pb[i] || 0);
            if (diff !== 0) return diff;
        }
        return 0;
    }
}
