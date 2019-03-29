import React, {Component} from 'react'
import '../style/main.css'
import text from './coverLetter'
class Text extends Component{

  state={
    text: text
  }

componentDidUpdate(){
  let {city,
     companyName,
     firstName,
     lastName,
     sir,
     state,
     street,
     suite,
     title,
     zip} = this.props.formData.data

}

  formatText = () =>{
    return(this.state.text.text)
  }

  render(){
    console.log(this.state.text.text);
    return(
      <div>
      <div className="ui segment">
        {this.formatText()}
      </div>
      </div>
    )
  }
}

export default Text
