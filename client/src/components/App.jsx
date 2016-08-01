import React from 'react';
import FootNav from './footNav';
import HeadNav from './headNav';
import PathBtn from './pathBtn';
import ContactView from './View';
import RegisterView from './RegisterView';
import Summary from './summary';


class App extends React.Component {

  constructor() {
    super();

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.state = {
      registerForm: {
        name: '',
        licensePlate: '',
        phone: '',
        towAddress: '',
      },
      contactForm: {
        name: '',
        licensePlate: '',
        fromEmail: '',
        subject: '',
        message: '',
      },
      formType: { name: '', },
    };
  }

  componentWillMount() {
    this.changeForm('register');
  }

  changeForm(formType) {
    console.log('made a clicky');
    formType = (
      formType === 'register'
        ? { 
            name: 'register',
            form: <RegisterView
                    handleRegisterClick={this.handleRegisterClick}
                    registerForm={this.state.registerForm}
                  />,
          }
        : {
            name: 'contact',
            form: <ContactView
                    handleContactClick={this.handleContactClick}
                    contactForm={this.state.contactForm}
                  />
          }
    );
    if (this.state.formType.name !== formType.name) {
      this.setState({
        formType: formType
      });
    }
  }

  handleRegisterClick(data) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>', data.target, data.target); 
    fetch('/users', {
      method: 'post',  
      headers: {  
        "Content-type": "application/json"  
      },  
      body: this.state.registerForm,
    })
    .then(res.json())
    .then(() => {
      this.setState({
        registerForm: {
          name: '',
          licensePlate: '',
          phone: '',
          towAddress: '',
        }
      });
    })
    .catch(err => console.error(err));
  }

  handleContactClick(data) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>', data.target, data.target); 
    fetch('/towEvents', {
      method: 'post',
      header: {
        "Content-type": "application/json"  
      },  
      body: this.state.contactForm,
    })
    .then(res.json())
    .then(() => {
      this.setState({
        contactForm: {
          name: '',
          licensePlate: '',
          fromEmail: '',
          subject: '',
          message: '',
        }
      });
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="wrapper">
        <header>
          <HeadNav />
        </header>
        <main className="Site-content col s13">
          <Summary />
          <div className=" container row center">
            <PathBtn
              btnText="Register Your Vehicle"
              icon="input"
              className="waves-effect waves-light btn-large col s6 left"
              onClick={() => this.changeForm('register')}
            />
            <PathBtn
              btnText="Contact Vehicle Owner"
              icon="perm_contact_calendar"
              className="waves-effect waves-light btn-large col s6 right"
              onClick={() => this.changeForm('contact')}
            />
          </div>
            {this.state.formType.form}
        </main>
        <FootNav/>
      </div>
    );
  }
}

export default App