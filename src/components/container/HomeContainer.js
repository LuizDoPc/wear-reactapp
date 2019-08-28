import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

import Home from "@presentational/Home";

class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(HomeContainer));
