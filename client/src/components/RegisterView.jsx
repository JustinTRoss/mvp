// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

var RegisterView = (props) => {
  return (
    <div className="row">
      <h3>
        Register Your Vehicle
      </h3>
      <form action="http://localhost:3000/api/users" method="post" className="col s12 container" onSubmit={(e) => {props.onSubmit(e)}}>
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate"></input>
            <label for="name">Full Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="7MRJ166" id="licensePlate" type="text" className="validate"></input>
            <label for="licensePlate">License Plate</label>
          </div>
          <div className="input-field col s6">
            <input id="Phone" type="text" className="validate"></input>
            <label for="Phone">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="towAddress" type="text" className="validate"></input>
            <label for="towAddress">Preferred Tow Address</label>
          </div>
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default RegisterView