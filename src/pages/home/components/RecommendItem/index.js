import React from 'react'
import { RecommendItem, Author, AuthorName, AuthorDetail, SubButton } from '../../style'

export default ({ data }) => (
  <RecommendItem>
    <img className="avatar" src={data.imgUrl} alt='' />
    <Author>
      <AuthorName>{data.name}</AuthorName>
      <AuthorDetail>写了{data.amount}k字·{data.like}k喜欢</AuthorDetail>
    </Author>
    <SubButton>+关注</SubButton>
  </RecommendItem>
)