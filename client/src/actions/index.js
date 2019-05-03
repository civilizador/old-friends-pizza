import axios from 'axios'

async function getProfileData() {
     const data =  await axios.get(`/api/current_user`)
   return data
}

export const getCurrentUser = () => {
    return async function(dispatch,getState) {
        const data = await getProfileData();
              if (data!=='no_user_logged_in') ( console.log('Data from Action ',data) )
              else ( console.log('no user_logged_in') )
         dispatch({ type: 'GET_USER_DATA',  payload: data })
    }
}
