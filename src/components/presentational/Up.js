import React, { useState } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";
import ImagePicker from "react-native-image-crop-picker";

class Up extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      this.setState({
        images: images.map(i => {
          return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
        })
      });
    });
  }

  handlePhotos = () => {
    this.props.save();
  };

  render() {
    return (
      <Container>
        <PhotoContainer horizontal>
          {this.state.images.map(item => (
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: "center",
                borderRadius: 4,
                marginLeft: 5,
                marginRight: 5
              }}
              key={item.uri}
              source={item}
            />
          ))}
        </PhotoContainer>

        <TouchableOpacity onPress={this.handlePhotos}>
          <LinearGradient colors={["#FF904F", "#FFC350"]} style={{ borderRadius: 10 }}>
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>Escolher fotos</Text>
            </Button>
          </LinearGradient>
        </TouchableOpacity>
      </Container>
    );
  }
}

const PhotoContainer = styled.ScrollView`
  flex-direction: row;
`;

const Button = styled.View`
  justify-content: center;
  align-items: center;
  width: 120;
  height: 120;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 10;
  padding-bottom: 20;
  background-color: #f1f0ea;
`;

const Title = styled.Text`
  font-size: 30;
  margin-bottom: 40;
`;

export default withNavigation(Up);
