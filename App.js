import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

/* Config - Imports */
import StackIntroRoute from "./src/config/routes";

/* Redux */
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./src/reducers";

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ViewStyled>
            <StackIntroRoute />
          </ViewStyled>
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}

const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
`;
