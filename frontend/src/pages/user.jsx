import React, { Fragment} from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import UserDetail from './userdetail'
import UserNew from './userNew'
import axios from 'axios'


export default function User(){
    axios.get('http://localhost:4000/user',{
        headers:{
            'X-Requested-With':'XMLHttpRequest'
        }
    })
    return(
    <Fragment>
        <Switch>
            <Route exact path ="/user" >
                User Page ini
            </Route>
            <Route path ="/user/new" >
                <UserNew/>
            </Route>
            <Route exact path ="/user/:id" >
                <UserDetail/>
            </Route>
           
        </Switch>
    </Fragment>
    
    )

}