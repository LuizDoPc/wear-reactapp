import React, { Component } from "react";

import PickerContainer from "@container/PickerContainer";

export default class PickerScreen extends Component {
  render() {
    const type = this.props.navigation.getParam("type", "");
    return <PickerContainer type={type} />;
  }
}
