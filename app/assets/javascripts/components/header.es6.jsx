class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="headerText">{this.props.text}</div>
          <div className="searchField"><Search></Search></div>
          <a href="/logout">Log out</a>
      </div>
    );
  }
}

Header.propTypes = {
  text: React.PropTypes.string
};
