import React, {Component} from 'react'
import '../style/main.css'

class Text extends Component{
  state:{}


  render(){
    console.log(this.props);
    return(
      <div>
      <div class="ui grid">
        <div class="four wide column">s</div>
        <div class="four wide column">s</div>
        <div class="four wide column">s</div>
        <div class="four wide column">s</div>
        <div class="two wide column"></div>
        <div class="eight wide column"></div>
        <div class="six wide column"></div>
      </div>
      </div>
    )
  }
}

export default Text
