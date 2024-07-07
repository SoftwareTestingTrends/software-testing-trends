---
sidebar_position: 2
---

# Cypress Interview Questions

## What is Cypress?

Cypress is a cutting-edge JavaScript-based testing framework designed to simplify and streamline end-to-end testing for modern web applications. It addresses the common pain points of traditional testing tools and brings a fresh, developer-friendly approach.

**Key Advantages of Cypress**

* **Seamless Debugging:** Cypress automatically waits for commands and assertions, significantly simplifying asynchronous code handling. It also captures snapshots of your tests as they run, allowing you to step back in time and see exactly what happened.
* **Enhanced Reliability and Execution Speed:**  Cypress's unique architecture, which operates directly within the browser, enables lightning-fast and consistent test execution for greater reliability.   
* **Detailed Test Analysis:** Easily analyze failures with access to videos of your entire test execution when run from the Cypress Dashboard.
* **Enhanced Control:**  Cypress empowers developers with unprecedented control over their application during testing.  Mock server responses, manipulate the DOM, and modify network requests and responses on the fly for comprehensive scenario testing.

**Core Technical Features**

* **Built on Node.js:**  Cypress leverages the power of JavaScript for test writing. While JavaScript knowledge is helpful, a vast array of easy-to-use commands simplifies the process.
* **jQuery Integration:**  Easily manipulate and locate UI elements using familiar jQuery methods.

**Browser Support:**

* Chrome
* Electron
* Firefox 
* IE (Internet Explorer)
* Edge

**Components:**

* **Test Runner:** Intuitive interface for test execution and debugging.
* **Dashboard Service:**  Record and analyze test runs for improved insights.

## Can you explain the architecture of Cypress?
The architecture of Cypress is designed to provide a fast and reliable testing environment for web applications. It consists of two main components: the Test Runner and the Application Under Test.

### Test Runner:

The Test Runner is the graphical user interface (GUI) that developers and QA engineers interact with during test development and execution.
It provides real-time feedback on test execution, allowing developers to see the application being tested, inspect the DOM, and view console logs.
The Test Runner includes features such as time-travel debugging, interactive debugging, and a command log that displays the sequence of commands executed during a test.

### Application Under Test:

The Application Under Test refers to the web application being tested. Cypress runs directly in the browser alongside the application, allowing it to interact with the application in the same context.
Unlike traditional testing frameworks that use WebDriver and run tests in a separate context, Cypress operates within the same JavaScript event loop as the application. This enables faster test execution and eliminates many common issues associated with traditional testing frameworks.

### Communication:

Cypress communicates with the Application Under Test using JavaScript. It can directly modify the DOM, intercept and modify network requests, and interact with the application's components.
This direct communication allows Cypress to perform actions and assertions without the need for external drivers or browser plugins.

### Plugins and Commands:

Cypress allows the creation of custom commands and plugins to extend its functionality. Custom commands enhance test readability and maintainability, while plugins provide additional features and integrations.
In summary, Cypress employs a unique architecture where the Test Runner and the Application Under Test work together in the same context, providing a seamless and efficient testing experience for web applications.

## How can I install the Cypress tool?
You can install Cypress using npm. Simply run npm install cypress in your terminal to install Cypress

## How can I run Cypress tests in headless mode?
Use the `--headless` option when running Cypress from the command line to run tests in headless mode.

## What are the key features of Cypress?
Key features include time-traveling, automatic waiting, real-time reloading, network traffic control, and easy setup.

## What are the advantages of using Cypress?
Cypress provides several advantages over other testing frameworks, including built-in network traffic control, the ability to debug tests directly in the browser using the DevTools, and time travel debugging that enables developers to step through test runs and identify issues.

