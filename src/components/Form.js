import React, {Component} from 'react'

class FormField extends Component{
  state ={
    company:{
      name_first: null,
      name_last: null,
      adress: null
    },
    recipient:{
      name: null,
      title: null
    }
  }

  render(){
    return(
      <div>
        <form className='ui form'>
        <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field form-container">
            <div className="field four wide">
              <input type="text" name="info[first-name]" placeholder="First Name"/>
          </div>
          <div className="field four wide">
              <input type="text" name="info[last-name]" placeholder="Last Name"/>
          </div>
          <div className="field four wide">
              <input type="text" name="info[title]" placeholder="Last Name"/>
          </div>
          <div className="field four wide">
              <input type="text" name="info[company-name]" placeholder="Last Name"/>
          </div>
          <div className="field four wide">
              <input type="text" name="info[company-name]" placeholder="Last Name"/>
          </div>
        </div>
      </form>
    </div>
    )
  }


}

export default FormField
