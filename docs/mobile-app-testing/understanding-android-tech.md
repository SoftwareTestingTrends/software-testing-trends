---
sidebar_position: 2
---

# Understanding Android Technology

## What is an apk?

- Android apps use an extension .apk
- APK (Android package kit) is the package file format used by the Android for distribution and installation of mobile apps.

## What is debug APK?
- A debug build is a fully self contained apk version which is even deployable in a production environment with the limitation of lacking some code compression/optimization/shrinking plus developer authentication. 
- For debug builds the apk will be signed with the default debug signing keys with debug flag enabled.

## Differences between release & debug APK
- The primary difference (if specified otherwise in the build.gradle) between a debug build and a release build is the key with which they are signed. For debug builds the apk will be signed with the default debug signing keys. Most app distribution channels want an app signed with a release key to authenticate the developer.
- The other difference is the debug flag that is turned on debug builds. With the debug flag ON, you can:
  - Debug it with debuuger
  - Profile the cpu, memory, network with android studio profiler
  - See the logs in the logcat
  - Debug the layout with layout inspector
- Proguard can be turned on for release builds. (also for debug builds but not advised). This step needs to be done explicitly and is false by default.

Note: these things can be altered in your build.config and you can choose what ever permutation and combination you wish.

## What is package id?

- A unique identifier given to each app by its developer.

## What is AndroidManifest.xml?

- The manifest file describes essential information about your app to the Android build tools, the Android operating system, and Google Play.
- Main information declared:
  - The app's package name which usually matches your code's namespace.
  - The components of the app, which include all activities, services, broadcast receivers, and content providers.
  - The permissions that the app needs in order to access protected parts of the system or other apps.
  - The hardware and software features the app requires, which affects which devices can install the app from Google Play.

## What is an activity?

- An Android app is a collection of activities.
- A "screen" is a pretty close analogy to activities. Each screen of an app typically maps to a single activity.
- An activity provides the developer with a window where he/she can draw the UI
- When a user moves from one screen to another, the app moves to the next activity from the current one.

## What is an Intent?
- Activities are launched via Intents.
- There are two types of intents: explicit and implicit.
### Explicit Intent
- An explicit intent uses the name of the app along with the name of the activity (as declared in the app's manifest file) to launch the intended activity.
- Explicit intents are used by developers for moving between activities within a single app.
- Activities can be launched on connected devices from the command line using **abd** and the **am** command (short for Activity Manager).
- **Example:**  
  Here is an example of launching the default camera app using an explicit intent. We specify the package name of the camera app and the name of the activity.

```
adb shell am start -n com.android.camera2/com.android.camera.CaptureActivity
```
### Implicit Intent

- An implicit intent doesn't specify a particular app or activity to launch, instead it specifies the action that user would like to do.
- When developers build their activities to be used by other apps, they label their activities so they may be targeted by implicit intents.
- Activities can be given an action and category.
- **Example:**
  Some common examples of android intents are android.intent.action.SEND, android.intent.action.VIEW, and android.intent.action.EDIT. These actions describe the function a user might want to perform.
- When an app launches an activity using an implicit intent the Android operating system looks through all the activities of all the apps on the device (using their manifest files) and finds the activities which declared that they respond to the action (and category) specified in the intent. If a single activity is found which handles the given action, the activity is launched and the resulting UI shown to the user.
- To launch the camera app using implicit intents, specify the IMAGE_CAPTURE action:

```sh
adb shell am start -a android.media.action.IMAGE_CAPTURE
```

To launch the camera app directly to video capture:

```sh
adb shell am start -a android.media.action.VIDEO_CAMERA
```

To test if the activity you want is launching on emulator/device:

```sh
adb shell am start -n <app_package_name>/<full_activity_name>
```
### How to check which activities and intents are supported by an app?
All activities must be declared in the app's AndroidManifest.xml file. If you have your .apk file, you can find the manifest by opening any android project in Android Studio and choosing Build >> Analyze APK ... from the top navigation bar. Choose your APK file from the file system and then view the AndroidManifest.xml file. All activities and the intents they respond to will be listed in the 'activity' nodes.

## Additional Resources:
- https://medium.com/codingtown/how-to-generate-apk-file-from-react-native-f4fbc923bfdb
- https://developer.android.com/guide/topics/manifest/manifest-intro
- https://appiumpro.com/editions/56
- http://appium.io/docs/en/commands/device/activity/current-activity/