import { Page } from "puppeteer";
import HybridElement from "./HybridElement";

class HybridPage {
    private page: Page;
    public $;
    public $$;
    public $$eval;
    public $eval;
    public $x;
    public accessibility;
    public addListener;
    public addScriptTag;
    public addStyleTag;
    public authenticate;
    public bringToFront;
    public browser;
    public browserContext;
    public click;
    public close;
    public content;
    public cookies;
    public coverage;
    public deleteCookie;
    public emit;
    public emulate;
    public emulateIdleState;
    public emulateMediaFeatures;
    public emulateMediaType;
    public emulateTimezone;
    public evaluate;
    public evaluateHandle;
    public evaluateOnNewDocument;
    public exposeFunction;
    public focus;
    public frames;
    public goBack;
    public goForward;
    public goto;
    public hover;
    public isClosed;
    public isJavaScriptEnabled;
    public keyboard;
    public listenerCount;
    public mainFrame;
    public metrics;
    public mouse;
    public off;
    public on;
    public once;
    public pdf;
    public queryObjects;
    public reload;
    public removeAllListeners;
    public removeListener;
    public screenshot;
    public select;
    public setBypassCSP;
    public setCacheEnabled;
    public setContent;
    public setCookie;
    public setDefaultNavigationTimeout;
    public setDefaultTimeout;
    public setExtraHTTPHeaders;
    public setGeolocation;
    public setJavaScriptEnabled;
    public setOfflineMode;
    public setRequestInterception;
    public setUserAgent;
    public setViewport;
    public tap;
    public target;
    public title;
    public touchscreen;
    public tracing;
    public type;
    public url;
    public viewport;
    public waitFor;
    public waitForFileChooser;
    public waitForFunction;
    public waitForNavigation;
    public waitForRequest;
    public waitForResponse;
    public waitForSelector;
    public waitForTimeout;
    public waitForXPath;
    public workers;

