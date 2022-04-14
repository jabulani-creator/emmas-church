import { 
    CLEAR_ALERT, DISPLAY_ALERT , REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from "./actions"
import { initialState } from "./appContext"
const reducer = (state, action) => {
    switch(action.type)
    {
        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: 'Please provide all values!',
            }    
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: '',
            }
        case REGISTER_USER_BEGIN:
             return{
                ...state,
                isLoading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                userPosition: action.payload.position,
                showAlert: true,
                alertType: 'success',
                alertText: "User created! Redirecting"
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg

            } 
        case LOGIN_USER_BEGIN:
            return{
                ...state,
                isLoading: true,
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                user : action.payload.user,
                token: action.payload.token,
                userPosition: action.payload.position,
                showAlert: true,
                alertType: 'success',
                alertText: 'Login successful! Redirecting...'
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlertL: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            }
        case TOGGLE_SIDEBAR:
                return {
                    ...state,
                    showSidebar: !state.showSidebar
                } 
        case LOGOUT_USER:
            return {
                ...initialState,
                user: null,
                token: null,
                userPosition: '',
            } 
        case UPDATE_USER_BEGIN:
            return {
                ...state,
                isLoading: true
            } 
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userPosition: action.payload.position,
                showAlert: true,
                alertType: 'success',
                alertText: 'User Profile Updated',
            } 
        case UPDATE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            }                               
        default:
            throw new Error(`no such action :${action.type}`)
    }
   
}

export default reducer