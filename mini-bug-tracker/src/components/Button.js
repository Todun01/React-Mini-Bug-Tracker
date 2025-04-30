import PropTypes from 'prop-types'

const Button = ({text, onClick, style, type}) => {

  return (
    <button 
    className="btn" 
    onClick={onClick}
    style={style}
    type={type}>
        {text}
    </button>
  )
}
Button.defaultProps = {
    color: 'blue'
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
