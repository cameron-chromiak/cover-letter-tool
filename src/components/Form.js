import React, {Component} from 'react'
import '../style/main.css'


class FormField extends Component{
  state ={
      companyName: '',
      street: '',
      city: '',
      suite: '',
      state: '',
      zip: '',
      sir: 'Mr',
      firstName: '',
      lastName: '',
      title: ''

  }

  onFirstNameChange = (e) =>{
    this.setState({firstName:e.target.value})
  }
  onLastNameChange = (e) =>{
    this.setState({lastName:e.target.value})
  }
  onTitleChange = (e) =>{
    this.setState({title:e.target.value})
  }
  onSelectChange = (e)=>{
    this.setState({sir:e.target.value})
  }
  onCompanyName = (e) =>{
    this.setState({companyName:e.target.value})
  }
  onStreetChange = (e) =>{
    this.setState({street:e.target.value})
  }
  onCityChange = (e) =>{
    this.setState({city:e.target.value})
  }
  onSuiteChange = (e) =>{
    this.setState({suite:e.target.value})
  }
  onCompStateChange = (e) =>{
    this.setState({state:e.target.value})
  }
  onCompZipChange = (e) =>{
    this.setState({zip:e.target.value})
  }
  onFormSubmit = (e) =>{
    e.preventDefault()
    this.props.onFormSubmit(this.state)
  }

  render(){
    // console.log(this.props);
    return(
    <div>
      <form className='ui form form-container'onSubmit={this.onFormSubmit}>
        <div className="field">
        <h5>Recipient Info</h5>
        <div className='fields'>
          <select onChange={this.onSelectChange} className="ui fluid dropdown four wide field">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
          <div className="twelve wide field">
            <input onChange={this.onFirstNameChange} value={this.state.firstName}type="text"placeholder="First Name"/>
          </div>
        </div>
          <div className="field">
              <input onChange={this.onLastNameChange} type="text" value={this.state.lastName} placeholder="Last Name"/>
          </div>
          <div className="field">
              <input onChange={this.onTitleChange} type="text"value={this.state.title} placeholder="Title"/>
          </div>
        </div>

    <div className="field">
        <div className="field">
          <h4>Company Info</h4>
          <input onChange={this.onCompanyName} type="text" value={this.state.companyName} placeholder="Company Name"/>
        </div>
        <div className="field">
          <input onChange={this.onStreetChange} type="text" value={this.state.street} placeholder="Street Adress"/>
        </div>
        <div className="fields">
          <div className="field eleven wide">
            <input onChange={this.onCityChange} type="text" value={this.state.city} placeholder="City"/>
          </div>
            <div className="field five wide">
              <input onChange={this.onSuiteChange} type="text" value={this.state.suite} placeholder="Floor, Suite #"/>
            </div>
        </div>
    </div>

     <div className="fields">
     <div className='field'>
       <h4>State</h4>
      <select onChange={this.onCompStateChange} value={this.state.state} className="ui fluid dropdown">
       <option value="">State</option>
         <option value="AL">Alabama</option>
         <option value="AK">Alaska</option>
         <option value="AZ">Arizona</option>
         <option value="AR">Arkansas</option>
         <option value="CA">California</option>
         <option value="CO">Colorado</option>
         <option value="CT">Connecticut</option>
         <option value="DE">Delaware</option>
         <option value="DC">District Of Columbia</option>
         <option value="FL">Florida</option>
         <option value="GA">Georgia</option>
         <option value="HI">Hawaii</option>
         <option value="ID">Idaho</option>
         <option value="IL">Illinois</option>
         <option value="IN">Indiana</option>
         <option value="IA">Iowa</option>
         <option value="KS">Kansas</option>
         <option value="KY">Kentucky</option>
         <option value="LA">Louisiana</option>
         <option value="ME">Maine</option>
         <option value="MD">Maryland</option>
         <option value="MA">Massachusetts</option>
         <option value="MI">Michigan</option>
         <option value="MN">Minnesota</option>
         <option value="MS">Mississippi</option>
         <option value="MO">Missouri</option>
         <option value="MT">Montana</option>
         <option value="NE">Nebraska</option>
         <option value="NV">Nevada</option>
         <option value="NH">New Hampshire</option>
         <option value="NJ">New Jersey</option>
         <option value="NM">New Mexico</option>
         <option value="NY">New York</option>
         <option value="NC">North Carolina</option>
         <option value="ND">North Dakota</option>
         <option value="OH">Ohio</option>
         <option value="OK">Oklahoma</option>
         <option value="OR">Oregon</option>
         <option value="PA">Pennsylvania</option>
         <option value="RI">Rhode Island</option>
         <option value="SC">South Carolina</option>
         <option value="SD">South Dakota</option>
         <option value="TN">Tennessee</option>
         <option value="TX">Texas</option>
         <option value="UT">Utah</option>
         <option value="VT">Vermont</option>
         <option value="VA">Virginia</option>
         <option value="WA">Washington</option>
         <option value="WV">West Virginia</option>
         <option value="WI">Wisconsin</option>
         <option value="WY">Wyoming</option>
        </select>
      </div>
        <div  className='field'>
          <h4>Zip Code</h4>
          <input onChange={this.onCompZipChange} type="number" pattern="[0-9]{5}" maxLength="5" />
        </div>
    </div>
      <button className='ui button primary'>Submit</button>
    </form>
  </div>
    )
  }


}

export default FormField
