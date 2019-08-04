import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

import Up from "../presentational/Up";

class UpContainer extends Component {
  _save = photos => {};

  render() {
    return <Up photos={this.props.photos} />;
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos.photos
  };
};

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(UpContainer));
