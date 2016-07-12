// Create footer nav with inspiring note and contacts/links

var FootNav = (props) => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Inspiration</h5>
            <p className="grey-text text-lighten-4">When you ask around to people who have experienced the surprise of having their car towed, you quickly realize a common residual disgust, no matter how distant the experience.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Stack</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://www.mongodb.com/">MongoDB</a></li>
              <li><a className="grey-text text-lighten-3" href="https://expressjs.com/">Express</a></li>
              <li><a className="grey-text text-lighten-3" href="https://facebook.github.io/react/">React</a></li>
              <li><a className="grey-text text-lighten-3" href="https://nodejs.org/en/">Node</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        This site was hacked together by Justin Ross
        <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/rossjustint">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default FootNav;