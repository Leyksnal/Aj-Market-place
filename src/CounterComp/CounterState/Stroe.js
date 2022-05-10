import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './Statemanagement'

export const store = configureStore({
    reducer: {stateReducer}
})