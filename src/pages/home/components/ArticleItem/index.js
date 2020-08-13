import React from 'react'
import { ArticleItem, ArticleTitle, ArticleContent, ArticleBottom } from '../../style'
import Icon from '../../../../components/SvgIcon'

export default ({ data }) => (
  <ArticleItem>
    <img className='article-img' src={data.imgUrl} alt="" />
    <ArticleTitle>{data.title}</ArticleTitle>
    <ArticleContent>{data.content}</ArticleContent>
    <ArticleBottom>
      <span>
        <Icon name="star" />
        {data.star}
      </span>
      <span>
        <Icon name="comment" />
        {data.comment}
      </span>
      <span>
        <Icon name="like" />
        {data.like}
      </span>
    </ArticleBottom>
  </ArticleItem>
)