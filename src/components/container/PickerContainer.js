import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

import Picker from "@presentational/Picker";

import { savePhotos, getPhotos } from "@useCases";

class PickerContainer extends Component {
  componentDidMount() {
    this.props.getPhotos(this.props.type);
  }

  render() {
    console.log(this.props.isLoading);
    return (
      <Picker
        type={this.props.type}
        photos={
          this.props.type === "UP" ? this.props.photosUp : this.props.photosDw
        }
        save={this.props.savePhotos}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    photosUp: state.photos.photosUp,
    photosDw: state.photos.photosDw,
    isLoading: state.photos.isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  savePhotos: (type, photos) => dispatch(savePhotos(type, photos)),
  getPhotos: type => dispatch(getPhotos(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(PickerContainer));
