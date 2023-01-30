import axios from "axios";

//ACTION TYPE
const GET_ZIPCODE = "GET_ZIPCODE";
const SET_ZIPCODE = "SET_ZIPCODE";

//ACTION CREATOR
export const _getZipCode = (zipcode) => ({ type: GET_ZIPCODE, zipcode });
export const _setZipCode = (zipcode) => ({ type: SET_ZIPCODE, zipcode });

//THUNK CREATOR
export const getZipCode = (zipcode) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/zipcode/${zipcode}`);
      dispatch(_getZipCode(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setZipCode = (zipcode) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/zipcode", { zipcode });
      dispatch(_setZipCode(data));
    } catch (e) {
      console.error(e);
    }
  };
};

//REDUCER
function getZip(state = {}, action) {
  switch (action.type) {
    case GET_ZIPCODE:
      return action.zipcode;
    case SET_ZIPCODE:
      return action.zipcode;
    default:
      return state;
  }
}

export default getZip;
