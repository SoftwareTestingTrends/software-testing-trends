---
sidebar_position: 2
---

# WebDriverIO
* Next-gen browser and mobile automation test framework for Node.js

## Setup WDIO

- Initiate a WebdriverIO Setup form the root directory of an existing project directory or create a new project directory

```js
//Run from existing 
npm init wdio .

//Creating new directory for the project
npm init wdio ./path/to/new/project
```

- Select default configurations values for **WDIO Configuration Helper** during the setup.
- Run the test

```js
npx wdio run ./wdio.conf.js
```

- Run the specific file

```js
npx wdio run ./wdio.conf.js --spec example.e2e.js
```

- Run tests with desired logLevel details.
- Level of logging verbosity: trace | debug | info | warn | error | silent

```js
npx wdio run ./wdio.conf.js --spec example.e2e.js --logLevel trace

ios.test.local.sim --spec login.spec.js --logLevel trace
```

## Setting up Reporters
### Dot Reporter

1. Install the reporter as a dependency. for example, to install `dot` reporter:

```js
npm install @wdio/dot-reporter --save-dev
```

2. Add  `'dot'` as reporter to the `reporters` array in configuration file:

```js
module.exports = {
  // ...
  reporters: ['dot'],
  // ...
};
```

### Allure Reporter
#### Setup
1. Install dependency:

```shell
npm install @wdio/allure-reporter --save-dev
```

2. Add reporter config to wdio configuration file:

```js
reporters:  ['dot',
                ['allure', {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
                }]
],
```

3. Run the test & you'll get the an xml file with test results under folder named `allure-results`.

#### Generating & Displaying the Allure Report:
Install the [Allure command-line tool](https://www.npmjs.com/package/allure-commandline), and process the results directory:

```js
npm install -g allure-commandline --save-dev
```

#### Manual generation of the report:
Run the command. This will generate a folder named `allure-results` in the project directory & also open an html version of the report by starting a web server for you.

```shell
allure generate [allure_output_dir] && allure open
allure generate allure-results && allure open
```
If you run the report second time, you'll get an error as shown below:

```
Allure: Target directory /Users/username/folder-name/allure-report for the report is already in use, add a '--clean' option to overwrite
```

Resolve it by adding --clean option to overwrite the existing report. 

```js
allure generate allure-results --clean && allure open
```

You can add this command to `package.json`. 

```js
"scripts": {
        "wdio": "wdio run ./config/wdio.conf.js",
        "allure-report": "allure generate allure-results --clean && allure open"
    }
```

While running using the script command from package.json, if you get an error `Error 404 - Not Found. No context on this server matched or handled this request......` Here is the reason:

Reason: Allure Report is SPA, that uses AJAX to get page content. Chrome prevents access to files on file system that causes the above error. (such checks can be disabled using `--allow-file-access-from-files` option)

`allure serve` command is shortcut for `allure generate && allure open` therefore, you can also run the server as below and it will generate the report to a temp directory:

```bash
allure serve
```

#### Automatic generation of the report:
You can also auto generate the report by using the Allure command line tool programmatically. To do so, Make sure you already have `allure-commandline` installed or install the package in your project by:

`npm i allure-commandline`

Then add or extend your `onComplete` hook or create a [custom service](https://webdriver.io/docs/customservices) for this:

```js
// wdio.conf.js
const allure = require('allure-commandline')

exports.config = {
    // ...
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // ...
}
```

#### Using Allure API

```js
const allureReporter = require('@wdio/allure-reporter').default
```

```js
const LoginPage = require('../../pageobjects/login.page');
const SecurePage = require('../../pageobjects/secure.page');
const allureReporter = require('@wdio/allure-reporter').default

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addFeature('Login Feature')
        allureReporter.addStory('Login Story')
        
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should logout from the site', async () => {
        allureReporter.addFeature('Logout Story')
        await SecurePage.logOut();  
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!'); 
    });
});
```

### Video Reporter

```js
npm install wdio-video-reporter
```

```js
const video = require('wdio-video-reporter');
```

```js
[video, {
            outputDir: './_video_results_/',
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
```

## Creating Page Objects

```js
//page.js
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
```

```js
//home.page.js
const Page = require('./page');

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeading() {
        return $('.heading');
    }

    get pageSubheading() {
        return $('#content > h2')
    }

    get pageFooter() {
        return $('#page-footer')
      
    }

    async getPageHeading() {
        return await this.pageHeading.getText();
        
    }

    async getPageSubheading() {
        return await this.pageSubheading.getText();
    }

    open() {
        return browser.url(`https://the-internet.herokuapp.com/`)
    }
}

