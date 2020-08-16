import React, { Component } from 'react'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'
import { connect } from 'react-redux'
import { loginAction } from './store/actionCreators'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleLogin = () => {
    const { username, password } = this.state
    this.props.goLogin(username, password)
  }

  render() {
    const { username, password } = this.state
    const { loginStatus } = this.props

    return !loginStatus ? (
      <LoginWrapper>
        <LoginBox>
          <LoginInput
            value={username}
            onChange={(e) => {
              this.setState({ username: e.target.value })
            }}
            placeholder='用户名'
          />
          <LoginInput
            type='password'
            value={password}
            placeholder='密码'
            onChange={(e) => {
              this.setState({ password: e.target.value })
            }}
          />
          <LoginButton onClick={this.handleLogin}>登录</LoginButton>
        </LoginBox>
      </LoginWrapper>
    ) : (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus']),
})

const mapDispatchToProps = (dispatch) => ({
  goLogin: (username, password) =>
    dispatch(loginAction({ username, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
