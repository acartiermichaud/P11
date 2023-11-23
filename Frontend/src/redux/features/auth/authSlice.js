import { createSlice } from '@reduxjs/toolkit'
import { userSignin } from './authActions'


// Initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userToken,
  userProfile: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {  
    builder
      .addCase(userSignin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userSignin.fulfilled, (state, { payload }) => {
        state.loading = false
        if (payload[1] !== null) {
          state.userToken = payload[0]
          state.userProfile = payload[1]
        }
        else {
          state.error = payload[0]
        }
        
      })
      .addCase(userSignin.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload[0]
      })
  }
})

export default authSlice.reducer