module.exports = new HomePage();
```

Notes: 
- The **`get`** syntax binds an object property to a function that will be called when that property is looked up
- The `$` command is a short way to call the `findElement` command in order to fetch a single element on the page.
- The `$$` command is a short way to call the `findElements` command in order to fetch multiple elements on the page. It will return to you an array of elements that you can use to act on those elements as you see fit.

## Writing Test

We are using Mocha syntax, so each test suite and test case is defined by a `describe` and an `it`

```js
describe("Interacting with elements", () => {
    it("should get the text for the element", async () => {
        allureReporter.addStory('Home Page Validation')
        await HomePage.open();
        let heading = await HomePage.getPageHeading();
        let subHeading = await HomePage.getPageSubheading();
        expect(heading).to.equal("Welcome to the-internet");
        expect(subHeading).to.equal("Available Examples");
	
        //Use below assertion when using custom version of Chai provided by WebDriverIO
        // await expect(HomePage.pageHeading).toHaveTextContaining("Welcome to the-internet")
        // await expect(HomePage.pageSubheading).toHaveTextContaining("Available Examples")

    })
})

```

## Mocha Hooks

- MochaJS provides a feature called "hooks" that allow you to run custom test code around your tests.
- Each `describe` block can have any or all of the following hooks implemented:
    - before
    - beforeEach
    - afterEach
    - after
- `before` and `after` only run at the start/end of the test suite..
- `beforeEach` and `afterEach`, however, execute around each test.
- Tou can add `.only` to the `it` or `describe` function call to run a single test (or single set of tests).

```jsx
describe('A block for executing tests', () => {
    it('This test will be skipped', () => {});

    it.only('This test will run', () => {});

    describe.only('Only this Suite will run', () => {
        it('This test will run', () => {});
        it('This test will also run', () => {});
    });
});
```

- You can add `.skip` to either the `describe` or `it` function call to skip a single suite or a single test.

```jsx
describe('A block for executing tests', () => {
    it('This test will run', () => {});

    it.skip('This test will be skipped', () => {});

    describe.skip('This test will be Skipped', function () {
        it('This test will be skipped', () => {});
        it('This test will also be skipped', () => {});
    });
});
```

- If there are multiple tests marked with  `only` , all of them will run.

## Grouping Tests by Suites

Grouping your tests by suites makes it easier for you to run a suite of tests versus running everything. 

- Go into the “**[package.json](https://github.com/jpott77/webdriverio/blob/master/package.json)**” and under `scripts` section, add a script with your desired name. For example, to cretae a script option `interacting-with-elements`with suite name `elements`

```jsx
"scripts": {
        "wdio": "npx wdio run wdio.conf.js",
        "wdio-login-test": "npx wdio run ./wdio.conf.js --spec example.e2e.js",
        "allure-report": "allure generate allure-results --clean && allure open",
        "interacting-with-elements": "npx wdio run ./wdio.conf.js --suite elements"
 }
```

- Go into “[wdio.conf.js](https://github.com/jpott77/webdriverio/blob/master/wdio.conf.js)” file and add a `suites` section

```jsx
specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        elements: [
            './test/specs/elements/*.js'
        ],
        login: ['./test/specs/login/*.js']
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
```

## Using Data Files with Tests

- Create a folder named `data`
- Create a file for data & export as a module

```jsx
//login-data.js
module.exports = {
    userName: 'tomsmith',
    password: 'SuperSecretPassword!'
}
```

- Import data file into test file

```jsx
const loginData = require('../../../data/login-data');
```

- Using the data
    
    ```jsx
    it('should login with valid credentials', async () => {
            allureReporter.addStory('Login Story')
            await LoginPage.open();
            await LoginPage.login(loginData.userName, loginData.password);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining(
                'You logged into a secure area!');
        });
    ```

## Using Environment Variables

- Create files with data for the values that will be passed using environment variable

```jsx
//urls-data.js
module.exports =  {
    "qa": "https://site-address.qa.com/",
    "dev": "https://site-address.dev.com/",
    "prod": "https://site-address.prod.com/"
}
```

- Import the file in wdio.config.js

```jsx
const urls = require('./data/urls-data');
```

- Use the ENV variable in the wdio.config.js

```jsx
const ENV = process.env.ENV