    constructor(page: Page) {
        this.page = page;
        this.$ = this.page.$.bind(this.page) as typeof page.$;
        this.$$ = this.page.$$.bind(this.page) as typeof page.$$;
        this.$$eval = this.page.$$eval.bind(this.page) as typeof page.$$eval;
        this.$eval = this.page.$eval.bind(this.page) as typeof page.$eval;
        this.$x = this.page.$x.bind(this.page) as typeof page.$x;
        this.accessibility = this.page.accessibility;
        this.addListener = this.page.addListener.bind(this.page) as typeof page.addListener;
        this.addScriptTag = this.page.addScriptTag.bind(this.page) as typeof page.addScriptTag;
        this.addStyleTag = this.page.addStyleTag.bind(this.page) as typeof page.addStyleTag;
        this.authenticate = this.page.authenticate.bind(this.page) as typeof page.authenticate;
        this.bringToFront = this.page.bringToFront.bind(this.page) as typeof page.bringToFront;
        this.browser = this.page.browser.bind(this.page) as typeof page.browser;
        this.browserContext = this.page.browserContext.bind(this.page) as typeof page.browserContext;
        this.click = this.page.click.bind(this.page) as typeof page.click;
        this.close = this.page.close.bind(this.page) as typeof page.close;
        this.content = this.page.content.bind(this.page) as typeof page.content;
        this.cookies = this.page.cookies.bind(this.page) as typeof page.cookies;
        this.coverage = this.page.coverage;
        this.deleteCookie = this.page.deleteCookie.bind(this.page) as typeof page.deleteCookie;
        this.emit = this.page.emit.bind(this.page) as typeof page.emit;
        this.emulate = this.page.emulate.bind(this.page) as typeof page.emulate;
        this.emulateIdleState = this.page.emulateIdleState.bind(this.page) as typeof page.emulateIdleState;
        this.emulateMediaFeatures = this.page.emulateMediaFeatures.bind(this.page) as typeof page.emulateMediaFeatures;
        this.emulateMediaType = this.page.emulateMediaType.bind(this.page) as typeof page.emulateMediaType;
        this.emulateTimezone = this.page.emulateTimezone.bind(this.page) as typeof page.emulateTimezone;
        this.evaluate = this.page.evaluate.bind(this.page) as typeof page.evaluate;
        this.evaluateHandle = this.page.evaluateHandle.bind(this.page) as typeof page.evaluateHandle;
        this.evaluateOnNewDocument = this.page.evaluateOnNewDocument.bind(this.page) as typeof page.evaluateOnNewDocument;
        this.exposeFunction = this.page.exposeFunction.bind(this.page) as typeof page.exposeFunction;
        this.focus = this.page.focus.bind(this.page) as typeof page.focus;
        this.frames = this.page.frames.bind(this.page) as typeof page.frames;
        this.goBack = this.page.goBack.bind(this.page) as typeof page.goBack;
        this.goForward = this.page.goForward.bind(this.page) as typeof page.goForward;
        this.goto = this.page.goto.bind(this.page) as typeof page.goto;
        this.hover = this.page.hover.bind(this.page) as typeof page.hover;
        this.isClosed = this.page.isClosed.bind(this.page) as typeof page.isClosed;
        this.isJavaScriptEnabled = this.page.isJavaScriptEnabled.bind(this.page) as typeof page.isJavaScriptEnabled;
        this.keyboard = this.page.keyboard;
        this.listenerCount = this.page.listenerCount.bind(this.page) as typeof page.listenerCount;
        this.mainFrame = this.page.mainFrame.bind(this.page) as typeof page.mainFrame;
        this.metrics = this.page.metrics.bind(this.page) as typeof page.metrics;
        this.mouse = this.page.mouse;
        this.off = this.page.off.bind(this.page) as typeof page.off;
        this.on = this.page.on.bind(this.page) as typeof page.on;
        this.once = this.page.once.bind(this.page) as typeof page.once;
        this.pdf = this.page.pdf.bind(this.page) as typeof page.pdf;
        this.queryObjects = this.page.queryObjects.bind(this.page) as typeof page.queryObjects;
        this.reload = this.page.reload.bind(this.page) as typeof page.reload;
        this.removeAllListeners = this.page.removeAllListeners.bind(this.page) as typeof page.removeAllListeners;
        this.removeListener = this.page.removeListener.bind(this.page) as typeof page.removeListener;
        this.screenshot = this.page.screenshot.bind(this.page) as typeof page.screenshot;
        this.select = this.page.select.bind(this.page) as typeof page.select;
        this.setBypassCSP = this.page.setBypassCSP.bind(this.page) as typeof page.setBypassCSP;
        this.setCacheEnabled = this.page.setCacheEnabled.bind(this.page) as typeof page.setCacheEnabled;
        this.setContent = this.page.setContent.bind(this.page) as typeof page.setContent;
        this.setCookie = this.page.setCookie.bind(this.page) as typeof page.setCookie;
        this.setDefaultNavigationTimeout = this.page.setDefaultNavigationTimeout.bind(this.page) as typeof page.setDefaultNavigationTimeout;
        this.setDefaultTimeout = this.page.setDefaultTimeout.bind(this.page) as typeof page.setDefaultTimeout;
        this.setExtraHTTPHeaders = this.page.setExtraHTTPHeaders.bind(this.page) as typeof page.setExtraHTTPHeaders;
        this.setGeolocation = this.page.setGeolocation.bind(this.page) as typeof page.setGeolocation;
        this.setJavaScriptEnabled = this.page.setJavaScriptEnabled.bind(this.page) as typeof page.setJavaScriptEnabled;
        this.setOfflineMode = this.page.setOfflineMode.bind(this.page) as typeof page.setOfflineMode;
        this.setRequestInterception = this.page.setRequestInterception.bind(this.page) as typeof page.setRequestInterception;
        this.setUserAgent = this.page.setUserAgent.bind(this.page) as typeof page.setUserAgent;
        this.setViewport = this.page.setViewport.bind(this.page) as typeof page.setViewport;
        this.tap = this.page.tap.bind(this.page) as typeof page.tap;
        this.target = this.page.target.bind(this.page) as typeof page.target;
        this.title = this.page.title.bind(this.page) as typeof page.title;
        this.touchscreen = this.page.touchscreen;
        this.tracing = this.page.tracing;
        this.type = this.page.type.bind(this.page) as typeof page.type;
        this.url = this.page.url.bind(this.page) as typeof page.url;
        this.viewport = this.page.viewport.bind(this.page) as typeof page.viewport;
        this.waitFor = this.page.waitFor.bind(this.page) as typeof page.waitFor;
        this.waitForFileChooser = this.page.waitForFileChooser.bind(this.page) as typeof page.waitForFileChooser;
        this.waitForFunction = this.page.waitForFunction.bind(this.page) as typeof page.waitForFunction;
        this.waitForNavigation = this.page.waitForNavigation.bind(this.page) as typeof page.waitForNavigation;
        this.waitForRequest = this.page.waitForRequest.bind(this.page) as typeof page.waitForRequest;
        this.waitForResponse = this.page.waitForResponse.bind(this.page) as typeof page.waitForResponse;
        this.waitForSelector = this.page.waitForSelector.bind(this.page) as typeof page.waitForSelector;
        this.waitForTimeout = this.page.waitForTimeout.bind(this.page) as typeof page.waitForTimeout;
        this.waitForXPath = this.page.waitForXPath.bind(this.page) as typeof page.waitForXPath;
        this.workers = this.page.workers.bind(this.page) as typeof page.workers;
    }

    async querySelector(selector: string): Promise<HTMLElement | null> {
        const handle = await this.page.waitForSelector(selector);
        if (handle) {
            return HybridElement.create(this, selector, handle);
        } else {
            return null;
        }
    }

    async querySelectorAll(selector: string): Promise<HTMLElement[]> {
        await this.page.waitForSelector(selector);
        return Promise.all((await this.page.$$(selector)).map(handle => HybridElement.create(this, selector, handle)));
    }

    getElementById(id: string): Promise<HTMLElement | null> {
        return this.querySelector(`#${id}`);
    }

    getElementsByClassName(className: string): Promise<HTMLElement[]> {
        return this.querySelectorAll(`.${className}`);
    }

    getElementsByTagName(tagName: string): Promise<HTMLElement[]> {
        return this.querySelectorAll(tagName);
    }
}

export default HybridPage;