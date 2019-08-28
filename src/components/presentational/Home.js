import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";

const Home = props => {
  return (
    <Container>
      <Title>Wear.</Title>
      <ButtonWraper>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Picker", { type: "UP" })}
        >
          <CustomLinearGradient colors={["#FF904F", "#FFC350"]}>
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Adicionar Roupas de cima
              </Text>
            </Button>
          </CustomLinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Picker", { type: "DW" })}
        >
          <CustomLinearGradient colors={["#FF904F", "#FFC350"]}>
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Adicionar Roupas de baixo
              </Text>
            </Button>
          </CustomLinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <CustomLinearGradient colors={["#FF904F", "#FFC350"]}>
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Ver Favoritas
              </Text>
            </Button>
          </CustomLinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <CustomLinearGradient colors={["#FF904F", "#FFC350"]}>
            <Button>
              <Text style={{ textAlign: "center", color: "white" }}>
                Montar look
              </Text>
            </Button>
          </CustomLinearGradient>
        </TouchableOpacity>
      </ButtonWraper>
    </Container>
  );
};

const CustomLinearGradient = styled(LinearGradient)`
  border-radius: 10;
  margin-right: 10;
  margin-left: 10;
  margin-top: 40;
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

const ButtonWraper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10;
  background-color: #f1f0ea;
`;

const Title = styled.Text`
  font-size: 30;
  margin-bottom: 40;
`;

export default withNavigation(Home);