if (!ENV || !['qa', 'dev', 'prod'].includes(ENV)) {
    console.log('Please use the following format when running the test script: ENV=qa|dev|staging')
    process.exit()
}

exports.config = {
...
baseUrl: url[process.env.ENV]
...
}
```

- Pass data from command line:

```bash
ENV=qa yarn login-suite
```

## Running Firefox locally

Let’s configure Firefox browser to run locally on your machine.

- Make sure you have Firefox installed locally.
- Install Java JDK 8 on your machine. If you are on macOS, you can run below command to setup openjdk:

```bash
brew install adoptopenjdk/openjdk/adoptopenjdk8
```

- Install ``selenium-standalone-service`**`**

```bash
yarn add -D @wdio/selenium-standalone-service
```

- Update ``wdio.conf.js`` and add firefox capabilities under `capabilities` and `services` section

```bash
{
  capabilites: [
    {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
    }
  ],
  services: ['chromedriver', 'selenium-standalone'],
}
```

If you run the command `yarn wdio run wdio.conf.js` now, it will trigger both test on Firefox and Chrome browsers.

## Working With Web Elements
### How to locate elements using Chrome DevTools?

The *DOM* panel of Chrome *DevTools* provides a special tool called "***find*** " to locate the web elements depending on specified criteria.

After opening the *Chrome Developer Tools*, press "***Ctrl + f*** ", this will open a find bar.

#### Selector Examples:

Official W3C list of supported selector types:

- CSS selector
- Link text selector
- Partial link text selector
- Tag name
- XPath selector

### Tag Selector

```jsx
$('h1')
$('div')
```

### Link Text Selector:

* By adding an equal (i.e., `=`), WebdriverIO will look for a link text full match

```jsx
$('=Projects')
```
* By passing in a custom element type for the text on an element, WebDriverIO will match the correct element type
```js
$('button=Sign in')
```

### Partial Link Text Selector:

By adding an asterisk (i.e., `*`), WebdriverIO will look for a partial text match

```jsx
$('*=chive')
```

### CSS Selectros:

Grab the `<ul>` by class name: 

```jsx
$('ul.items')
```

Grabs the two `li` elements by class as well: 

```jsx
$$('li.item')
```

Here are a few recommend resources to learn more about CSS Selectors:

- [TutsPlus "The 30 CSS Selectors You Must Memorize"](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
- [Sauce Labs "CSS Selector Tips"](https://saucelabs.com/resources/articles/selenium-tips-css-selectors)
- [CSS Tricks "CSS Almanac / Selectors"](https://css-tricks.com/almanac/selectors/)
- [Ghost Selector "CSS Selector Strategies for Automated Browser Testing"](https://ghostinspector.com/blog/css-selector-strategies-automated-browser-testing/)

### Attribute Selectors

Attributes are the properties of HTML elements (e.g., the "class" part of `<li class="item">`).

Using [CSS Attribute Selectors](https://css-tricks.com/attribute-selectors/) ([shorter version](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)), we can target the `ng-click` attribute of the link, like so:

```js
$('[ng-click="showProjects()"]');

```

We can also combine attribute selectors to be more specific with our link:

```jsx
$('[dropdown-menu] a[ng-click="showProjects()"]');

```

### nth-child Selectors

Another method to find your element is to base it on the position in the HTML. [The `first-child` selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) allows us to do this:

`nth-child` takes a numeric value, which corresponds to the position in the HTML (it is *not* zero-indexed, so counting starts at 1).

```jsx
$('li:first-child');
$('[dropdown-menu] li:first-child');
$('[dropdown-menu] li:nth-child(2)');
```

**Note:** Selecting multiple elements is consistently slower than grabbing a single one, so using `nth-child` can help keep our tests speedy.

### XPath

- Grab the `<ul>` by ID:

```jsx
 $('//ul[@id="main-menu"]'). 
