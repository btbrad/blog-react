import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`

export const Logo = styled.a.attrs({
  href: '/',
})`
  display: block;
  width: 100px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic}) center;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  color: #333;
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const Addition = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.a` 
  display: block;
  float: left;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  line-height: 27px;
  margin-top: 8px;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
  margin-right: 20px;
  &.reg {
    width: 80px;
    color: #EA6F5A;
    border: 1px solid #EA6F5A;
  }
  &.edit {
    width: 100px;
    background: #EA6F5A;
    color: #fff;
  }
`

export const Search = styled.input`
  width: 240px;
  height: 38px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  padding: 0 40px 0 20px;
  margin-top: 8px;
  box-sizing: border-box;
  outline: none;
  font-size： 14px;
  transition: all 1s;
  &:focus {
    width: 320px;
  }
`
