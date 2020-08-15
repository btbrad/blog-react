import React, { Component } from 'react'
import { DetailWrapper, Title, Content } from './style'
import { connect } from 'react-redux'
import { getDetail } from './store/actionCreators'

class Detail extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { title, content } = this.props

    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDetail()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
