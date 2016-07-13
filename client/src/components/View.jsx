// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

var View = (props) => {
  return (
    <div className="row">
      <h3>
        Contact Vehicle Owner
      </h3>
      <form action="http://localhost:3000/api/towEvents" method="post" className="col s12" onSubmit={(e) => {props.onSubmit(e)}} >
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="7MRJ166" id="license-plate" type="text" className="validate"></input>
            <label for="license-plate">License Plate</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate"></input>
            <label for="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input id="fromAddr" type="email" className="validate"></input>
            <label for="fromAddr">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="subject" type="text" className="validate"></input>
            <label for="subject">Subject</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="message" type="text" className="validate"></input>
            <label for="message">Message Text</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default View