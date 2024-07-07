---
sidebar_position: 12
---

# Mobile App Testing

## Type of testing on mobile devices
- App Upgrades
- Supported Version
- Permissions
- Functional Features
- Crash Tracking
- OS Versions

# Automation
## Appium
Appium is a popular open-source test automation framework designed primarily for testing mobile applications. Here's a breakdown of its key features and why it's widely used:

**What Appium Does:**

* **Cross-Platform Testing:** Appium enables you to write tests that run on both iOS and Android devices without major code changes. This saves significant time and effort.
* **Supports Various App Types:** It can automate tests for:
    * Native Apps: Apps built using platform-specific SDKs (Android, iOS)
    * Hybrid Apps: Apps mixing web and native components within a web view wrapper 
    * Mobile Web Apps: Websites accessed via mobile browsers 
* **Programming Language Flexibility:** You can write Appium tests in various languages (Java, Python, JavaScript, Ruby, etc.), allowing you to work in your preferred language.
* **"No Recompilation" Philosophy** Appium doesn't require you to modify or recompile your app code for testing.

**How Appium Works (Simplified):**

1. **Appium Server:**  Acts as a hub, receiving test commands via a client library
2. **Client Libraries:** You write your tests using Appium's client libraries in your chosen language.
3. **JSON Wire Protocol:** Commands and data are transmitted to the Appium server over HTTP using a standard format.
4. **Automation Frameworks:** Appium uses native UI automation frameworks provided by the platform:
    * Android: UIAutomator 2 
    * iOS: XCUITest
5. **Device/Emulator:** Your tests run on the target device, and results are sent back to the Appium server.

**Why Choose Appium:**

* **Large Community:**  Wide adoption means strong support and resources
* **Leverages Existing Skills:** Can integrate with Selenium WebDriver for testers with web automation experience
* **Ideal for Cross-Platform Apps:**  Write once, run on multiple platforms

## What is Appium Doctor?
Appium Doctor does the following:

**Key Functions:**

1. **Checks for Dependencies and Configurations:**  It verifies if all the software components needed to run Appium and mobile app tests are correctly installed and set up. This includes:
    * Java Development Kit (JDK)
    * Android SDK
    * Xcode (for iOS testing)
    * Node.js and npm
    * Appium itself
    * Connected device settings or emulator configurations

2. **Diagnoses Potential Issues:** Appium Doctor identifies a wide range of common misconfigurations and missing dependencies. Some examples include:
    * Incorrect paths to Android SDK or Xcode 
    * Outdated Appium dependencies
    * Compatibility issues with specific Android or iOS versions
    * Problems with USB debugging or device connectivity

3. **Provides Guidance for Resolution:** Appium Doctor not only highlights problems but also offers solutions and suggestions to fix them. This may involve:
    * Setting environment variables
    * Updating software components
    * Changing device settings
    * Providing links to relevant documentation

**Benefits of Using Appium Doctor**

* **Saves Time:**  Manually checking all dependencies and configurations can be tedious and error-prone. Appium Doctor automates this, saving you significant setup time.  
* **Prevents Frustration:** Troubleshooting app testing setup can be complex. Appium Doctor helps you resolve issues early, ensuring a smoother testing experience.
* **Essential for Beginners:** If you're new to Appium or mobile testing, Appium Doctor is a great way to ensure your system is ready to go.
* **Good Practice Even for Experienced Users:** Appium Doctor helps verify your system stays up-to-date and catches issues you might overlook.

**How to Run Appium Doctor:**

1. **Install:** If you haven't already, install Appium Doctor using npm: `npm install -g appium-doctor`
2. **Run:** Open your terminal and type: `appium-doctor` 
3. **Optional Flags:** Customize the checks with flags like `--android`, `--ios`, etc. See `appium-doctor --help` for more.

## General Appium Concepts

* **Appium's architecture.**  Appium server acts as a bridge, client libraries send commands, device vendor frameworks (UIAutomator/XCUITest) execute on the device.
* **What are the differences between Appium and Selenium?** Appium extends Selenium for mobile, focuses on native, hybrid, and mobile web apps.
* **Advantages and disadvantages of Appium** Pros: Cross-platform, language choice. Cons: Slower than native tools, some limitations.

**Setup & Configuration**

* **What are Desired Capabilities?**  JSON object specifying device type, app path, and other test session parameters.
* **How do you set up an Android emulator for Appium testing?** Use Android Studio's AVD manager, ensure SDK tools are installed.
* **How do you handle device permissions in Appium?** Grant permissions at runtime with capabilities or manually interact during the test.

**Test Design**

