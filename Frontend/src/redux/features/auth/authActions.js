import { createAsyncThunk } from '@reduxjs/toolkit'
import { signout } from './authSlice'


export const authSignin = createAsyncThunk(
  'auth/signin',
  async (signInData) => {
    try {
      const login = {
        email: signInData[0],
        password: signInData[1]
      }
      const loginJson = JSON.stringify(login)
      const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: loginJson
      })
      if (loginResponse.status === 200) {
        // Store user's token in local storage
        const loginResult = await loginResponse.json()
        const authToken = loginResult.body.token
        window.localStorage.setItem("authToken", authToken)
        return authToken
      }
      else {
        return null
      }
    } catch (error) {
      return error.message
    }
  }
)

export const authSignout = () => (dispatch) => {
  localStorage.removeItem('authToken')
  dispatch(signout())
}