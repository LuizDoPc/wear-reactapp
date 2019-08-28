import actions from "./types";

function SAVE_UP() {
  return {
    type: actions.SAVE_UP
  };
}
function SAVE_UP_SUCCESS(data) {
  return {
    type: actions.SAVE_UP_SUCCESS,
    payload: {
      data
    }
  };
}
function SAVE_UP_FAILURE(error) {
  return {
    type: actions.SAVE_UP_FAILURE,
    payload: {
      error
    }
  };
}
function GET_UP() {
  return {
    type: actions.GET_UP
  };
}
function GET_UP_SUCCESS(data) {
  return {
    type: actions.GET_UP_SUCCESS,
    payload: {
      data
    }
  };
}
function GET_UP_FAILURE(error) {
  return {
    type: actions.GET_UP_FAILURE,
    payload: {
      error
    }
  };
}
function SAVE_DW() {
  return {
    type: actions.SAVE_DW
  };
}
function SAVE_DW_SUCCESS(data) {
  return {
    type: actions.SAVE_DW_SUCCESS,
    payload: {
      data
    }
  };
}
function SAVE_DW_FAILURE(error) {
  return {
    type: actions.SAVE_DW_FAILURE,
    payload: {
      error
    }
  };
}
function GET_DW() {
  return {
    type: actions.GET_DW
  };
}
function GET_DW_SUCCESS(data) {
  return {
    type: actions.GET_DW_SUCCESS,
    payload: {
      data
    }
  };
}
function GET_DW_FAILURE(error) {
  return {
    type: actions.GET_DW_FAILURE,
    payload: {
      error
    }
  };
}

export default {
  SAVE_UP,
  SAVE_UP_SUCCESS,
  SAVE_UP_FAILURE,
  GET_UP,
  GET_UP_SUCCESS,
  GET_UP_FAILURE,
  SAVE_DW,
  SAVE_DW_SUCCESS,
  SAVE_DW_FAILURE,
  GET_DW,
  GET_DW_SUCCESS,
  GET_DW_FAILURE,
};
