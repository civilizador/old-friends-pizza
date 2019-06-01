import axios from 'axios'
let wrongPass = false;


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
  
  // LOGOUT  ACTION
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

// ITEMS ACTIONS

    export const fetchAllItems = () => async (dispatch,getState) => {
       const res = await axios.get("/api/getAll")
        dispatch( {type: "GET_ALL_ITEMS", payload: res.data} )
    }
    
     export const fetchItemsByCat = (category) => async (dispatch,getState) => {
       const res = await axios.get("/api/getAll")
         const categorySelected = res.data.filter((items)=>{return items.category==category}) 
        dispatch( {type: "GET_ITEMS_BY_CAT", payload: categorySelected} )
    }

      
      //  Create Item helper will send Axios call to backend api and add new item into DB. If scuccessful it will dispatch action and update store.
      
      export const createItem = (itemObject) => async (dispatch) => {
        try {
          const response = await axios({
            method:"post",
            url:"/api/addItem",
            data: itemObject
          })
          if (response.status === 200) {
              console.log("Success");
              dispatch(fetchItemsByCat('Pizza'))
          }
        }
        catch (e) {
          console.error(e);
        }

      }
      
      
      
      