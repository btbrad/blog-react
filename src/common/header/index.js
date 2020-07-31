import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  Search,
} from './style'
// import { CSSTransition } from 'react-transition-group'
import Icon from '../../components/SvgIcon'
import bind from './transition'
import { connect } from 'react-redux'
import { setSearchBlur, setSearchFocus } from './store/actionsCreators'

const style = {
  position: 'relative',
  left: '-30px',
  width: '22px',
  height: '22px',
}

class Header extends Component {

  componentDidMount() {
    bind()
  }

  handleFocus = () => {
    this.setState({
      focused: true,
    })
  }

  handleBlur = () => {
    this.setState({
      focused: false,
    })
  }

  render() {
    console.log(this.props.focused)
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <Search
            id='search-box'
            placeholder='搜索'
            onFocus={this.props.handleFocus}
            onBlur={this.props.handleBlur}></Search>
          <span style={style} className='search-icon'>
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

const mapStateToProps = (state) => ({
  focused: state.header.focused
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus: () => dispatch(setSearchFocus()),
  handleBlur: () => dispatch(setSearchBlur())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
