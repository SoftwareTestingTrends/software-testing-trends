---
sidebar_position: 14
title: "Fixing Code Errors with Linting"
metaTitle: "Fixing Code Errors with Linting"
metaDescription: "Fixing Code Errors with Linting"
---

## What is a Linter?
* A linter performs static analysis on code.
* Linter scans code to look for wrong usages such as syntax errors and coding convention violations. 
* Linters can be configured with specific rules, which look for violations of specific coding conventions.
* Linters allow ignoring the rules for selected lines and files.

## Popular JS Linter:

### ESLint:
**Install ESLint:** 
```
npm install -g eslint
```

**Configure ESLint:**
The config file allows defining what features and rules we want to use. There are three formats of config files supported by ESLint i.e. JavaScript, JSON, YAML. The name of the config file is `.eslintrc.*`

Create a config file by running below command:

```
eslint --init
```
After you provide answers to a few questions, a file will be created in the root folder named `.eslintrc.*` The file type depends on your chosen file format.

**Sample File:**
```
module.exports = {
  "parserOptions": {
    "ecmaVersion": "6",
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "no-empty": "error",
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }
};

```

**Shareable Configs:**

Instead of creating a config file from scratch, ESLint allows the ability to extend an existing ESLint configuration file. These are known as **Shareable Configs** that is just an npm package that exports an ESLint configuration object. Shareable Configurations can be published on npm or shared with others. The name of the package must begin with eslint-config- then the name of the configuration. 

**How to use Shareable Configs:** 
1. Add the package to the development dependencies of the project and install it.  
```
npm install eslint-config-airbnb-base
```
2. Update the ESLint configuration file to include the `extends` property and the name of the configuration that it extends.
```
extends: "airbnb-base" 
```

ESLint also includes a recommended configuration which can be used with most code bases.
```
 extends: "eslint:recommended"
```

**Popular Shareable Configs:**

`eslint-config-airbnb` - The Airbnb JavaScript and React Style Guide

`eslint-config-standard` - JavaScript Standard Style 

`eslint-config-google` - Google javaScript Style Guide

**Note:**

ESLint configuration files support a hierarchy. ESLint will recursively look for configuration files in the target folder. If an additional configuration is found, it will be used on that folder and its children. When that happens, ESLint will inherit the existing rules from the parent, then locally override whatever else was specified. 

**Ignoring Files & Directories:**

Eslint supports ignoring files and directories in a special configuration file named .eslintignore.

## Additional Resources:
* [Keep Code Consistent Across Developers The Easy Way — With Prettier & ESLint](https://itnext.io/keep-code-consistent-across-developers-the-easy-way-with-prettier-eslint-60bb7e91b76c)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html)
* [Linting on Save with Visual Studio Code and ESLint](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting)
* [How to make ESLint work with Prettier avoiding conflicts and problems](https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)