import { createSlice } from '@reduxjs/toolkit'
import { selectSignin } from '../utils/selectors'


const initialState = {
  status: 'void',
  data: null,
  error: null,
  params: ["",""]
}


export async function fetchSignin(params) {
  return async (dispatch, getState) => {
    const status = selectSignin(getState()).status
    if (status === 'pending') {
      return
    }
  
    dispatch(actions.fetching())
    try {
      const login = {
        email: params[0],
        password: params[1]
      }
      const loginJson = JSON.stringify(login)
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: loginJson
      })

      console.log("response.status : "+response.status)
      const data = await response.json()
    
      // Local storage of token
      const token = data.token
      const tokenJson = JSON.stringify(token);
      window.localStorage.setItem("token", tokenJson);
      console.log("token in local storage")

      dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const { actions, reducer } = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      return
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending') {
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending') {
        draft.status = 'rejected'
        draft.error = action.payload
        draft.data = null
        return
      }
      return
    },
  },
})

export default reducer