# REACT - NATIVE - DEMO - DEVK

## Frameworks we suggest using if you need this in your app

1. Navigator: https://reactnavigation.org/

2. Strings localization: https://github.com/stefalda/ReactNativeLocalization

3. Networking: rx-fetch + rxjs

4. Maps: https://github.com/airbnb/react-native-maps

5. Permissions: https://github.com/yonahforst/react-native-permissions

6. Image picker: https://github.com/ivpusic/react-native-image-crop-picker

7. OpenGL: https://github.com/ProjectSeptemberInc/gl-react-native

8. Fabric: https://www.npmjs.com/package/react-native-fabric

9. Icons: https://oblador.github.io/react-native-vector-icons/

10. UI components: https://nativebase.io/


1.create directory  android/app/src/main/assets

2. run following command from project root directory

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
