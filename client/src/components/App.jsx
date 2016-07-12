import React from 'react';
import FootNav from './footNav';
import HeadNav from './headNav';
import PathBtn from './pathBtn';
import View from './View';
import RegisterView from './RegisterView';
import Summary from './summary';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      formType: <RegisterView />
    };
  }

  changeForm(type) {
    console.log('made a clicky');
    if (this.state.formType !== type) {
      this.setState({
        formType: type
      });
    }
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
            <PathBtn btnText = "Register Your Vehicle" icon="input" className="waves-effect waves-light btn-large col s6 left" onClick={this.changeForm.bind(this, <RegisterView />)}/>
            <PathBtn btnText = "Contact Vehicle Owner" icon="perm_contact_calendar" className="waves-effect waves-light btn-large col s6 right" onClick={this.changeForm.bind(this, <View />)}/>
          </div>
            {this.state.formType}
        </main>
        <FootNav/>
      </div>
    );
  }
}

export default App