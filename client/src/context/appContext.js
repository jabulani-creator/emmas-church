import React, {useReducer, useContext} from "react"
import { CLEAR_ALERT, DISPLAY_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, TOGGLE_SIDEBAR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR } from "./actions"
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
    postDecs: '',
    postPhoto: '',
    showSidebar: false,
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
      return (
      <AppContext.Provider
         value={{
             ...state,
             displayAlert,
             registerUser,
             loginUser,
             toggleSidebar,
             logoutUser,
             updateUser
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
  