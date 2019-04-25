import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Store from '/Users/niall/Documents/test/ipfs-image-dapp/src/store.js'
import { Provider } from 'react-redux'

import './index.css'
import '../node_modules/toastr/build/toastr.min.css'

//import 'web3'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// ReactDOM.render(<App />, document.getElementById('root'))

const StoreInstance = Store()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
