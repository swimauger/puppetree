import {
    devices,
    errors,
    product,
    clearCustomQueryHandlers,
    connect,
    createBrowserFetcher,
    customQueryHandlerNames,
    defaultArgs,
    executablePath,
    launch,
    registerCustomQueryHandler,
    unregisterCustomQueryHandler,
    LaunchOptions
} from "puppeteer";
import PuppetreeBrowser from "./PuppetreeBrowser";

class Puppetree {
    static devices = devices;

    // TODO: Fix errors restriction
    // static errors = errors;

    static product = product;

    static clearCustomQueryHandlers = clearCustomQueryHandlers;

    static connect = connect;

    static createBrowserFetcher = createBrowserFetcher

    static customQueryHandlerNames = customQueryHandlerNames

    static defaultArgs = defaultArgs;

    static executablePath = executablePath;

    static async launch(options?: LaunchOptions): Promise<PuppetreeBrowser> {
        return new PuppetreeBrowser(await launch(options));
    }

    static registerCustomQueryHandler = registerCustomQueryHandler;

    static unregisterCustomQueryHandler = unregisterCustomQueryHandler;
}

export default Puppetree;