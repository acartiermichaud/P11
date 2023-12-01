import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearProfile } from './userSlice'


export const userGetProfile = createAsyncThunk(
  'user/getprofile',
  async () => {
    try {
      const authToken = window.localStorage.getItem("authToken")
      const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {"Authorization": `Bearer ${authToken}`}
      })
      if (profileResponse.status === 200) {
        const profileResult = await profileResponse.json()
        return profileResult.body
      }
      else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      return error.message
    }
  }
)

export const userSetProfile = createAsyncThunk(
  'user/setprofile',
  async (username) => {
    try {
      const authToken = window.localStorage.getItem("authToken")
      const newUsername = {
        userName: username
      }
      const newUsernameJson = JSON.stringify(newUsername)
      const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "PUT",
          headers: {"Authorization": `Bearer ${authToken}`, "Content-type": "application/json"},
          body: newUsernameJson
      })
      if (profileResponse.status === 200) {
        const profileResult = await profileResponse.json()
        return profileResult.body
      }
      else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      return error.message
    }
  }
)

export const userCleanProfile = () => (dispatch) => {
  dispatch(clearProfile())
}