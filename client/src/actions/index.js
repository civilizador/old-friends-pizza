import axios from 'axios'
let wrongPass = false;

async function getProfileData() {
     const data =  await axios.get(`/api/current_user`)
   return data
}

export const getCurrentUser = () => {
    return async function(dispatch,getState) {
        const data = await getProfileData();
              if (data!=='no_user_logged_in') {
                  dispatch({ type: 'GET_USER_DATA',  payload: data.data })
              }
              else dispatch({ type: 'GET_USER_DATA',  payload: 'no user_logged_in' })
     }
}

export const wrongPassAction = () => {
  return function(dispatch,getState) {
    if(wrongPass){
      dispatch({ type: 'WRONG_PASSWORD',  payload: 'wrong_password' }) }
  }
}

// Creating and Displaying Items

export const getAllItems = async () => {
  await axios({
    method:"get",
    url:"/api/getAll",
  })
    .then( (response) => {
        console.log(response);
        return response
      })
    .catch( (err) => {
        console.log(err);
    } )
}

export  const getAllItemsAction = () => {
  return async function(dispatch,getState) {
      const data = await getAllItems();
            if (data) {
                dispatch({ type: 'GET_ALL_ITEMS',  payload: data })
            }
   }
}

export const createItemAction = (itemObject) => async (dispatch) => {
  await axios({
    method:"post",
    url:"/api/addItem",
    data: itemObject
  })
    .then( (response) => {
        console.log(response.status);
        dispatch( getAllItemsAction() );
      })
    .catch( (err) => {
        console.log(err);
    })
}

// END OF Creating and Displaying Items


export const login = ({ username, password }) => async (dispatch) => {
  await axios({
    method:"post",
    url:"/api/login",
    data: { username, password }
  })
    .then( (response) => {
        console.log(response.status);
        dispatch( getCurrentUser() );
      })
    .catch( (err) => {
        wrongPass=true;
        console.log(err,wrongPass);
         dispatch( wrongPassAction() );
    } )
}


export const logout = () => async (dispatch) => {
  await axios.get("/api/logout")
  dispatch(getCurrentUser());
}
