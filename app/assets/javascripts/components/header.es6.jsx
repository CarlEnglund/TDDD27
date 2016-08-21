class Header extends React.Component {
  render () {
    return (

      <div className="header Grid">
          <a href="/home"><div className="headerText Cell -3of12">{this.props.text}</div></a>
          <div className="searchField Cell -3of12"><Search></Search></div>
          <div className="profile Cell -right"><span class="glyphicon glyphicon-user" aria-hidden="true">.</span>
          </div>

      </div>
    );
  }
}

Header.propTypes = {
  text: React.PropTypes.string
};
