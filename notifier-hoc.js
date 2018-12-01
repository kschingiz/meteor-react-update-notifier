import React from "react";
import { Reload } from "meteor/reload";

class MeteorUpdaterHoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newVersionAvailable: false
    };
  }

  componentDidMount() {
    Reload._onMigrate(() => {
      this.setState({ newVersionAvailable: true });
      return [false];
    });
  }

  render() {
    if (this.state.newVersionAvailable) {
      return this.props.children;
    }
    return <div />;
  }
}

export default MeteorUpdaterHoc;
