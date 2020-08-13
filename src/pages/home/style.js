import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 640px;
  height: auto;
` 

export const HomeRight = styled.div`
  width: 280px;
  height: auto;
`

export const ArticleList = styled.div`
  width: 100%;
  padding-left: 20px;
  margin-top: 50px;
  height: auto;
`

export const ArticleItem = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  .article-img {
    width: 148px;
    height: 98px;
    float: right;
  }
`

export const ArticleTitle = styled.p`
  height: 50px;
  width: 70%;
  font-size: 18px;
  font-weight: 700;
  word-break: break-word;
  margin-bottom: 10px;
  cursor: pointer;
  color： #969696；
`

export const ArticleContent = styled.div`
  width: 70%;
  height: 50px;
  line-height: 20px;
  color: #999;
  font-size: 13px;
`

export const ArticleBottom = styled.div`
  width: 70%;
  height: 50px;
  color: #999;
  display: flex;
  justify-content: space-between;
  fon-size: 12px;
  line-height: 40px;
`