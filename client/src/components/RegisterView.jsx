// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

var RegisterView = (props) => {
  return (
    <div className="row">
      <h3>
        Register Your Vehicle
      </h3>
      <form className="col s12 container">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="7MRJ166" id="license-plate" type="text" className="validate"></input>
            <label for="license-plate">License Plate</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"></input>
            <label for="last_name">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"></input>
            <label for="password">Preferred Tow Address</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterView