import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";
import ImagePicker from "react-native-image-crop-picker";
import ImgToBase64 from "react-native-image-base64";

const Picker = props => {
  const [images, setImages] = useState(props.photos ? props.photos : []);

  useEffect(() => {
    setImages(props.photos ? props.photos : []);
  }, [props.photos]);

  const handlePhotos = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(async photos => {
      const newImages = [];
      if (images.length > 0) {
        images.forEach(i => newImages.push(i));
      }
      for (let pic of photos) {
        newImages.push(
          `data:image/jpg;base64,${await ImgToBase64.getBase64String(pic.path)}`
        );
      }
      setImages(newImages);
    });
  };

  return (
    <Container>
      <PhotoContainer horizontal>
        {props.isLoading ? (
          <ActivityIndicator />
        ) : images.length > 0 ? (
          images.map((item, index) => (
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: "center",
                borderRadius: 4,
                marginLeft: 5,
                marginRight: 5
              }}
              key={index}
              source={{ uri: item }}
            />
          ))
        ) : (
          <Text>Sem imagens</Text>
        )}
      </PhotoContainer>

      <Row>
        <TouchableOpacity onPress={handlePhotos}>
          <LinearGradient
            colors={["#FF904F", "#FFC350"]}
            style={{ borderRadius: 10 }}
          >
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Escolher fotos
              </Text>
            </Button>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.save(props.type, images)}>
          <LinearGradient
            colors={["#FF904F", "#FFC350"]}
            style={{ borderRadius: 10 }}
          >
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Salvar
              </Text>
            </Button>
          </LinearGradient>
        </TouchableOpacity>
      </Row>
    </Container>
  );
};

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

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

export default withNavigation(Picker);