```

- Get  `li` elements by class:

```jsx
$$('//li[@class="item"]').
```

- Selecting an element by text content

```jsx
$('//a[contains(text(),"chive")]')
```

- Using XPath to select a parent of an element

```jsx
$('//a[contains(text(),"chive")]/ancestor::ul')
```

### Chaining Selectors:

- Select a container & then select the `span` inside that container using tag selector

```jsx
$('=Projects').$('span')
```

```jsx
$('ul').$$('li')
```

### Using Custom Data Attributes:

- Add a custom attribute to your HTML components solely to facilitate automation testing. HTML5 introduced a [formal "data" attribute type](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) that is used for this purpose.
- Adding a custom data attribute as mentioned above can really limit the effect of an HTML restructuring.
- A custom attribute named with `test-id` is much less likely to be changed during project life cycle without warning so makes automation more stable.
- Examples:
    
    ```jsx
    $('[data-test-id="main-menu"]')
    #app > footer > div > span
    '[data-qa-id= "site-footer"] ' 
    ```
    

### Making Locators More Reliable:

- If you can change the HTML (or can ask the developer to do so), add a custom data attribute for testing purposes only.
- If I don't have control of the HTML, come up with selectors that are specific, but not overly tied to the HTML structure.

## What is POM?

The Page Object Model is a design pattern which allows test maintenance and reduction of duplicate code.

It's an object-oriented class that serves as an interface to a page or a section of an application. It normally contains locators, or elements, and functions that will interact with these elements. It may also contain other functions that the test will use.

## Performing Common Tasks:

**Note:** Below common tasks are performed for the demo website:  [`https://the-internet.herokuapp.com/`](https://the-internet.herokuapp.com/)

### Validating Page Title:

```jsx
browser.url('https://the-internet.herokuapp.com')
**expect(browser).toHaveUrl('https://the-internet.herokuapp.com/add_remove_elements/')
expect(browser).toHaveTitle('The Internet')**
```

### Validating Element Text:

```jsx
//home.page.js
		get pageHeading() {
        return $('h1.heading');
    }

//elements.e2e.js
let heading = await HomePage.pageHeading;
**expect(heading).toHaveTextContaining("Welcome to the-internet");**
```

### Sending Text to an Input Field using setValue**

```jsx
it('Should set a value', async () => {
      await browser.url('https://jqueryui.com/')
      await $('[name="s"]').setValue("CSS Framework")
})
```

### Sending a Text to an Input Field using addValue

`$(‘selector’).addValue(value)` is another way to send the text to an input field. If the element value needs to be appended, you can use addValue.

```jsx
it('Should set a value', async () => {
        await browser.url('https://jqueryui.com/')
        await $('[name="s"]').addValue("CSS Framework")
 })
```

### Click an element:

```jsx
//home.page.js
get pageLinkAddRemoveElement()  {
    return $('ul > li:nth-child(2) > a')
}

//elements.e2e.js
await HomePage.open();
await HomePage.pageLinkAddRemoveElement.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/add_remove_elements/')
```

### Get a List of Elements:
```js
//home.page.js
async getLiText() {
        return await this.itemList.map((item) => {
           return item.getText()
        })
}

//home.test.js
const arrayList = await HomePage.getLiText();
assert.strictEqual(arrayList.length, 44)

```

Alternate:

```jsx
//home.page.js
get itemList() { return $('ul').$$('li') }

//elements.e2e.js
await HomePage.open();
const pageLinksLists = await HomePage.itemList
const pageLinksArray = []

for(const li of pageLinksLists) {
    pageLinksArray.push(await li.getText())
}
console.log('pageLinksArray', pageLinksArray)
```

### Saving a Screenshot

```jsx
await HomePage.open();
await HomePage.pageLinkAddRemoveElement.click();
const elem = await AddRemoveElementPage.pageHeading;
**await elem.saveScreenshot('./screenshots/elemScreenshot.png');**
```

### Scrolling an element into view

```jsx
await browser.url('https://the-internet.herokuapp.com/')
await browser.saveScreenshot('screenshots/before-scrolling.png')
**await HomePage.pageFooter.scrollIntoView()**
**await expect(HomePage.pageFooter).toBeDisplayedInViewport()**
await browser.saveScreenshot('./screenshots/after-scrolling.png')
```

### Clicking a Checkbox

```jsx
await HomePage.open();
await HomePage.pageLinkCheckbox.click()
expect(await CheckboxPage.pageHeading.getText()).toHaveTextContaining('Checkboxes');
**await CheckboxPage.checkBox1.click()**
console.log('isSelected: ', **await CheckboxPage.checkBox1.isSelected()**); 
**await CheckboxPage.checkBox2.click()**
console.log('isNotSelected: ', **await CheckboxPage.checkBox2.isSelected()**);
```

