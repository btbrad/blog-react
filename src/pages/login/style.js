import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: calc(100% - 56px);
  background: #ccc;
  overflow: hidden;
`

export const LoginBox = styled.div`
  width: 300px;
  height: 200px;
  background: #fff;
  margin: 200px auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const LoginInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px auto 0;
`

export const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  background: #0ff;
  margin: 10px auto 0;
`
