import axios from "axios";
import {
    GET_ERRORS,  GET_IMAGES ,CONCAT_IMAGE , DELETE_IMAGE
} from "../shared/constants";


import {setLoadingTrue} from './user.action'
// Get 
export const getImages = (userId) => dispatch => {
    dispatch(setLoadingTrue());
    axios
      .get( `/image/${userId}`)
      .then(res =>
        dispatch({
          type: GET_IMAGES,
          payload: res.data
        })
      )
      .catch(err =>
          dispatch({
              type: GET_ERRORS,
              payload: err.data
            })
      );
  };
  // Add 
export const addImage = (userId ,imagData) => dispatch => {
    dispatch(setLoadingTrue());
  axios
    .post( `/image/${userId}`, imagData)

    .then(res => dispatch({
        type: CONCAT_IMAGE,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};
// Delete 
export const deleteImage =( userId , imageId )=> dispatch => {
    dispatch(setLoadingTrue()); 
    axios
      .delete(`/image/${userId}/${imageId}`)
      .then(res =>
        dispatch({
          type: DELETE_IMAGE, 
          payload: res.data
        }) 
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.data
        })
      );
};
  