import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'

import taobaoApp from './store/reducer/getlist'

let store = createStore(taobaoApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
