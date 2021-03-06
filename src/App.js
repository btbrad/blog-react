import React from 'react'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import BackTop from './components/backToTop/index.js'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>
        <BackTop />
      </div>
    </Provider>
  )
}

export default App
