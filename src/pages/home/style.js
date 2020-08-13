import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 640px;
  height: auto;
  float: left;
` 

export const HomeRight = styled.div`
  width: 280px;
  height: auto;
  float: left;
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
  justify-content: flex-start;
  fon-size: 12px;
  line-height: 40px;
  span {
    font-size: 12px;
    display: inline-block;
    min-width: 70px;
  }
`

export const RecommendWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-left: 40px;
`

export const RecommendTop = styled.div`
  width: 100%;
  height: 50px;
  color: #969696;
  font-size: 14px;
`

export const RecommendTitle = styled.div`
  width: 100px;
  height: 50px;
  float: left;
`
export const RecommendSwitch = styled.div`
  width: 100px;
  height: 50px;
  float: right;
`

export const RecommendList = styled.div`
  width: 100%;
  height: 300px;
`

export const RecommendItem = styled.div`
  width: 100%;
  height: 60px;
  margin: 5px auto;
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
  }
`

export const Author = styled.div`
  width: 150px;
  height: 100%;
  float: left;
  font-size: 12px;
  line-height: 30px;
  margin-left: 2px;
`

export const AuthorDetail = styled.div`
  width: 150px;
  height: 25px;
`

export const AuthorName = styled.p`
  width: 100%;
  height: 25px;
  font-size: 14px;
`

export const SubButton = styled.div`
  float: right;
  width: 50px;
  height: 40px;
  color: green;
  cursor: pointer;
  margin-right: 30px;
`