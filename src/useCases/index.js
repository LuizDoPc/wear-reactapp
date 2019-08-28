import PhotoActions from "@actions";
import AsyncStorage from "@react-native-community/async-storage";

const savePhotos = (type, photos) => {
  return async dispatch => {
    try {
      type === "UP"
        ? dispatch(PhotoActions.SAVE_UP())
        : dispatch(PhotoActions.SAVE_DW());

      await AsyncStorage.setItem(type, JSON.stringify(photos));

      type === "UP"
        ? dispatch(PhotoActions.SAVE_UP_SUCCESS(JSON.stringify(photos)))
        : dispatch(PhotoActions.SAVE_DW_SUCCESS(JSON.stringify(photos)));
    } catch (e) {
      type === "UP"
        ? dispatch(PhotoActions.SAVE_UP_FAILURE(e))
        : dispatch(PhotoActions.SAVE_DW_FAILURE(e));
    }
  };
};

const getPhotos = type => {
  return async dispatch => {
    try {
      type === "UP"
        ? dispatch(PhotoActions.GET_UP())
        : dispatch(PhotoActions.GET_DW());

      const value = await AsyncStorage.getItem(type);
      type === "UP"
        ? dispatch(PhotoActions.GET_UP_SUCCESS(value))
        : dispatch(PhotoActions.GET_DW_SUCCESS(value));
    } catch (e) {
      type === "UP"
        ? dispatch(PhotoActions.GET_UP_FAILURE(e))
        : dispatch(PhotoActions.GET_DW_FAILURE(e));
    }
  };
};

module.exports = {
  savePhotos,
  getPhotos
};
