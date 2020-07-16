import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button, Search } from './style'
import Icon from '../../components/SvgIcon'

const style = {
  position: 'relative',
  left: '-30px'
}

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <Search placeholder='搜索'></Search>
            <span style={style}>
              <Icon name='search' />
            </span>
          <NavItem className='right'>
            <Icon name='Aa' />
          </NavItem>
          <NavItem className='right'>登录</NavItem>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='edit'>
            <Icon name='edit' />
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
