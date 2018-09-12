import {Switch, Route} from 'react-router-dom' 
import React,{Component} from 'react'
import List from './list'
import Detail from './detail'

export default ({location, match}) => {
        console.log(location, match)
        return (
            <Switch>
                <Route exact path={match.path + '/'} component={List}/>

                <Route exact path={match.path + '/:id'} component={Detail}/>
            </Switch>
        )
    
}
 