* **How do you locate elements in Appium?** Prioritize Accessibility ID, then XPath, class names, etc.
* **Describe strategies for handling hybrid app testing** Use Appium's context switching to interact with native and web views.
* **How do you perform gestures like swipe, tap, and zoom in Appium?** Use TouchAction class or specific methods provided by client libraries.

**Challenges and Best Practices**

* **How do you troubleshoot flaky Appium tests?**  Check locators, network stability, add waits/retries, inspect logs.
* **Best practices for organizing Appium tests?** Utilize Page Object Model, keep tests modular, implement reporting.
* **How might you test an app's performance with Appium?** Limited; focus on UI response time, network calls, basic profiling.

## **Why not XPath on iOS:**

- XPath and its cousin, XML, are not native languages for iOS development.
- Essentially, every time you run an XPath query, the entire app hierarchy must be recursively walked and serialized into XML.Then, once the XPath query has been run on this XML serialization, the list of matching elements must be deserialized into actual element objects before their WebDriver representations are returned to your client call.

## Automated Testing - WebDriverIO
https://ambreenkhan.dev/automated-testing-wdio

##  How to check device logs for Android devices?
Here's a step-by-step guide on how to check device logs using ADB (Android Debug Bridge):

**Prerequisites:**

1. **ADB Installed:** Ensure you have ADB installed on your computer. It's included in Android Studio's platform-tools folder.
2. **USB Debugging Enabled:** On your Android device, go to Settings -> Developer Options and enable "USB debugging".
3. **Device Connected:**  Connect your Android device to your computer via USB. You might need to authorize the connection from the pop-up on your device.

**Steps:**

1. **Open a Terminal/Command Prompt:** Navigate to the folder where ADB is installed (usually platform-tools inside your Android SDK location).

2. **Check Device Connection:** Run `adb devices`. You should see your device listed as "authorized".

3. **Access the Logcat:** Run the following command: 
    ```bash
    adb logcat
    ```
    This will stream all the device logs in real-time to your terminal.

4. **Filtering Logs (Optional):** Logcat can be noisy. Use filters:
    * By Tag: `adb logcat -s TAG_NAME` 
    * By Priority: `adb logcat *:W` (Warnings and above)
    * See more with: `adb logcat --help`

5. **Save Logs to File (Optional):**  Redirect the output to a file:
    ```bash
    adb logcat > device_log.txt 
    ```

6. **Stop Logcat:** Press Ctrl+C in the terminal window.

**Additional Tips:**

* **Search within Logs:** Use your terminal's search function or pipe the output to `grep` (e.g., `adb logcat | grep "keyword"`)
* **Clear Existing Logs:** To get a fresh start, run `adb logcat -c`

**Important Note:** The specific log information available may vary depending on the Android version and device manufacturer. 

## How to check device logs for iOS devices?
Here are the primary ways to check logs for iOS devices:

**1. Using Xcode**

* **Connect your iOS device:**  Physically connect your iPhone or iPad to your Mac using a USB cable.
* **Open Xcode:** Launch the Xcode application on your Mac.
* **Locate Device Logs:** 
    * Go to the Window menu > Devices and Simulators  
    * Select your connected device in the sidebar.
    * Click on the "View Device Logs" button. Logs will appear in a separate window.
* **Filtering and Saving:** You can filter logs by process, type, and keywords. Xcode also allows you to save logs for later analysis.

**2. Using Console App (macOS)**

* **Connect your device:** Ensure your iOS device is connected to your Mac.
* **Open Console:** Search for "Console" in Spotlight or find it in Applications/Utilities.
* **Locate your device:** Select your device from the sidebar of the Console app.  
* **Viewing Logs:**  The main window will display device logs. You can filter and search as needed.

**3. Third-Party Tools**

* **Sysdiagnose (iOS Built-in):** While not strictly a log viewer, you can generate detailed system diagnostics reports that include logs. Instructions can be found on Apple's support website.
* **Commercial Tools:** Tools like iMazing, Decipher Tools, and others offer more advanced log viewing and analysis, potentially with easier interfaces.

**4. For Developers (Xcode Organizer)**

* **Connect your device:** Ensure the device is connected.
* **Open Xcode Organizer:**  Window menu > Organizer 
* **Device Logs:** Select your device and then the "Device Logs" tab. This provides crash reports and logs generated by your own apps when tested on the device.

**Important Notes:**

* **Device Trust:**  Ensure you've trusted your Mac on the iOS device before connecting for the first time.
* **Log Types:**  You'll see system logs, app crash logs, and logs your apps specifically generate.

##  How to check API calls for Mobile?
- [Flipper](https://fbflipper.com/)
- Charles Proxy
