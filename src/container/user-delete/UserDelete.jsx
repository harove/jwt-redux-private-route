import React from 'react'
import { useParams } from 'react-router'

function UserDelete() {
    const {id} = useParams()
    debugger
    return (
        <div>
            seguro deseas borrar a {id}
        </div>
    )
}

export default UserDelete
