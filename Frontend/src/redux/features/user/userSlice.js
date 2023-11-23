import { createSlice } from '@reduxjs/toolkit'

// Initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userToken,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signout: (state) => {
      console.log("signout")
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userToken = null
      state.error = null
      console.log("signout")
    }
  },
  extraReducers: {}
})

export const { signout } = userSlice.actions
export default userSlice.reducer