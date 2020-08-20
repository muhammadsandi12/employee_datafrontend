import React from 'react'
import {Route,Switch, useParams } from 'react-router-dom'

export default function UserDetail(){
    const params =useParams()
    return(
    <div>User Detail {params.id}</div>
    )
}
