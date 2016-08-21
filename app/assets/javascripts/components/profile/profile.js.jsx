
var Profile = React.createClass({


    render: function() {
        console.log(this)
        return (

            <div className="mainBox">
                <div><h1>Profile for {this.props.data[1].name}</h1></div>
                <RecentReviewList  data={this.props.data[0]}/>
            </div>
        );
    }
});
