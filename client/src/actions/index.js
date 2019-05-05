import axios from 'axios'

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
              else {
                dispatch({ type: 'GET_USER_DATA',  payload: 'no user_logged_in' })
              }
     }
}

export const login = ({ username, password }) => async (dispatch) => {
  await axios({
    method:"post",
    url:"/api/login",
    data: { username, password },
  })
  
  dispatch(getCurrentUser());
}


export const logout = () => async (dispatch) => {
  await axios.get("/api/logout")
  dispatch(getCurrentUser());
}
