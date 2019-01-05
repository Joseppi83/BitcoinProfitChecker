import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.checkGains = this.checkGains.bind(this)
  }
  checkGains(){
    const {percent} = this.props.globalState.totalStatus

    if(this.props.globalState.status == 'gain'){
      return `You made ${percent}% profit`
    } else {
      return `You lost ${percent}% of your initial investment`
    }
  }
  render () {
    const {percent, newCP, newSP} =
    this.props.globalState.totalStatus
    return (<section id='results'>
        <div className="container">
        <div className="col-md-12">
          <div className="ads">Ad banner</div>
        </div>
          <div className="col-md-12">
            <h3>Your ${newCP} investment is now </h3>
            <h1>${newSP}</h1>
            <h4>{this.checkGains()}</h4>
            <a href="#" className="main-btn active">
            Create account to keep track of all your records
            </a>
            <a href="#" className="main-btn" onClick={this.props.goBack}>
            Or check another transaction
            </a>
          </div>
          <div className="col-md-12">
            <div className="ads">Ad banner</div>
          </div>
        </div>
      </section>)
  }
}
