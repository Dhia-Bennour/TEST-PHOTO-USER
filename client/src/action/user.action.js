import axios from "axios";

import {
    SET_LOADING_TRUE,CONCAT_NEW_USER,GET_USERS ,GET_ERRORS,UPDATE_USER,DELETE_USER
} from "../shared/constants";


// Set loading state
export const setLoadingTrue = () => {
    return {
      type:  SET_LOADING_TRUE
    };
  };
 
// Add 
export const addUser = (userData) => dispatch => {
    dispatch(setLoadingTrue());
 
  axios
    .post("/user", userData)

    .then(res => dispatch({
        type: CONCAT_NEW_USER,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};
 
// Get 
export const getUser = () => dispatch => {
  dispatch(setLoadingTrue());
  axios
    .get("/user/all")
    .then(res =>
      dispatch({
        type: GET_USERS,
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

// update 

export const updateUser = (userId, userData ) => dispatch => {
    dispatch(setLoadingTrue());
  axios
    .put(`/user/${userId}`, userData)
    .then(res => dispatch({
        type: UPDATE_USER,
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
export const deleteUser = userId => dispatch => {
    dispatch(setLoadingTrue()); 
    axios
      .delete(`/user/${userId}`)
      .then(res =>
        dispatch({
          type: DELETE_USER , 
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



 