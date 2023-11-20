import { configureStore } from '@reduxjs/toolkit'
import signinReducer from '../features/signin'
//import signoutReducer from '../features/signout'
//import updateReducer from '../features/update'

export default configureStore({
  reducer: {
    signin: signinReducer
    //signout: signoutReducer,
    //update: updateReducer
  }
})