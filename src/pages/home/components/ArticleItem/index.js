import React from 'react'
import {
  ArticleItem,
  ArticleTitle,
  ArticleContent,
  ArticleBottom,
} from '../../style'
import Icon from '../../../../components/SvgIcon'
import { Link } from 'react-router-dom'

export default ({ data }) => (
  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/detail`}>
    <ArticleItem>
      <img className='article-img' src={data.imgUrl} alt='' />
      <ArticleTitle>{data.title}</ArticleTitle>
      <ArticleContent>{data.content}</ArticleContent>
      <ArticleBottom>
        <span>
          <Icon name='star' />
          {data.star}
        </span>
        <span>{data.category}</span>
        <span>
          <Icon name='comment' />
          {data.comment}
        </span>
        <span>
          <Icon name='like' />
          {data.like}
        </span>
      </ArticleBottom>
    </ArticleItem>
  </Link>
)
