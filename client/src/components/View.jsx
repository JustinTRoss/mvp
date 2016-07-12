// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

var View = (props) => {
  return (
    <div className="row">
      <h3>
        Contact Vehicle Owner
      </h3>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="7MRJ166" id="license-plate" type="text" className="validate"></input>
            <label for="license-plate">License Plate</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"></input>
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"></input>
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"></input>
            <label for="email">Email</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default View