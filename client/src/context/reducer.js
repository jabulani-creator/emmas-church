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
    CHANGE_PAGE,
    CREATE_REQUEST_BEGIN,
    CREATE_REQUEST_SUCCESS,
    CREATE_REQUEST_ERROR,
    GET_REQUEST_BEGIN,
    GET_REQUEST_SUCCESS,
    DELETE_REQUEST_BEGIN,
    GET_SINGLE_POST_BEGIN,
    GET_SINGLE_POST_SUCCESS,
    SET_POST_ID,
    GET_EVENTS_BEGIN,
    GET_EVENTS_SUCCESS,
    SET_EDIT_EVENT,
    DELETE_EVENT_BEGIN,
    EDIT_EVENT_BEGIN,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_ERROR,
} from "./actions"

import { initialState } from "./appContext"
const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
        }  
    }
    if(action.type === CLEAR_ALERT){
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        }
    }
    if(action.type === REGISTER_USER_BEGIN){
        return{
            ...state,
            isLoading: true
        }
    }
    if(action.type === REGISTER_USER_SUCCESS){
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
    }
    if(action.type === REGISTER_USER_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg

        } 
    }
    if(action.type === LOGIN_USER_BEGIN){
        return{
            ...state,
            isLoading: true,
        }
    }
    if(action.type === LOGIN_USER_SUCCESS){
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
    }
    if( action.type === LOGIN_USER_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlertL: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if(action.type === TOGGLE_SIDEBAR){
        return {
            ...state,
            showSidebar: !state.showSidebar
        } 
    }
    if(action.type === UPDATE_USER_BEGIN){
        return {
            ...state,
            isLoading: true
        }
    }
    if(action.type === UPDATE_USER_SUCCESS) {
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
    }         
    if(action.type === UPDATE_USER_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        } 
    }
    if(action.type === HANDLE_CHANGE){
        return {
            ...state,
            page: 1,
            [action.payload.name]: action.payload.value
        } 
    }   
    if(action.type === CLEAR_VALUES){
        const initialState = {
            isEditing: false,
            editPostId: '',
            postTitle: '',
            postDesc: '',
            healthTitle: '',
            healthDesc: '',
            eventTitle: '',
            eventDate: '',
            eventDesc: '',
            name: '',
            phone: '',
            email: '',
            message: '',
            purpose: 'prayer',
         } 
         return {...state, ...initialState} 
    }   
    if(action.type === LOGOUT_USER){
        return {
            ...initialState,
            user: null,
            token: null,
            userPosition: '',
        }
    }
    if(action.type === CREATE_POST_BEGIN){
        return {
            ...state,
            isLoading: true
        }  
    }      
    if(action.type === CREATE_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Post Created'
        } 
    }
    if(action.type === CREATE_POST_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        } 
    }
    if(action.type === GET_POST_BEGIN){
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type === GET_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            posts: action.payload.posts,
            totalPost: action.payload.totalPost,
            numOfpages: action.payload.numOfpages,
        } 
    }
    if(action.type === GET_SINGLE_POST_BEGIN){
        return{
            ...state,
            isLoading: true,
        }  
    }   
    if(action.type === GET_SINGLE_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            post: action.payload.post,
        }  
    }    
    if(action.type === SET_POST_ID){
        const post = state.posts.find((post) => post._id === action.payload.id) 
        return {
            ...state,
            PostId: post._id,
        }  
    } 
    if(action.type === SET_EDIT_POST){
        const post = state.posts.find((post) => post._id === action.payload.id) 
        const {_id, postTitle, postDesc} = post 
        return {
            ...state,
            isEditing: true,
            editPostId: _id,
            postTitle,
            postDesc,
        } 
    }
    if(action.type === DELETE_POST_BEGIN){
        return {
            ...state,
            isLoading: true
        } 
    }
    if(action.type === EDIT_POST_BEGIN){
        return{
            ...state,
            isLoading: true
        } 
    }
    if(action.type === EDIT_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Post Updated'
        }  
    }
    if(action.type === EDIT_POST_ERROR ){
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        } 
    }
    if(action.type === CHANGE_PAGE){
        return {
            ...state,
            page: action.payload.page
           }   
    }
    if(action.type === CREATE_HEALTH_POST_BEGIN){
        return {
            ...state,
            isEditing: true
        }
    }
    if(action.type === CREATE_HEALTH_POST_SUCCESS){
        return {
            ...state,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Health Tip Created'
        }  
    }
    if(action.type === CREATE_HEALTH_POST_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        } 
    }
    if(action.type === GET_HEALTH_POST_BEGIN){
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }     
    if(action.type === GET_HEALTH_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            healthPosts: action.payload.healthPosts,
            totalHealthPost: action.payload.totalHealthPost,
            numOfHealthPages: action.payload.numOfHealthPages,
        } 
    }
    if(action.type === CLEAR_FILTERS){
        return {
            ...state,
            search: '',
            sort: 'latest',
            searchPurpose: 'all'
        }  
    }
    if(action.type === SET_EDIT_HEALTH_POST){
        const healthtip = state.healthPosts.find((tip) => tip._id === action.payload.id)
        const {_id, healthTitle, healthDesc} = healthtip
        return {
            ...state,
            isEditing: true,
            editHealthId: _id,
            healthTitle,
            healthDesc
        }
    }
    if(action.type === DELETE_HEALTH_POST_BEGIN){
        return {
            ...state,
            isLoading: true
        } 
    } 
    if(action.type === EDIT_HEALTH_POST_BEGIN){
        return {
            ...state,
            isLoading: true
        }  
    }
    if(action.type === EDIT_HEALTH_POST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Health Tip Updated',
        } 
    }
    if(action.type === EDIT_HEALTH_POST_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }  
    }
    if(action.type === CREATE_EVENT_BEGIN){
        return {
            ...state,
            isEditing: true
        }
    }
    if(action.type === CREATE_EVENT_SUCCESS){
        return {
            ...state,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Event Created'
        } 
    }
    if(action.type === CREATE_EVENT_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        } 
    }
    if(action.type === CREATE_REQUEST_BEGIN){
        return {
            ...state,
            isLoading: true,
        }  
    }
    if(action.type === CREATE_REQUEST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Form submitted'
        } 
    }
    if(action.type === CREATE_REQUEST_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }  
    }
    if(action.type === GET_REQUEST_BEGIN){
        return {
            ...state,
            isLoading: true,
        }   
    }
    if(action.type === GET_REQUEST_SUCCESS){
        return {
            ...state,
            isLoading: false,
            requests: action.payload.requests,
            totalRequests: action.payload.totalRequests,
            numOfRequestPages: action.payload.numOfRequestPages
        } 
    }
    if(action.type === DELETE_REQUEST_BEGIN){
        return {
            ...state,
            isLoading: true,
        } 
    }
    if(action.type === GET_EVENTS_BEGIN){
        return{
            ...state,
            isLoading: true,
        }  
    }
    if(action.type === GET_EVENTS_SUCCESS){
        return {
            ...state,
            isLoading: false,
            events: action.payload.events,
            totalEvents: action.payload.totalEvents,
            numOfEventsPages: action.payload.numOfEventsPages
        }
    }
    if(action.type === SET_EDIT_EVENT){
        const event = state.events.find((event) => event._id === action.payload.id)
        const {_id, eventTitle, eventDate, eventDesc} = event
        return {
            ...state,
            isEditing: true,
            editPostId: _id,
            eventDate,
            eventDesc,
            eventTitle
        }  
    }
    if(action.type === DELETE_EVENT_BEGIN){
        return {
            ...state,
            isLoading: true
        }  
    }
    if(action.type === EDIT_EVENT_BEGIN){
        return {
            ...state,
            isLoading: true
        } 
    }
    if(action.type === EDIT_EVENT_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'event Updated'
        } 
    }
    if(action.type === EDIT_EVENT_ERROR){
        return {
            ...state,
            showAlert: true,
            isLoading: false,
            alertType: 'danger',
            alertText: action.payload.msg, 
           } 
    }
    else {
        return {...state}
    }   
}

export default reducer