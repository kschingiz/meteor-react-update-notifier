# Meteor React Update Notifier

This package allows you to notify your users about meteor app update.

If the app is updated you can give your user a choice whether he/she wants to update the page or continue working

## Installation

meteor add kschingiz:meteor-react-update-notifier

## Usage

```
import React from "react";
import MeteorUpdateNotifier from "meteor/kschingiz:meteor-react-update-notifier";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    window.location.reload();
  }

  render() {
    return (
      <MeteorUpdateNotifier>
        <div>
          <h4>New Version is available, do you want to reload?</h4>
          <input type="button" value="Update" onClick={this.onUpdate} />
          <input type="button" value="Not yet" onClick={this.hide}/>
        </div>
      </MeteorUpdateNotifier>
    );
  }
}
```

## Props

Update notifier component can accept following props:

1.  disabled - true/false, enable or disable the component

## TODO

1.  Tests
