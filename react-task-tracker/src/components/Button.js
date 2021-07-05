import PropTypes from 'prop-types'

function Button(props) {
    return (
<button className='btn' style={{ backgroundColor: props.color}}>{props.text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button