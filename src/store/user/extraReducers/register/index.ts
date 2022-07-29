import { IUserStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api'
import { AxiosResponse } from 'axios'

const register = async (data: any) => {
  let user

  try {
    const response: AxiosResponse = await api.post('/users', data)

    user = response.data.createdUser
  } catch (error: any) {
    const errorMessage = error.response?.data.error

    if (errorMessage === 'E-mail already exists') {
      const response = await api.get('/users')

      const foundId = response.data.users.find(
        (user: any) => user.email === data.email
      ).id

      const updatedResponse = await api.patch(`/users/${foundId}`, data)

      user = updatedResponse.data.updatedUser
    }
  }

  return { loading: false, user }
}

const registerThunk = createAsyncThunk('userStore/register', register)

const registerExtraReducers: TExtraReducers<IUserStore> = ({ addCase }) => {
  addCase(registerThunk.pending, state => ({ ...state, loading: true }))

  addCase(registerThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(registerThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { registerExtraReducers, registerThunk }
