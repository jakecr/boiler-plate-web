import createDataContext from './createDataContext'
import exampleApi from '../api/example'
import Cookies from 'js-cookie'

const planReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ERROR_MESSAGE':
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
}

export const { Provider, Context } = createDataContext(
    planReducer,
    { clearErrorMessage },
    { errorMessage: '' }
)