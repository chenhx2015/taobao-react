import {Switch, Route} from 'react-router-dom' 
import React,{Component} from 'react'
import List from './list'
import Detail from './detail'
import {connect} from 'react-redux'
import {addcart} from '../../../store/action/actions'

const mapStateToProps = (state) => ({
    list: state.goods,

})
const mapDispatchToProps = (dispatch) => ({
    'addcart': (id, qty, intro, price, imgurl) => dispatch(addcart({id, qty, intro, price, imgurl}))
})

const RouteAbleDetail = ({match, list, cart, ...rest}) => {
    // console.log(rest)
    let id= match.params.id
    let goods = list.find(value => id == value.id )
    console.log("...rest--", ...rest)
        return (
            <Detail id={id} {...rest} {...goods} cart={cart}/>
        )
    }
const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(RouteAbleDetail)

export default ({location, match}) => {
    return (
        <Switch>
            <Route exact path={match.path + '/'} component={List}/>

            <Route exact path={match.path + '/:id'} component={ DetailContainer}/>
        </Switch>
    )
}
 
