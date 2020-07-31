import React from 'react'
import { GlobalStyle } from './style.js'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <GlobalStyle />
        <Header />
      </div>
    </Provider>
  )
}

export default App
