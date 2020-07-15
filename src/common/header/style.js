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
  background: green;
`
