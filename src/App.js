import React from 'react'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={ Home }></Route>
          <Route path="/detail" exact component={ Detail }></Route>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
