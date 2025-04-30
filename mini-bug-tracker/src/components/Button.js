import PropTypes from 'prop-types'

const Button = ({text, onClick, style}) => {

  return (
    <button 
    className="btn" 
    onClick={onClick}
    style={style}>
        {text}
    </button>
  )
}
Button.defaultProps = {
    color: 'blue'
}
Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
