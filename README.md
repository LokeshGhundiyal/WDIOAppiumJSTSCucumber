## System Requirements:
1. **JAVA** – Java should be installed on your machine with JDK 18.0 or higher.
   - JAVA_HOME environment variable should be added to the system.

2. **Android Studio** – Latest version of Android Studio should be installed on your machine.
   - ANDROID_HOME environment variable should be added pointing to Android SDKs.
   - ANDROID_SDK_ROOT environment variable should be added pointing to Android SDKs.

3. **Emulator** – An emulator must be set up using Android Studio.

4. **Node.js** – Node.js should be installed.

5. **Appium Server** – Appium server must be installed.

6. **Git Bash** – Git Bash should be installed to interact with code in GitHub.

7. **Visual Studio Code (VSC)** – Visual Studio Code should be installed.

## Steps to Execute the Code:
1. Clone the repository to your local machine.
   
2. Install all the required packages:
   - Navigate to the project root where `package.json` is located.
   - Run `npm i` to install dependencies.

3. Update desired capabilities in `wdio.conf.js` to match the settings of your system.

4. Execute scenarios added using the command `npm run android`.

5. View the generated results after execution using the command `allure open`.
