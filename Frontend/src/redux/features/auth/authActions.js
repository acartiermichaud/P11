import { createAsyncThunk } from '@reduxjs/toolkit'

export const userSignin = createAsyncThunk(
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

      console.log("loginResponse.status : "+loginResponse.status)

      if (loginResponse.status === 200) {
        // Store user's token in local storage
        const loginResult = await loginResponse.json()
        const userToken = loginResult.body.token
        window.localStorage.setItem("userToken", userToken)

        // Fetching user's profile data
        try {
          const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
              method: "POST",
              headers: {"Authorization": `Bearer ${userToken}`}
          })
    
          console.log("profileResponse.status : "+profileResponse.status)
    
          if (profileResponse.status === 200) {
            const profileResult = await profileResponse.json()
            const userProfile = profileResult.body

            return [userToken, userProfile]
          }
          else {
            return [profileResponse.message, null]
          }
          
        } catch (error) {
          return [error.message, null]
        }
      }
      else {
        return [loginResponse.message, null]
      }
    } catch (error) {
      return [error.message, null]
    }
  }
)