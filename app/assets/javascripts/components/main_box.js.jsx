
var MainBox = React.createClass({


  render: function() {
    return (
        <div className="mainBox">
            <div><h1>Recent reviews</h1></div>
            <RecentReviewList  data={this.props.props[0]}/>
        </div>
    );
  }
});
