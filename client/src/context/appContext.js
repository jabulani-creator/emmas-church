import React, {useReducer, useContext } from "react"
import { CLEAR_ALERT, DISPLAY_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, TOGGLE_SIDEBAR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, HANDLE_CHANGE, CLEAR_VALUES, CREATE_POST_BEGIN, CREATE_POST_SUCCESS, CREATE_POST_ERROR, CREATE_HEALTH_POST_BEGIN, CREATE_HEALTH_POST_SUCCESS, CREATE_HEALTH_POST_ERROR, CREATE_EVENT_BEGIN, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR, GET_POST_BEGIN, GET_POST_SUCCESS, GET_HEALTH_POST_BEGIN, GET_HEALTH_POST_SUCCESS, SET_EDIT_POST, DELETE_POST_BEGIN, EDIT_POST_BEGIN, EDIT_POST_SUCCESS, EDIT_POST_ERROR, SET_EDIT_HEALTH_POST, DELETE_HEALTH_POST_BEGIN, EDIT_HEALTH_POST_BEGIN, EDIT_HEALTH_POST_SUCCESS, EDIT_HEALTH_POST_ERROR, CLEAR_FILTERS, CHANGE_PAGE} from "./actions"
import axios from 'axios'

import reducer from "./reducer"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userPosition = localStorage.getItem('position')
export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userPosition:  userPosition || '',
    isEditing: false,
    editPostId: '',
    postTitle: '',
    postDesc: '',
    editHealthId: '',
    healthTitle: '',
    healthDesc: '',
    showSidebar: false,
    posts: [],
    totalPost: 0,
    numOfpages: 1,
    page: 1,
    healthPosts: [],
    totalHealthPost: 0,
    numOfHealthPages: 1,
    search: '',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
    healthSearch: '',
    healthSort: 'latest',
    healthSortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
    
  }

  const AppContext = React.createContext()
  const AppProvider = ({children}) => {
      const [state, dispatch] = useReducer(reducer, initialState)
     
      const authFetch = axios.create({
        baseURL: '/api/v1'
      })

      //request
      authFetch.interceptors.request.use(
        (config) => {
          config.headers.common['Authorization'] = `Bearer ${state.token}`
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
       
      )
      //response
      authFetch.interceptors.response.use(
        (response) => {
          return response
        },
        (error) => {
          console.log(error.response)
          if (error.response.status === 401) {
            logoutUser()
          }
          return Promise.reject(error)
        }
       
      )
      const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
      }

      const clearAlert = () => {
          setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
          }, 3000)
      }

      const addUserToLocalStorage = ({ user, token, position }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('position', position)
      }

      const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('position')
      }
      const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN})
        try {
          const response = await axios.post('/api/v1/auth/register', currentUser)
       const {user, token, position} = response.data
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: {
            user,
            token,
            position,
          },
        })
        addUserToLocalStorage({user, token, position})
        } catch (error) {
          // console.log(error.response)
          dispatch(
            {
              type: REGISTER_USER_ERROR,
              payload: {msg: error.response.data.msg}
            }
          )
        }
      }

      const loginUser = async (currentUser) => {
         dispatch({type: LOGIN_USER_BEGIN})
         try {
           const {data} = await axios.post('/api/v1/auth/login', currentUser)
           const {user, token, position} = data

           dispatch({
             type: LOGIN_USER_SUCCESS,
             payload: {user, token, position},
           })

           addUserToLocalStorage({user, token, position})
         } catch (error) {
            dispatch({
              type: LOGIN_USER_ERROR,
              payload: {msg: error.response.data.msg}
            })
         }
         clearAlert()
      }
      const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
      }

      const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
      }
      const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN})
        try {
          const { data } = await authFetch.patch('/auth/updateUser', currentUser)
          const {user, position, token} = data

          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: {user, position, token}
          })
          addUserToLocalStorage({user, position, token})
        } catch (error) {
          if (error.response.status !== 401) {
            dispatch({
              type: UPDATE_USER_ERROR,
              payload: { msg: error.response.data.msg },
            })
          }
        }
        clearAlert()
      }

      const handleChange = ({name, value}) => {
        dispatch({
          type: HANDLE_CHANGE,
          payload: {name, value},
        })
      }
      const clearValues = () => {
        dispatch({type: CLEAR_VALUES})
      }
      const createPost = async () => {
        dispatch({type: CREATE_POST_BEGIN})
        try {
          const {postTitle, postDesc} = state

          await authFetch.post('/posts', {
            postTitle,
            postDesc,
          })

         dispatch({type: CREATE_POST_SUCCESS}) 
         dispatch({type: CLEAR_VALUES})
        } catch (error) {
          if(error.response.status === 401) return
          dispatch({
            type: CREATE_POST_ERROR,
            payload: {msg: error.response.data.msg }
          })
        }
        clearAlert()
      }
      const createHealthPost = async () => {
        dispatch({type: CREATE_HEALTH_POST_BEGIN})
        try {
          const {healthTitle, healthDesc} = state

          await authFetch.post('/health', {
            healthTitle,
            healthDesc,
          })

         dispatch({type: CREATE_HEALTH_POST_SUCCESS}) 
         dispatch({type: CLEAR_VALUES})
        } catch (error) {
          if(error.response.status === 401) return
          dispatch({
            type: CREATE_HEALTH_POST_ERROR,
            payload: {msg: error.response.data.msg }
          })
        }
        clearAlert()
      }
      const createEvent = async () => {
        dispatch({type: CREATE_EVENT_BEGIN})
        try {
          const {eventTitle, date, eventPhoto} = state

          await authFetch.post('/events', {
            eventTitle,
            date,
            eventPhoto
          })

         dispatch({type: CREATE_EVENT_SUCCESS}) 
         dispatch({type: CLEAR_VALUES})
        } catch (error) {
          if(error.response.status === 401) return
          dispatch({
            type: CREATE_EVENT_ERROR,
            payload: {msg: error.response.data.msg }
          })
        }
        clearAlert()
      }

      const getPosts = async () => {
        const {page, search, sort} = state
        let url = `/api/v1/posts?page=${page}&sort=${sort}`
        if(search){
          url = url + `&search=${search}`
        }
        dispatch({type: GET_POST_BEGIN})
        try {
          const {data} = await axios.get(url)
          const {posts, totalPost, numOfpages} = data
         
          dispatch({
            type: GET_POST_SUCCESS,
            payload: {
              posts,
              totalPost,
              numOfpages,
            },
          })
        } catch (error) {
          console.log(error)
          
        }
        clearAlert()
      }

      const changePage = (page) => {
        dispatch({type: CHANGE_PAGE, payload: { page}})
      }

      const getHealthPost = async () => {
        const {healthSearch, healthSort, page} = state
        let url = `/api/v1/health?page=${page}&healthSort=${healthSort}`
        if(healthSearch){
          url = url + `&healthSearch=${healthSearch}`
        }
        dispatch({type: GET_HEALTH_POST_BEGIN})
        try {
          const {data} = await axios.get(url)
          const {healthPosts, totalHealthPost, numOfHealthPages} = data
          dispatch({
            type: GET_HEALTH_POST_SUCCESS,
            payload: {
              healthPosts,
              totalHealthPost,
              numOfHealthPages
            }
          })
          
        } catch (error) {
          console.log(error)
        }
        clearAlert()
      }

      const setEditPost = (id) => {
        dispatch({type: SET_EDIT_POST, payload: { id }})
      }
      const editPost = async () => {
         dispatch({type: EDIT_POST_BEGIN})
        
         try {
           const {postTitle, postDesc} = state

           await authFetch.patch(`/posts/${state.editPostId}`, {
             postTitle,
             postDesc
           })

           dispatch({type: EDIT_POST_SUCCESS })
           dispatch({type: CLEAR_VALUES})
         } catch (error) {
           if(error.response.status === 401) return
           dispatch({
             type: EDIT_POST_ERROR,
             payload: {msg: error.response.data.msg}
           })
         }
         clearAlert()
      }
      const deletePost = async (postId) => {
         dispatch({type : DELETE_POST_BEGIN})
         try {
           await authFetch.delete(`/posts/${postId}`)
           getPosts()
         } catch (error) {
           logoutUser()
         }
      }

      const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS})
      }

      const setEditHealthPost = (id) => {
        dispatch({type: SET_EDIT_HEALTH_POST, payload: { id }})
      }

      const editHealth = async() => {
        dispatch({type : EDIT_HEALTH_POST_BEGIN})
        try {
          const {healthTitle, healthDesc } = state

          await authFetch.patch(`/health/${state.editHealthId}`, {
            healthTitle,
            healthDesc
          })
          dispatch({ type: EDIT_HEALTH_POST_SUCCESS })
          dispatch({type: CLEAR_VALUES})
        } catch (error) {
          if(error.response.status === 401) return
          dispatch({
            type: EDIT_HEALTH_POST_ERROR,
            payload: {msg: error.response.data.msg}
          })
        }
        clearAlert()
      }
      const deleteHealthPost = async (healthPostId) => {
        dispatch({type: DELETE_HEALTH_POST_BEGIN})
        try {
          await authFetch.delete(`/health/${healthPostId}`)
          getHealthPost()
        } catch (error) {
          logoutUser()
        }
      }

      return (
      <AppContext.Provider
         value={{
             ...state,
             displayAlert, registerUser, loginUser, toggleSidebar,
             logoutUser, updateUser, handleChange, clearValues,
             createPost, createHealthPost, createEvent, getPosts,
             getHealthPost, setEditPost, deletePost, editPost,
             setEditHealthPost, deleteHealthPost, editHealth, clearFilters,
             changePage
         }}
         >
          {children}
         </AppContext.Provider>
      )
  }

  export const useAppContext = () => {
    return useContext(AppContext)
  }
  
  export { AppProvider }
  