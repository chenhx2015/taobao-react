import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import taobaoApp from './store/reducer'

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(
    persistConfig,
    taobaoApp
)

// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(logger))
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

let store = createStore(
    persistedReducer,
    applyMiddleware(logger)
)
let persistor = persistStore(store)

// let store = createStore(
//     taobaoApp,
//     applyMiddleware(logger)
// )

/**
 * 没有使用 redux-persist 中间件的情况
 */
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

/**
 * 使用 redux-persist 中间件的情况
 */
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
