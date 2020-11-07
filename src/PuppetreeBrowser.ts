import { Browser } from "puppeteer";
import PuppetreePage from "./HybridPage";

class PuppetreeBrowser {
    private browser: Browser;
    public addListener;
    public browserContexts;
    public close;
    public createIncognitoBrowserContext;
    public defaultBrowserContext;
    public disconnect;
    public emit;
    public isConnected;
    public listenerCount;
    public off;
    public on;
    public once;
    public pages;
    public process;
    public removeAllListeners;
    public removeListener;
    public target;
    public targets;
    public userAgent;
    public version;
    public waitForTarget;
    public wsEndpoint;

    constructor(browser: Browser) {
        this.browser = browser;
        this.addListener = this.browser.addListener.bind(this.browser) as typeof browser.addListener;
        this.browserContexts = this.browser.browserContexts.bind(this.browser) as typeof browser.browserContexts;
        this.close = this.browser.close.bind(this.browser) as typeof browser.close;
        this.createIncognitoBrowserContext = this.browser.createIncognitoBrowserContext.bind(this.browser) as typeof browser.createIncognitoBrowserContext;
        this.defaultBrowserContext = this.browser.defaultBrowserContext.bind(this.browser) as typeof browser.defaultBrowserContext;
        this.disconnect = this.browser.disconnect.bind(this.browser) as typeof browser.disconnect;
        this.emit = this.browser.emit.bind(this.browser) as typeof browser.emit;
        this.isConnected = this.browser.isConnected.bind(this.browser) as typeof browser.isConnected;
        this.listenerCount = this.browser.listenerCount.bind(this.browser) as typeof browser.listenerCount
        this.off = this.browser.off.bind(this.browser) as typeof browser.off;
        this.on = this.browser.on.bind(this.browser) as typeof browser.on;
        this.once = this.browser.once.bind(this.browser) as typeof browser.once;
        this.pages = this.browser.pages.bind(this.browser) as typeof browser.pages;
        this.process = this.browser.process.bind(this.browser) as typeof browser.process;
        this.removeAllListeners = this.browser.removeAllListeners.bind(this.browser) as typeof browser.removeAllListeners;
        this.removeListener = this.browser.removeListener.bind(this.browser) as typeof browser.removeListener;
        this.target = this.browser.target.bind(this.browser) as typeof browser.target;
        this.targets = this.browser.targets.bind(this.browser) as typeof browser.targets;
        this.userAgent = this.browser.userAgent.bind(this.browser) as typeof browser.userAgent;
        this.version = this.browser.version.bind(this.browser) as typeof browser.version;
        this.waitForTarget = this.browser.waitForTarget.bind(this.browser) as typeof browser.waitForTarget;
        this.wsEndpoint = this.browser.wsEndpoint.bind(this.browser) as typeof browser.wsEndpoint;
    }

    async newPage(): Promise<PuppetreePage> {
        const test = new PuppetreePage(await this.browser.newPage());
        return new PuppetreePage(await this.browser.newPage());
    }

}

export default PuppetreeBrowser;