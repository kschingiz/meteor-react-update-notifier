// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-react-update-notifier.js.
import { name as packageName } from "meteor/kschingiz:meteor-react-update-notifier";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-react-update-notifier - example', function (test) {
  test.equal(packageName, "meteor-react-update-notifier");
});
