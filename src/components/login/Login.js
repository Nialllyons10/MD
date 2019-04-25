// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '/Users/niall/Documents/test/ipfs-image-dapp/src/actions/loginActions.js'
import styled from 'styled-components'
import { uportConnect } from '/Users/niall/Documents/test/ipfs-image-dapp/src/utils/uport.js'
import { withRouter } from 'react-router-dom'

const ConnectReqID =
  'e8ebbe28b0463ffb02fc63a619abf969ec4d95362f7276b55cc0cb0b5cb21ba0'

const ConnectUport = styled.button``

class Login extends Component {
  constructor(props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)

    uportConnect.onResponse(ConnectReqID).then((res) => {
      console.log('res.payload')
      console.log(res.payload)
      this.props.actions.connectUport(uportConnect.state)
      this.props.history.push('/imageHome')
    })
  }

  connectUport() {
    const reqObj = {
      requested: ['name', 'phone', 'country'],
      notifications: true,
    }
    uportConnect.requestDisclosure(reqObj, ConnectReqID)
  }

  render() {
    return (
      <div className="container">
        <h4>Build a Better dApp</h4>
        <p>Identity and transaction infrastructure for Ethereum</p>
        <ConnectUport onClick={this.connectUport}>
          Connect with uPort
        </ConnectUport>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.login.uport,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
