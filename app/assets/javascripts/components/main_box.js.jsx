
var MainBox = React.createClass({


  render: function() {
      

    return (

        <div className="mainBox">

            <RecentReviewList  data={this.props.props}/>
        </div>
    );
  }
});
