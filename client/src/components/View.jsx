// Shows vehicle registration form by default

// Toggles to show contact vehicle owner form when someone selects appropriate button

const View = ({contactForm, handleContactClick}) => {
  return (
    <div className="row">
      <h3>
        Contact Vehicle Owner
      </h3>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="7MRJ166"
              id="licensePlate"
              type="text"
              className="validate"
              value={contactForm.licensePlate}
            />
            <label htmlFor="licensePlate">License Plate</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="name"
              type="text"
              className="validate"
              value={contactForm.name}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="fromEmail"
              type="email"
              className="validate"
              value={contactForm.fromEmail}
            />
            <label htmlFor="fromEmail">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="subject"
              type="text"
              className="validate"
              value={contactForm.subject}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="message"
              type="text"
              className="validate"
              value={contactForm.message}
            />
            <label htmlFor="message">Message Text</label>
          </div>
        </div>
        <button onClick={handleContactClick}>Submit</button>
      </div>
    </div>
  );
}

export default View