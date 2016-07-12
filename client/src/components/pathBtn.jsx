// Create button to toggle View to appropriate template

var PathButton = (props) => {
  return (
    <a className={props.className} onClick={props.onClick}>
      <i className="material-icons left">
        {props.icon}
      </i>
      {props.btnText}
    </a>
  )
}

export default PathButton