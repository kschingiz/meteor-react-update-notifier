Package.describe({
  name: "kschingiz:meteor-react-update-notifier",
  version: "1.0.0",
  // Brief, one-line summary of the package.
  summary:
    "This package allows you to notify your users about meteor app update",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/kschingiz/meteor-react-update-notifier",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.8");
  api.use("ecmascript");
  api.mainModule("meteor-react-update-notifier.js");
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("kschingiz:meteor-react-update-notifier");
  api.mainModule("meteor-react-update-notifier-tests.js");
});
