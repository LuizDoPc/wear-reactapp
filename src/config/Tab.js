import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";

const Tab = props => {
  return (
    <Container>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <LinearGradient
          colors={["#FF2A28", "#FF7033"]}
          style={{ width: 100, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 5 }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-top: 5;
  padding-left: 5;
  padding-right: 5;
  padding-bottom: 5;
  background-color: #f1f0ea;
`;

export default withNavigation(Tab);