### Hover over an element

```jsx
await HomePage.open();
await HomePage.pageLinkHover.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/hovers')
**await HoversPage.hoverUser1.moveTo();**
expect(await HoversPage.user1Name.getText()).toHaveTextContaining('name: user1')
await HoversPage.user1ProfileLink.click()
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/users/1')
```

### Sending a keyboard key

```jsx
await HomePage.open();
await HomePage.pageLinkKeyPresses.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/key_presses')
expect(await KeyPressesPage.pageHeading.getText()).toHaveTextContaining('Key Presses')
await browser.keys('Enter')
expect(await KeyPressesPage.result.getText()).toHaveTextContaining('You entered: Enter')
```

### Opening a new Window

```jsx
await HomePage.open();
await HomePage.pageLinkMultipleWindows.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/windows')
expect(await MultipleWindowsPage.pageHeading.getText()).toHaveTextContaining('Opening a new window')
await MultipleWindowsPage.newWindowLink.click();
await browser.switchWindow('https://the-internet.herokuapp.com/windows/new')
expect(await browser.getTitle()).toHaveTextContaining('New Window')
expect(await MultipleWindowsPage.newWindowHeading.getText()).toHaveTextContaining('New Window')
```

### Switching Frames

```jsx
await HomePage.open();
await HomePage.pageFrames.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/frames')
expect(await FramesPage.pageHeading.getText()).toHaveTextContaining('Frames')
await FramesPage.linkIFrame.click()
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/iframe')
expect(await browser.getTitle()).toHaveTextContaining('New Window')
expect(await FramesPage.pageHeading.getText()).toHaveTextContaining('An iFrame containing the TinyMCE WYSIWYG Editor')
//Switch iFrame
**await browser.switchToFrame(0)**
expect(await FramesPage.iframeBody.getText()).toHaveTextContaining('Your content goes here.')
console.log('Text inside frame: ' + await FramesPage.iframeBody.getText())
await FramesPage.iframeBody.clearValue();
await FramesPage.iframeBody.click();
await FramesPage.iframeBody.setValue('Testing in Progress')
expect(await FramesPage.iframeBody.getValue()).toHaveTextContaining('Testing in Progress')
browser.switchToParentFrame()
expect(await FramesPage.pageHeading.getText()).toHaveTextContaining('An iFrame containing the TinyMCE WYSIWYG Editor')
console.log('Webpage Heading on parent frame: ' + await FramesPage.pageHeading.getText())
```

### Drag & Drop

```jsx
await HomePage.open();
await HomePage.pageLinkDragAndDrop.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/drag_and_drop')
expect(await DragAndDropPage.pageHeading.getText()).toHaveTextContaining('Drag and Drop')
const source = await DragAndDropPage.sourceColumn
const target = await DragAndDropPage.targetColumn

// drag and drop source to target element
**await source.dragAndDrop(target)**

// await DragAndDropPage.sourceColumn.dragAndDrop(DragAndDropPage.targetColumn)
expect(await DragAndDropPage.targetColumnHeader.getText()).toHaveTextContaining('A')
```

### Dropdown List

```jsx
await HomePage.open();
await HomePage.pageLinkDropdownList.click();
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/dropdown')
expect(await DropdownListPage.pageHeading.getText()).toHaveTextContaining('Dropdown List')

const option1 = await DropdownListPage.option1
const option2 = await DropdownListPage.option2

await DropdownListPage.dropdown.click()
option1.click()
console.log('option 1: ', await option1.getText())

option2.click()
console.log('option 2: ', await option2.getText())
```

### Handling of Alerts

