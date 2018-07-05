import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

import users from './containers/Users'
import asyncComponent from './hoc/asyncComponent'


const AsyncPizza = asyncComponent(()=>{
    return import('./containers/Pizza')
})
class App extends COmponent {
    render () {
        return(
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
            </div>
        )
    }
}