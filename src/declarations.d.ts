/*
  <plugin name="cordova-plugin-device" spec="^2.0.1" />
  <plugin name="cordova-plugin-inappbrowser" spec="^2.0.2" />
  <plugin name="cordova-plugin-ionic-webview" spec="^1.1.16" />
  <plugin name="cordova-plugin-ionic-keyboard" spec="^2.0.5" />
  <plugin name="cordova-plugin-statusbar" spec="^2.4.1" />
  <plugin name="cordova-plugin-splashscreen" spec="^5.0.2" />
  <plugin name="cordova-plugin-network-information" spec="^2.0.1" />
  <plugin name="onesignal-cordova-plugin" spec="^2.3.1" />
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';