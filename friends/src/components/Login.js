import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {postData} from '../actions/friendActions'
import { useHistory } from 'react-router-dom'




const Login = (props) => {
    
    const {register, handleSubmit} = useForm()

    const history = useHistory()

    const onSubmit = (data) => {
        
        const newFriend = {
            username: data.username,
            password: data.password
        }
        props.postData(newFriend)
        history.push('/protected')
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username:&nbsp;
                    <input 
                        type="text"
                        name="username"
                        ref={register}
                    />
                </label>
                <label>Password:&nbsp;
                    <input 
                        type="password"
                        name="password"
                        ref={register}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default connect(null, {postData})(Login);