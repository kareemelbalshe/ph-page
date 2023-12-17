import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products-slice.js'
import cartSlice from './slices/cart-slice.js'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    }
})