import {
  SET_LOADING_TRUE, 
  CONCAT_NEW_USER,
  GET_USERS,
  GET_ERRORS,
  UPDATE_USER,
  DELETE_USER,
  GET_IMAGES,
  CONCAT_IMAGE,
  DELETE_IMAGE
} from "../shared/constants";

const initialState = {
  userList: [],
  imageList: [] ,
  loading: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true
      }; 
    case CONCAT_NEW_USER:
      return {
        ...state,
        userList: state.userList.concat(action.payload),
        loading: false
      };
    case GET_USERS:
      return {
        ...state,
        userList: action.payload,
        loading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        userList: state.userList.map((el) =>
          el._id === action.payload._id ? action.payload : { ...el }
        ) , loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((el) => el._id !== action.payload._id ),
        loading: false
      };
    case GET_IMAGES:
      return {
        ...state,
        imageList: action.payload,
        loading: false
      };
    case CONCAT_IMAGE:
      return {
        ...state,
        imageList: state.imageList.concat(action.payload)  , loading: false
      };
    case DELETE_IMAGE:
      return {
        ...state,
        imageList: state.imageList.filter((el) => el._id !== action.payload._id)  , loading: false
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
