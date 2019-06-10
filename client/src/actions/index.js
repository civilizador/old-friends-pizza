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
  // Get current User DATA helper function
  async function getProfileData() {
       const data =  await axios.get(`/api/current_user`)
     return data
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



// ITEMS ACTIONS

    export const fetchItemsByCat = (category) => async (dispatch,getState) => {
       const res = await axios.get("/api/getAll")
         const categorySelected = res.data.filter((items)=>{return items.category===category})
            dispatch( {type: "GET_ITEMS_BY_CAT", payload: categorySelected} )
     }

    export const fetchById = (id) => async (dispatch,getState) => {
      const res = await axios.get("/api/getAll")
        const idSelected = res.data.filter((items)=>{return items._id===id})
       dispatch( {type: "GET_ITEMS_BY_ID", payload: idSelected} )
   }
    
    export const selectedItem = (item) =>  async (dispatch) => {
      console.log('selectedItem action triggered, FOLOWING ITEM WAS SELECTED FOR DETAILS: ',item)
      await dispatch( {type: "ITEM_SELECTED", payload: item} )
    } 
    
    
    export const retrieveItemToEdit = (item_id) => async (dispatch) => {
      const res = await axios.get("/api/edit/"+item_id);
      await dispatch({type: 'ITEM_TO_EDIT',payload: res.data})
    }
    
    
    export const updateItem = (item) => async (dispatch) => {
        axios.post("/api/edit/"+item._id, {
          item: item,
         })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }  
    
    export const deleteItem = (itemId) => async(dispatch) => {
      axios.delete("/api/delete/"+itemId,{data:{itemId}})
        .then(function async(response) {
          console.log('deleted');
         })
        .catch(function (error) {
          console.log(error);
        });
        
    }
     
    export const addToCart = (item) => async (dispatch) => {
       try {
          const response = await axios({
            method:"post",
            url:"/api/addToCart",
            data: item
          })
          if (response.status === 200) {
               console.log("Success");
          }
        }
        catch (e) {
          console.error(e);
        }
    }
    
    export const removeFromCart = (index) => async (dispatch) => {
      console.log('remove action dispatched for ID ', index)
        axios.post('/api/removeFromCart', {
          index: index,
         })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
      //  This helper will send Axios call to backend api and add new item into DB. \
      //  If scuccessful it will dispatch action and update store.

      export const createItem = (itemObject) => async (dispatch) => {
         
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


    