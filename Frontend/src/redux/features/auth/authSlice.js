import { createSlice } from '@reduxjs/toolkit'
import { authSignin } from './authActions'


// Initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userToken,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.loading = false
      state.userToken = null
      state.error = null
    }
  },
  extraReducers(builder) {  
    builder
      .addCase(authSignin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authSignin.fulfilled, (state, { payload }) => {
        state.loading = false
        if (payload !== null) {
          state.userToken = payload
          state.error = null
        }
        else {
          state.userToken = null
          state.error = "Invalid credentials"
        }
        
      })
      .addCase(authSignin.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  }
})

export const { signout } = authSlice.actions
export default authSlice.reducer