import { 
    CLEAR_ALERT, DISPLAY_ALERT , REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_POST_BEGIN,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    CREATE_HEALTH_POST_BEGIN,
    CREATE_HEALTH_POST_SUCCESS,
    CREATE_HEALTH_POST_ERROR,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    CREATE_EVENT_BEGIN,
    GET_POST_BEGIN,
    GET_POST_SUCCESS,
    GET_HEALTH_POST_BEGIN,
    GET_HEALTH_POST_SUCCESS,
    SET_EDIT_POST,
    DELETE_POST_BEGIN,
    EDIT_POST_BEGIN,
    EDIT_POST_SUCCESS,
    EDIT_POST_ERROR,
    SET_EDIT_HEALTH_POST,
    DELETE_HEALTH_POST_BEGIN,
    EDIT_HEALTH_POST_BEGIN,
    EDIT_HEALTH_POST_SUCCESS,
    EDIT_HEALTH_POST_ERROR,
    CLEAR_FILTERS,
    CHANGE_PAGE
} from "./actions"
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
        case HANDLE_CHANGE:
            return {
                ...state,
                page: 1,
                [action.payload.name]: action.payload.value
            } 
        case CLEAR_VALUES:
            const initialState = {
               isEditing: false,
               editPostId: '',
               postTitle: '',
               postDesc: '',
               healthTitle: '',
               healthDesc: '',
               eventTitle: '',
               date: '',
            }  
            return {...state, ...initialState} 
        case CREATE_POST_BEGIN:
            return {
                ...state,
                isLoading: true
            }  
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'New Post Created'
            }  
        case CREATE_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            } 
        case GET_POST_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload.posts,
                totalPost: action.payload.totalPost,
                numOfpages: action.payload.numOfpages,
            }  
        case SET_EDIT_POST:
            const post = state.posts.find((post) => post._id === action.payload.id) 
            const {postTitle, postDesc} = post 
            return {
                ...state,
                isEditing: true,
                editPostId: post._id,
                postTitle,
                postDesc,
            }  
        case DELETE_POST_BEGIN:
            return {
                ...state,
                isLoading: true
            } 
        case EDIT_POST_BEGIN:
            return{
                ...state,
                isLoading: true
            }  
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'Post Updated'
            }     
        case EDIT_POST_ERROR: 
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        } 
        case CHANGE_PAGE:
            return {
             ...state,
             page: action.payload.page
            }    
        case CREATE_HEALTH_POST_BEGIN:
            return {
                ...state,
                isEditing: true
            }
        case CREATE_HEALTH_POST_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'New Health Tip Created'
            }  
        case CREATE_HEALTH_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            } 
        case GET_HEALTH_POST_BEGIN:
                return {
                    ...state,
                    isLoading: true,
                    showAlert: false,
                }
        case GET_HEALTH_POST_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    healthPosts: action.payload.healthPosts,
                    totalHealthPost: action.payload.totalHealthPost,
                    numOfHealthPages: action.payload.numOfHealthPages,
                } 
        case CLEAR_FILTERS:
            return {
                ...state,
                search: '',
                sort: 'latest',
                healthSearch: '',
                healthSort: 'latest'

            }           
        case SET_EDIT_HEALTH_POST:
            const healthtip = state.healthPosts.find((tip) => tip._id === action.payload.id)
            const {_id, healthTitle, healthDesc} = healthtip
            return {
                ...state,
                isEditing: true,
                editHealthId: _id,
                healthTitle,
                healthDesc
            }
        case DELETE_HEALTH_POST_BEGIN: 
           return {
               ...state,
               isLoading: true
           } 
        case EDIT_HEALTH_POST_BEGIN:
            return {
                ...state,
                isLoading: true
            }      
        case EDIT_HEALTH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'Health Tip Updated',
            }    
        case EDIT_HEALTH_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            }    
                  
        case CREATE_EVENT_BEGIN:
            return {
                ...state,
                isEditing: true
            }
        case CREATE_EVENT_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'New Event Created'
            }  
        case CREATE_EVENT_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            } 
        default:
            throw new Error(`no such action :${action.type}`)
    }
   
}

export default reducer