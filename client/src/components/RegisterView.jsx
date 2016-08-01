// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

const RegisterView = ({registerForm, handleRegisterClick}) => {
  return (
    <div className="row">
      <h3>
        Register Your Vehicle
      </h3>
      <div className="col s12 container">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              className="validate"
              value={registerForm.name}
            />
            <label htmlFor="name">Full Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="7MRJ166"
              id="licensePlate"
              type="text"
              className="validate"
              value={registerForm.licensePlate}
            />
            <label htmlFor="licensePlate">License Plate</label>
          </div>
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              className="validate"
              value={registerForm.phone}
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="towAddress"
              type="text"
              className="validate"
              value={registerForm.towAddress}
            />
            <label htmlFor="towAddress">Preferred Tow Address</label>
          </div>
        </div>
        <button onClick={handleRegisterClick} >Submit</button>

      </div>
    </div>
  );
}

export default RegisterView