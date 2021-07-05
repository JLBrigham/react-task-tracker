import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header>
<h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header