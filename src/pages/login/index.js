import React, { Component } from 'react'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <LoginInput placeholder='用户名' />
          <LoginInput placeholder='密码' />
          <LoginButton>登录</LoginButton>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

export default Login
