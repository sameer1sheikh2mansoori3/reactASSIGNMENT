import { createSlice } from '@reduxjs/toolkit'
export interface UserState {
    value: boolean
}

const initialState: UserState = {
    value: false,
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        isLoggedIn(state) {
            state.value = true
        },
        isLoggedOut(state) {
            state.value = false
        }

    },
})

export const { isLoggedIn, isLoggedOut } = usersSlice.actions
export default usersSlice.reducer