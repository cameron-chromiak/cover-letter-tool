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

      <form className='ui form form-container'>
        <div className="field">
          <div className="field four wide">
            <h5>Recipient Info</h5>
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

    <div class="field">
        <div class="four wide field">
          <h4>Company Info</h4>
          <input type="text" name="company[title]" placeholder="Street Address"/>
        </div>
        <div class="four wide field">
          <input type="text" name="company[address]" placeholder="Apt #"/>
        </div>
    </div>

     <div className="fields">
     <div className='two wide field'>
       <h4>State</h4>
      <select className="ui fluid dropdown">
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
        <div  className='field two wide'>
          <h4>Zip Code</h4>
          <input type="number" pattern="[0-9]{5}" maxLength="5" />
        </div>
    </div>
    </form>
  </div>
    )
  }


}

export default FormField
