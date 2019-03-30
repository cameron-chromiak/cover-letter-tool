import React, { Component } from 'react';
import FormField from './components/Form'
import Text from './components/Text'


class App extends Component {


  state={
    data: ''
  }

  onFormSubmit = (state)=>{
    this.setState({data:state})
  }

  render() {
    return (
      <div className="App">
        <div className='app-container'>
          <div className='left'><FormField  onFormSubmit={this.onFormSubmit} /></div>
          <div className='right'><Text formData={this.state}/></div>
        </div>
      </div>
    );
  }
}

export default App;
