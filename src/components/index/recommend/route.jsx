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
    addcart: (id, qty, intro, price, imgurl) => dispatch(addcart({id, qty, intro, price, imgurl}))
})

const RouteAbleDetail = ({match, list, ...rest}) => {
    // console.log(rest)
    let id= match.params.id
    let goods = list.find(value => id == value.id )

        return (
            <Detail id={id} {...rest} {...goods} />
        )
    }
const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(RouteAbleDetail)

export default ({location, match}) => {
    return (
        <Switch>
            <Route exact path={match.path + '/'} component={List}/>

            <Route path={match.path + '/:id'} component={ DetailContainer}/>
        </Switch>
    )
}

