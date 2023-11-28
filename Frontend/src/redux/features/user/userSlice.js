import { createSlice } from '@reduxjs/toolkit'
import { userGetProfile, userSetProfile} from './userActions'


const initialState = {
  loading: false,
  userProfile: null,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.loading = false
      state.userProfile = null
      state.error = null
    }
  },
  extraReducers(builder) {  
    builder
      .addCase(userGetProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userGetProfile.fulfilled, (state, { payload }) => {
        state.loading = false
        state.userProfile = payload
        state.error = null
      })
      .addCase(userGetProfile.rejected, (state, { payload }) => {
        state.loading = false
        state.userProfile = null
        state.error = payload
      })
      .addCase(userSetProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userSetProfile.fulfilled, (state, { payload }) => {
        state.loading = false
        state.userProfile = payload
        state.error = null
      })
      .addCase(userSetProfile.rejected, (state, { payload }) => {
        state.loading = false
        state.userProfile = null
        state.error = payload
      })
  }
})

export const { clearProfile } = userSlice.actions
export default userSlice.reducer