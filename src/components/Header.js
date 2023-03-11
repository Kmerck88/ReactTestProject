const Header = ({ title }) => {
  return (
    <Header>
      <h1>
        {title}
      </h1>
    </Header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  // eslint-disable-next-line no-undef
  title: PropTypes.string.isRequired, 

  
}
export default Header