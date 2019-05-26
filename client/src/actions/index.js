import axios from 'axios'
let wrongPass = false;

// ACTIONS

// USER LOGIN ACTIONS

  // Get Current User Data ACTION
  export const getCurrentUser = () => {
      return async function(dispatch,getState) {
          const data = await getProfileData();
                if (data!=='no_user_logged_in') {
                    dispatch({ type: 'GET_USER_DATA',  payload: data.data })
                }
                else dispatch({ type: 'GET_USER_DATA',  payload: 'no user_logged_in' })
       }
  }

  // LOGIN STATUS ACTION
  export const loginAction = () => {
      return async function(dispatch,getState) {
        console.log('this message from action USER_LOGED_IN');
          dispatch({ type: 'USER_LOGED_IN',  payload: true })
       }
  }
  // LOGIN STATUS ACTION
  export const logoutAction = () => {
       return async function(dispatch,getState) {
         await axios.get("/api/logout")
         dispatch(getCurrentUser());
        console.log('this message from action USER_LOGOUT');
          dispatch({ type: 'LOGOUT',  payload: false })
       }
  }
    // Password is wrong ACTION
    export const wrongPassAction = () => {
      return function(dispatch,getState) {
        if(wrongPass){
          dispatch({ type: 'WRONG_PASSWORD',  payload: 'wrong_password' }) }
      }
    }

// ITEMS ACTIONS

  // Get all items ACTION
    export  const getAllItemsAction = () => {
      return async function(dispatch,getState) {
          const data = await getAllItems();
                if (data) {
                    dispatch({ type: 'GET_ALL_ITEMS',  payload: data })
                }
       }
    }

// HELPERS

  // USER LOGIN HELPERS

      export const login = ({ username, password }) => async (dispatch) => {
        await axios({
          method:"post",
          url:"/api/login",
          data: { username, password }
        })
          .then( (response) => {
              console.log(response.status);
              dispatch( getCurrentUser() );
              dispatch( loginAction() );
            })
          .catch( (err) => {
              wrongPass=true;
              console.log(err,wrongPass);
               dispatch( wrongPassAction() );
          } )
      }


        // Get current User DATA helper function
        async function getProfileData() {
             const data =  await axios.get(`/api/current_user`)
           return data
        }

  // ITEMS HELPERS

      // Creating and Displaying Items helper function

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
