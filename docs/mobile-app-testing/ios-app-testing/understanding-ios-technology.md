---
sidebar_position: 4
---

# Understanding iOS Technology

### What is bundle id?

- The bundle ID is a unique identifier given to each app by its developer. In the case of Apple apps, their bundle IDs start with com.apple.

## What is simctl?

- The `simctl` command controls iOS simulator instances from command line. It’s very similar to the adb for Android.
- It can be run via xcrun simctl. You can see help for `simctl` from command line by running `xcrun simctl help`
- What you can do using `simctl`:
  - Listing all available simulators
  ```
  xcrun simctl list
  ```
  - Creating new simulator
  - Erasing simulator
  - Installing app inside simulator
  - Add photo/video to simulator and may more

### Open URLs on Simulator
```shell
xcrun simctl openurl booted <URL>
xcrun simctl openurl booted "https://google.ca"
```

Please check out [Article: Control iOS Simulators from Command Line](https://medium.com/xcblog/simctl-control-ios-simulators-from-command-line-78b9006a20dc) for more commands.