```jsx
it('should demonstrate the handling of JS Alerts', async () => {
    await HomePage.open();
    await HomePage.pageLinkJavascriptAlerts.click();
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/javascript_alerts')
    expect(await AlertsPage.pageHeading.getText()).toHaveTextContaining('JavaScript Alerts')
    
    // Alerts not working for WebdriverIO7: https://github.com/webdriverio/webdriverio/issues/6423
    await AlertsPage.jsAlert.click();
    browser.acceptAlert();

    // const alertText = await browser.getAlertText()
    // console.log('alertText', alertText)
    // expect(await browser.getAlertText()).toHaveTextContaining('I am a JS Alert')
    // browser.acceptAlert();

    // await AlertsPage.jsConfirm.click();
    // expect(await browser.getAlertText()).toHaveTextContaining('I am a JS Confirm')
    // browser.acceptAlert();

    // await AlertsPage.jsPrompt.click();
    // await browser.sendAlertText('Testing')
    // expect(await browser.getAlertText()).toHaveTextContaining('Testing')
    // browser.acceptAlert();
})
```
## Getting html value using getHTML
* If you need to get the text of a hidden element, use `getHTML` as `getText` will return an empty string for an element that is hidden on a page (for e.g. options for dropdown menu)
* `getHTML` returns the HTML value of an element, including the text inside it.
```js
$('.error-messages li').getHTML();
// returns "<li>email can't be blank</li>"
```
* `getHTML` accepts a single parameter, which is a boolean flag to include the selector element tag or not. By default it's true, and therefore includes that tag. If we pass in false, then selector is not included in the result:
```js
$('.error-messages li').getHTML(false);
// returns "email can't be blank"
```
* Note that boolean flag only works on the main element, therefore, any child tags will still be included in the results.

### Dynamic Controls - Enabled/Disabled State

```jsx
it('should demonstrate the use of dynamic controls - Enabled/Disabled State', async () => {
    await HomePage.open();
    await HomePage.pageLinkDynamicControls.click();
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/dynamic_controls')
    expect(await DynamicControlsPage.pageHeading.getText()).toHaveTextContaining('Dynamic Controls')
    
    let inputState = await DynamicControlsPage.inputField.isEnabled()
    console.log('inputState:(', inputState)

    await DynamicControlsPage.btnInputExample.click()
    await DynamicControlsPage.inputField.waitForEnabled()
    
    inputState = await DynamicControlsPage.inputField.isEnabled()
    console.log('inputState:*)', inputState)

    if(inputState) {
        await DynamicControlsPage.inputField.setValue('Testing in progress')
        await DynamicControlsPage.btnInputExample.click()
        await DynamicControlsPage.inputField.waitForEnabled({reverse: true})
        expect(await DynamicControlsPage.inputField.getValue()).toHaveTextContaining('Testing in progress')
    }
    })
```

### Dynamic Controls - Existence/non-existence of an element

```jsx
it.only('should demonstrate the use of dynamic controls - Existence/non-existence of an element', async () => {
        await HomePage.open();
        await HomePage.pageLinkDynamicControls.click();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/dynamic_controls')
        expect(await DynamicControlsPage.pageHeading.getText()).toHaveTextContaining('Dynamic Controls')
        
        let existState = await DynamicControlsPage.checkBox.isExisting()
        console.log('should exists:', existState)

        if(existState) {
            await DynamicControlsPage.checkBox.click()
            console.log('Checkbox is in checked state: ' , await DynamicControlsPage.checkBox.isSelected())
            
        }

        await DynamicControlsPage.btnCheckboxExample.click()
        await DynamicControlsPage.checkBox.waitForDisplayed({reverse: true})

        existState = await DynamicControlsPage.checkBox.isExisting()
        console.log('should exists:', existState)

        if(!existState) {
            console.log('Checkbox is not displayed anymore...')
            expect(await DynamicControlsPage.message.getText()).toHaveTextContaining("It's gone!")
        }

        await DynamicControlsPage.btnCheckboxExample.click()
        await DynamicControlsPage.checkBox.waitForDisplayed()
        expect(await DynamicControlsPage.message.getText()).toHaveTextContaining("It's back!")

    })
```

### Usage of 'waitUntil' for a certain condition

```jsx
describe("Usage of 'waitUntil' for a certain condition", () => {
    it("should wait until a certain condition occurs", async () => {
        await HomePage.open();
        await HomePage.pageLinkDynamicControls.click();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/dynamic_controls')
        expect(await DynamicControlsPage.pageHeading.getText()).toHaveTextContaining('Dynamic Controls')
        await DynamicControlsPage.btnCheckboxExample.click()

        // $(selector).waitUntil(condition, { timeout, timeoutMsg, interval })
        await DynamicControlsPage.btnCheckboxExample.waitUntil(async () => {
            return (await this.getText()) === 'Add'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 10s'
        });
    })
})
```

## Assertions?
### What is an Assertion?
- Assertions are validation points that conclusively determine if a test case passed or failed.
- Assertions are validation points that conclusively determine if a test case passed or failed.

