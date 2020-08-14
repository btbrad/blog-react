import React, { Component } from 'react'
import { BackTopWrapper } from './style'

export default class BackTop extends Component {

  state= {
    visibility: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.bindEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindEvent)
  }

  backTop = () => {
    window.scrollTo(0, 0)
  }

  bindEvent = () => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 400) {
      this.setState({
        visibility: true
      })
    } else {
      this.setState({
        visibility: false
      })
    }
  }

  render () {
    const { visibility } = this.state
    return (
      <div>
        {visibility ? <BackTopWrapper onClick={this.backTop}>Top</BackTopWrapper> : ''}
      </div>
    )
  }

}