import Actions from "@actions/types";

const defaultState = {
  photosUp: [],
  photosDw: [],
  error: undefined,
  isLoading: false
};

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case Actions.GET_UP:
    case Actions.GET_DW:
      return {
        ...state,
        isLoading: true
      };
    case Actions.SAVE_UP_SUCCESS:
    case Actions.GET_UP_SUCCESS:
      return {
        ...state,
        photosUp: JSON.parse(action.payload.data),
        isLoading: false
      };
    case Actions.SAVE_DW_SUCCESS:
    case Actions.GET_DW_SUCCESS:
      return {
        ...state,
        photosDw: JSON.parse(action.payload.data),
        isLoading: false
      };
    case Actions.GET_DW_FAILURE:
    case Actions.GET_UP_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
