class ProfileBox extends React.Component {

  render () {
     
    return (
      <div className="profileBox">
         <div className="personalBox"><img className="circular" src={this.props.props[0].image_url} alt=""/>
          <h4 className="profileName">{this.props.props[0].name}</h4></div>
          <div className="infoBox"><p>Movies reviewed: {this.props.props[1].length}</p></div>
      </div>);
  }
}
