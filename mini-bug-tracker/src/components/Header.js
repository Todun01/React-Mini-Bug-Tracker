import Button from "./Button"
import PropTypes from 'prop-types'
const Header = ({title= "Mini Bug Tracker", onLog, showForm}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button style={{
          color: "white",
          backgroundColor: showForm? "red" : "green",
          }} 
          text={showForm? "Close" : "Log Bug"} 
          onClick= {onLog} ></Button>
    </header>
  )
}

// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }


Header.propTypes = {
    title: PropTypes.string.isRequired,
    showForm: PropTypes.bool.isRequired,
}

export default Header
