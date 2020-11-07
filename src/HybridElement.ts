const { JSDOM } = require("jsdom");
import { ElementHandle } from "puppeteer";
import HybridPage from "./HybridPage";

class HybridElement {
    static async create(page: HybridPage, selector: string, handle: ElementHandle<Element>): Promise<HTMLElement> {
        const html = await (await handle.getProperty('outerHTML')).jsonValue() as string;
        const tag = await (await handle.getProperty('tagName')).jsonValue() as string;

        const { window: { document } } = new JSDOM(html);
        const element = document.querySelector(tag);

        for (const key of Object.getOwnPropertyNames(handle.constructor.prototype)) {
            if (key !== 'constructor') {
                element[key] = handle.constructor.prototype[key];
            }
        }

        if (element.querySelector) {
            element.querySelector = (query: string) => page.querySelector(`${selector} ${query}`);
            element.querySelectorAll = (query: string) => page.querySelectorAll(`${selector} ${query}`);
            element.getElementById = (id: string) => page.getElementById(id);
            element.getElementsByClassName = (className: string) => page.querySelectorAll(`${selector} .${className}`);
            element.getElementsByTagName = (tagName: string) => page.querySelectorAll(`${selector} ${tagName}`);
        }

        return element;
    }
}

export default HybridElement;
