
var ListMoviesReviewed = React.createClass({


    render: function() {

        console.log(this.props);
        return (
                <div>
                <h1>Här kommer resten av filmerna.</h1>
                <div className="Cell -2of12"><p>{this.props[1].name}</p><p>Rating: {this.props.score}</p></div>
                </div>

        );
    }
});
