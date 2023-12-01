import { createSlice } from '@reduxjs/toolkit'
import { authSignin } from './authActions'


// Initialize authToken from local storage
const authToken = localStorage.getItem('authToken')
  ? localStorage.getItem('authToken')
  : null

const initialState = {
  loading: false,
  authToken,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.loading = false
      state.authToken = null
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
          state.authToken = payload
          state.error = null
        }
        else {
          state.authToken = null
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