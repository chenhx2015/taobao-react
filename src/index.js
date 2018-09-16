import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'

import taobaoApp from './store/reducer'

let store = createStore(
    taobaoApp, 
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
