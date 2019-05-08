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

export const login = ({ username, password }) => async (dispatch) => {
  await axios({
    method:"post",
    url:"/api/login",
    data: { username, password },
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
