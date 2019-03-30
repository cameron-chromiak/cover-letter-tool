import React, {Component} from 'react'
import '../style/main.css'
import text from './coverLetter'
const moment = require('moment');

  let data = {
        city: 'Be a Part Of',
         companyName: 'In',
         firstName: 'Sure',
         lastName: 'Sure',
         sir: 'Yea',
         state: 'The ',
         street: 'I\'d',
         suite: 'LOVE ',
         title: 'Count me',
         zip: 'Team',
        email: 'sure@email.com',
        phone: '617-978-5081',
        jobTitle: 'job'
       }

class Text extends Component{



  state={
    text: text,
    data: data
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
     zip,
     email,
     phone,
     jobTitle
    } = this.props.formData.data

      data = {
       city,
       companyName,
       firstName,
       lastName,
       sir,
       state,
       street,
       suite,
       title,
       zip,
       email,
        phone,
        jobTitle
     }
     console.log(data);
}


  formatText = () =>{
    return(
      <pre>
      <p className='title-date'>{moment(Date.now()).format('LL')}</p>
      <p className='title-item'>{`${data.firstName} ${data.lastName}`}</p>
      <p className='title-item'>{`${data.title}`}</p>
      <p className='title-item'>{`${data.companyName}`}</p>
      <p className='title-item'>{`${data.street} ${data.suite}`}</p>
      <p className='title-item'>{`${data.city} ${data.state} ${data.zip}`}</p>

      <p>{`${data.sir}. ${data.lastName},`}</p>

      <p>
        I came across the {`${data.jobTitle}`} opportunity on your company’s website. After viewing the position, requirements,
        and goals of {`${data.companyName}`}, I would be privileged to grow both the company’s impact and my skills as a developer.
        Opportunity and education are, what I believe, can make a career worth pursuing, and {`${data.companyName}`} offers both to its clients and employees.
        I am sure my experience and knowledge, along with my ambition, will be a valuable addition to the team.
      </p>

      <p>
        My path to becoming a {`${data.jobTitle}`} started when I was a teenager. I first started playing with static HTML pages and bash
        scripts. Since then I have studied and worked with many other languages, libraries, and paradigms. When I find a new technology,
        the urge to read or watch videos is always in my head, turning into something that keeps me up while I try to understand it.
      </p>
      <p>
        While in college, studying Computer Science, I worked full time as a shift leader at a local restaurant from which I gained
        critical soft skills and awesome friendships. When not busy with school or work I occupied myself with learning. In an effort
        to save years off my education, I attended Ironhack in Miami. Ironhack is an intensive program that aims to teach web development
        in an accelerated course. It was an invaluable decision, and now I am much closer to starting a career in the field I have wanted
        to for so long.
      </p>

      <p>My resume is attached, and I encourage you to look at it. If you wish to contact me to
       discuss the position, please do not hesitate.</p>




      <p>
      Best regards,<br/>
      Cameron Chromiak <br/>
      {`${data.phone}`}<br/>
      {`${data.email}`}
      </p>
      </pre>

    )
  }

  render(){
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
