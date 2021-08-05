import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import uiSlice from './uiSlice'

const store = configureStore({
  reducers: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  }
})

export default store
