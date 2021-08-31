import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { usersList } from '../../store/users/actions'
import { usersSelectorFunction } from '../../store/users/selectors'
import {useSelector} from 'react-redux'

function UsersList() {
    const users = useSelector(usersSelectorFunction)

    const dispatch = useDispatch()
    useEffect(() => {
        console.log(users)
        debugger
        dispatch(usersList())
    }, [])


    return (
        <div>
            {users.map(user=>{
                return <div> {user.name}     </div>
            })}
        </div>
    )   
}

export default UsersList