### Node.JS default Assert Library:

```jsx
**const** assert = require('assert');
await assert.strictEqual(await browser.getTitle(), 'Conduit');
```

### Chai Assertions
#### What is Chai?
* Chai is a BDD / TDD assertion library for [node](http://nodejs.org/) and the browser that can be delightfully paired with any javascript testing framework.
* To install chai use below command
```shell
npm install chai --save-dev
```
* To install Chai WebdriverIO 
```shell
npm install chai-webdriverio --save-dev
```
* Chai module contains `assert`, `expect` & `should`, therefore you can use any of these assertion method.

#### Allowing global access to Chai Assertions

* Use webdriverio config file to allow access to chai assertion library throughout the project.
* Update Config for `beforeTest` as below by putting it in the “before” snippet. As a result, this code snippet will run before every test, regardless of where the file is located.

```jsx
beforeTest: function (test, context) {
        const chai = require('chai')
        const chaiWebdriver = require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))
        global.assert = chai.assert
        global.should = chai.should
        global.expect = chai.expect
 },
```
#### Chai Usage Examples:

```jsx
expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
```

### WebDriverIO Expect
* We can perform different types of assertions using WebDriverIO built-in assertion methods.
* Aside from the WebdriverIO specific assertions `expect-webdriverio` adds, you also gain access to the [built-in ExpectJS assertions](https://jestjs.io/docs/en/expect)

```jsx
expect(await browser.getUrl()).toEqual('http://localhost:8080/');
```
* Here are few examples of using WebDriverIO Expect assertions:

## Focus:

- `isFocused` isFocused() returns *true* or *false*, depending on the element state
- `toBeFocused()` is an assertion equivalent to the isFocused() method.

```jsx
describe("Test case description goes here", () => {
    it('Should get a focus after a click', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs')
        const inputBox = await $('input[type=number]')
        console.log("Before Clicking the input box...")
        console.log('isFocused State: ', await inputBox.isFocused())
        await inputBox.click()
        console.log("Before Clicking the input box...")
        await expect(inputBox).toBeFocused()
        console.log('isFocused State: ', await inputBox.isFocused())
       
    })
})
```

## Attributes

- Use `toHaveAttribute` to validate existance of certain attributes.

```jsx
it.only("should perform a certain action", async () => {
      await browser.url('https://the-internet.herokuapp.com/redirector')
      const content = await $('#content')
      const redirectLink = await $('#redirect')
      await expect(content).toHaveAttribute('class', 'large-12 columns')
      await expect(redirectLink).toHaveAttribute('href', 'redirect')
            
 })
```

- Use `toHaveAttributeContaining` to check if an element has an attribute that contains a certain value.

```jsx
it.only("should check if attribute value includes specific text", async () => {
            await browser.url('https://the-internet.herokuapp.com/broken_images')
            const userImage = $('img:nth-child(4)')
            await expect(userImage).toHaveAttrContaining('src', '.jpg')
    })
```

## Class

- Use `toHaveElementClass` to check if an element has a certain class name.

```jsx
it.only("should check if an element has a certain class name", async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        const pageHeading = await $('<h1>')
        await expect(pageHeading).toHaveElementClass('heading')
   })
```

## Array List Size

Use `toBeElementsArrayOfSize` to Check number of fetched elements using `$$` command.

```jsx
it.only("should check number of li items present on the page", async () => {
    await browser.url('https://the-internet.herokuapp.com/')
    const listItems = await $$('ul > li')
    console.log('listItems count: ', listItems)
    await expect(listItems).toBeElementsArrayOfSize(44) // 44 items in the list
    await expect(listItems).toBeElementsArrayOfSize({ lte: 50 })
 })
```
## toHaveLength

```jsx
// Check that there are exactly five links on the page
const links = $$('a');
expect(links).toHaveLength(5);

//Use the .not switch to flip our assertion
expect(links).not.toHaveLength(5);
```

To check all available assertions checkout [Expect on WebDriverIO](https://webdriver.io/docs/api/expect-webdriverio/) site.

## Resources
* [WDIO Official Documentation](https://github.com/webdriver.io/)
* [Allure Report Documentation](https://docs.qameta.io/allure/#_jenkins)
* Cheatsheet comparing CSS vs XPath: [devhints.io is invaluable](https://devhints.io/xpath)