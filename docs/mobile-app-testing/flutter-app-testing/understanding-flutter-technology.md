---
sidebar_position: 1
---

# Understanding Flutter Technology

## What is Flutter?
Flutter is Google's UI toolkit for building applications for mobile, web, and desktop from a single codebase.

## Supported Platforms:
* iOS
* Android
* Windows
* macOS
* Linux
* Web

## Installation:
* Check the most up-to-date instructions on how to install the Flutter SDK at `docs.flutter.dev`.
* Tools to install
  * Flutter SDK
  * Visual Studio Code with the Flutter & Dart plugin
  * The software required by your chosen development target

## Things to know:
* **Stateful Hot Reload:** `Stateful Hot Reload` is a feature in Flutter that allows developers to see changes in their code almost instantly without losing the state of the app. When you use Stateful Hot Reload, the Flutter framework preserves the state of your app (such as variables, data entered by users, and so on) while applying the code changes. Hot reload is triggered when you save changes to a source file. Note that Flutter can't hot-reload web applications. 
* The `pubspec.yaml` file specifies basic information about your app, such as its current version, its dependencies, and the assets with which it will ship.
* The `analysis_options.yml` file configures the analyzer, which statically analyzes Dart code to check for errors, warnings, and lints. This file determines how strict Flutter should be when analyzing your code.
* Widgets: `Widgets` are the elements from which you build every Flutter app. Even the app itself is a widget.
* Having separate widgets for separate logical parts of your UI is an important way of managing complexity in Flutter.
  
## Creating a new Flutter project:
* Check https://docs.flutter.dev/get-started/test-drive
* Check https://codelabs.developers.google.com/codelabs/flutter-codelab-first#0

## How-to's:
### How to run a Flutter App:
1. Open the Command Palette.
2. Select the `Flutter: Select Device`. Note that if no devices are running, this command prompts you to enable a device.
3. Select a target device from `Select Device` prompt.
4. After you select a target, start the app. Go to **Run > Start Debugging** or press `F5`. Wait for the app to launch.
**Alternate way to select device:** At the bottom right corner of VS Code, you'll find a button that shows the current target device. Click to change it.

### Flutter DevTools
1. Open the Command Palette.
2. Select the `Flutter: Open DevTools`.
3. Select `Open DevTools in Web Browser`.