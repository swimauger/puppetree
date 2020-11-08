# Puppe<b><i>tree</i></b>

![](https://img.shields.io/npm/dw/puppetree?color=466551&style=for-the-badge)
![](https://img.shields.io/github/license/swimauger/puppetree?color=368C72&style=for-the-badge)
![](https://img.shields.io/npm/v/puppetree?color=7ECBA1&style=for-the-badge)
![](https://img.shields.io/github/repo-size/swimauger/puppetree?color=E7EED2&label=Size&style=for-the-badge)

<img src="./puppetree.png" height="150" align="right">

> Puppe<b><i>tree</i></b> is a wrapper around `puppeteer` built in with `JSDOM`, to allow webscraping/crawling from node using the client side DOM architecture.

- API usage is the same as with puppeteer; however, puppe<b><i>tree</i></b> adds 5 new query selectors as you would use on the DOM.

- Puppe<b><i>tree</i></b> adds `querySelector`, `querySelectorAll`, `getElementById`, `getElementsByClassName`, and `getElementsByTagName`

- Each returning a HybridElement of puppeteers ElementHandle and the DOMs HTMLElement.

## Getting Started
```javascript
const puppetree = require('puppetree');

const browser = await puppetree.launch();
const hybridPage = await browser.newPage();
await hybridPage.goto(url);
```

### \<HybridPage>.querySelector
```javascript
const $hyperlink = await hybridPage.querySelector('a.mylink');
console.log($hyperLink.href) // Logs HTMLAnchorElement href
```

### \<HybridPage>.querySelectorAll
```javascript
const $inputs = await hybridPage.querySelectorAll('div.container input');
for (const $input of $inputs) {
    console.log($input.value) // Logs HTMLInputElement value
}
```

### \<HybridPage>.getElementById
```javascript
const $button = await hybridPage.getElementById('search');
await $button.click(); // Uses ElementHandle click api
```

### \<HybridPage>.getElementsByClassName
```javascript
const $people = await hybridPage.getElementsByClassName('person');
for (const $person of $people) {
    await $person.hover() // Uses ElementHandle hover api
}
```

### \<HybridPage>.getElementsByTagName
```javascript
const $rows = await hybridPage.getElementsByTagName('tr');
for (const $row of $rows) {
    const $p = await $row.querySelector('td p');
    console.log($p.text); // Uses HTMLParagraphElement
}
```
