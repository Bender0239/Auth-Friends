import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'


export const POST_USER = "POST_USER"
export const FETCH_FRIENDS = "FETCH_FRIENDS"
export const ADD_FRIEND = "ADD_FRIEND"

export const postData = (newFriend) => (dispatch) => {
     
    axiosWithAuth()
        .post("/api/login", newFriend)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            // browserHistory.push('/protected')
            dispatch({type: POST_USER, payload: res.data.payload})
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchFriends = () => (dispatch) => {
    axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            dispatch({type: FETCH_FRIENDS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}

export const addFriend = (newFriend) => (dispatch) => {
    
    // axios.post("http://localhost:5000/api/friends", newFriend)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    
    
    
    axiosWithAuth()
        .post("/api/friends", newFriend)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_FRIEND, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}