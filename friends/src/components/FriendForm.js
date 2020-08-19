import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchFriends, addFriend} from '../actions/friendActions'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import {v4 as uuid} from 'uuid'


const StyledFriend = styled.div`
    border: 2px solid black;
    margin: 5px;
    width: 30%
    
`

const FriendForm = (props) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        const newFriend = {
            name: data.name,
            age: data.age,
            email: data.email,
            id: uuid()
        }
        props.addFriend(newFriend)
    }


    useEffect(() => {
        props.fetchFriends()
    },[])
    // console.log(props)
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name:&nbsp;
                        <input 
                            type='text'
                            name='name'
                            ref={register}
                        />
                    </label>
                    <label>Age:&nbsp;
                        <input 
                            type='text'
                            name='age'
                            ref={register}
                        />
                    </label>
                    <label>Email:&nbsp;
                        <input 
                            type='email'
                            name='email'
                            ref={register}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {props.data.map(friend => {
                    return (
                        <StyledFriend key={friend.id}>
                            <div>{friend.name}</div>
                            <div>{friend.age}</div>
                            <div>{friend.email}</div>
                        </StyledFriend>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps,{fetchFriends,addFriend})(FriendForm);