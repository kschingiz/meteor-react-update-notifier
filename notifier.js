import React from "react";
import { Reload } from "meteor/reload";

class MeteorUpdateNotifier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newVersionAvailable: false
    };
  }

  hookOnMigrate(props) {
    if (!props.disabled) {
      Reload._onMigrate(() => {
        this.setState({ newVersionAvailable: true });
        return [false];
      });
    }
  }

  componentDidMount() {
    this.hookOnMigrate(this.props);
  }

  render() {
    if (this.state.newVersionAvailable) {
      return this.props.children;
    }
    return null;
  }
}

export default MeteorUpdateNotifier;
