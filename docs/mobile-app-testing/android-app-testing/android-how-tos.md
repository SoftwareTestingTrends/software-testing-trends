---
sidebar_position: 3
---

# Android How-Tos

## How to install Java JDK on macOS 
Android Studio requires Java JDK to work properly. Please check [JDK installation instructions here.](https://mkyong.com/java/how-to-install-java-on-mac-osx/)

## How to check which Java versions are installed on your machine:
```sh
ls -lsah /Library/Java/JavaVirtualMachines/
```

## Setting up path for Java path & Android Studio
```sh
## Set JAVA_HOME environment variable
echo export "JAVA_HOME=\$(/usr/libexec/java_home)" >> ~/.zshrc

## If you have multiple JDK versions installed and you want it to be a specific one, use -v flag
echo export "JAVA_HOME=\$(/usr/libexec/java_home -v 1.7)" >> ~/.zshrc

# Setting up path for JDK
export PATH="/usr/local/opt/openjdk@8/bin:$PATH"
# Setting up path for Android Studio
export ANDROID_HOME=/Users/your-username/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/tools/bin
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

## Setting up Appium on your machine
* [Check out Appium workshop by Wim Selles](https://github.com/wswebcreation/appium-workshop/blob/master/docs/APPIUM.md#platform-dependencies-for-android)

## Check connected devices:
To see list of devices attached to your machine:
```
adb devices
```

## Install app on Simulator using adb command:
```
adb install /app-folder-location/app-name.apk
```

## Capturing logs on real device:
```sh
adb log -s <device_id> logcat -v threadtime
```
Note that `-s <device_id>` is optional if only one device is connected to your pc.

## How to share/mirror your real device screen
You can share your Android device screen with the teammates using [Vysor](https://www.vysor.io/). Vysor lets you view and control your mobile/device on your computer. It's basically a window to your Android. 
### Setting up Vysor:
1. Install Vysor for chrome using [link](https://www.vysor.io/download/?return=https%3A%2F%2Fwww.vysor.io%2F)

2. Once installed, you'll find it under your installed apps.

3. Connect your Device to your system using USB cable.

4. Make Sure your Android have USB debugging ON, If not, go to 'Settings' on your device, search for USB Debugging, and make it enabled.

5. Open Vysor app. It will show you a notification about your connected device. 

6. Now to see your Device screen, just click on 'View' button and you'll be able to see your device screen on your desktop. 

7. You can also record the android activity displayed by vysor by using Quicktime Player (or any other screen recording tool). Shortcut for mac to see recording option: Command + Shift + 5.

## How to run UIAutomatorViewer?
1. Navigate to `~/Library/Android/sdk/tools/bin`
2. Type `uiautomatorviewer` and press enter.

* Issue: Unable to launch uiautomatorviewer on macOS Big Sur, resulting in an error `java.lang.NullPointerException`
* Solution:
1. Download the latest `swt.jar` from https://download.eclipse.org/eclipse/downloads/index.html, rename downloaded `swt.jar` to `swt2.jar`
2. Copy `swt2.jar` to `Android/sdk/tools/lib/x86_64/` and `Android/sdk/tools/lib/x86/` folders. 

Don't REPLACE, Don't DELETE, just copy the new swt2.jar.

## References: 
* https://github.com/android/android-test/issues/911
* https://sqa.stackexchange.com/questions/46388/uiautomatorviewer-not-running-on-mac-big-sur
* https://sqa.stackexchange.com/questions/47458/unable-to-launch-uiautomatorviewer-in-mac-os-big-sur