## How does Cypress differ from other testing frameworks?
* Cypress is an open-source end-to-end testing framework designed specifically for testing web applications. 
* Unlike traditional testing frameworks, Cypress operates directly in the browser, running tests in the same context as the application.
* This enables fast and reliable testing with real-time reloading, automatic waiting for elements, and interactive debugging.
* One key differentiator is Cypress's automatic waiting mechanism, which eliminates the need for explicit waits or sleeps, making tests more robust and reliable. 
* The framework also provides a built-in interactive Test Runner that allows developers to observe test execution in real-time, pause tests for debugging, and inspect the application's state at any point during the test.
* Cypress supports time-travel debugging, allowing developers to go back and forth in time to inspect the application's state during test execution. 
* The framework's ease of setup, cross-browser support, and seamless integration with popular testing tools contribute to its popularity in the web development community.


# Additional Notes
[Applitool University Course: Introduction to Cypress](https://testautomationu.applitools.com/cypress-getting-started/)
- Cypress is used for browser testing, component testing, E2E, and API testing
- It doesn't rely on a Webdriver
- Lack of a hover command or support for multiple browser tabs
- Cypress commands are triggered by JavaScript.
- 3 Panels: files, timeline, application under test
- Cypress uses the Mocha framework for writing test cases.
- we cannot simulate a hover element that's handled by a CSS property. Note that it is a problem that is easily solvable. You can skip checking whether the element is visible, disabled or not interactive by passing the force:true option into your click command.

```
cy.get('[data-cy="star"]')
  .first()
  .click({force: true})
```
- Cypress will not click on an element that's not visible, covered by another element, or any disabled element.
- The cy.visit() function is used in Cypress to visit a URL.
- You can set a base URL in the cypress.config.js file
- Cypress Studio is a feature in Cypress that records interactions with a webpage and generates test commands.
- You can enable Cypress Studio in the project settings.
- Selectors: 
  -- You can use the cy.contains() command to select an element based on the text it contains
  -- You can use the cy.get command to select an element using its class (with a dot prefix), ID (with a hash symbol), or other HTML attributes (using square brackets for other attributes). 
  -- The contains command can take two arguments. The first argument would act as the get command. (used for selecting the right parent element)
  -- Command like first, last, eq(n), next, previous, parent, children, find allows to traverse across the DOM in any direction we need.
Examples:  
```
  cy.contains('new board')
  cy.get('.board')
  cy.get('#board-1')
  cy.get('[data-cy=board-item]')
  cy.contains('.board', 'new board')
```
- Cypress automatically enforces test isolation by clearing state before each test.
- The `{force: true}` option in Cypress commands forces the action to execute even if the targeted element is not visible, disabled, or non-interactive
- Cypress emulate hitting the 'Enter' key during testing by typing "{enter}" as part of the type command argument
E.g: 
```
cy.visit('/board/1')
cy.get('[data-cy="add-list-input"]')
  .type('new list{enter}')
```

## Three types of commands in Cypress:
- Parent Commands: Anything that we usually start off with cy. is a parent command.
- Child Commands: click, type, or should are child commands as they first need to have a querying command before it.
- Hybrid commands: These will change their behavior based on whether they are starting the chain or are just continuation of a chain. e.g: contains command
```
cy.contains('[data-cy=card]', 'Jun 26 2023')

cy.get('[data-cy=list]')
  .eq(1)
  .contains('[data-cy=card]', 'Jun 26 2023')
```
- `cy.type()` is used to enter text into an input field
- Chaining is embedded into every Cypress command, as is implicit timeout.
- Cypress is optimized for speed, and that means that once the command is done with its work, it will move on to the next command.

### Default timeOut:
* You can change `defaultCommandTimeout` in the config file.
```
defaultCommandTimeout: 6000
```
* You can change `defaultCommandTimeout` just for your test.
```
it('chaining and retrying', {defaultCommandTimeout:6000 }, () => {
})
```
* You can change `defaultCommandTimeout` just for your command.
```
cy.get('[data-cy=card]', { timeout: 6000 })
```

# Cypress - Practice Tasks:
* Automate any Web App using Cypress
* Mock network requests and responses with Cypress
* Design Cypress framework from scratch with all the Testing standards
* Integrate Cypress Test Framework to Jenkins for CI/CD

# Sample Repositories:
* https://github.com/saurabhd2106/cypress-api-testing-coursera
  
# Resources:
* [60+ Cypress Interview Questions](https://www.lambdatest.com/learning-hub/cypress-interview-questions)
