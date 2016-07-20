
var Profile = React.createClass({


    render: function() {
        return (

            <div className="mainBox">
                <div><h1>Profile for {this.props.props[1].name}</h1></div>
                {this.props.props.map(function(data, key) {
                    <ListMoviesReviewed movie={data}></ListMoviesReviewed>
                })}


            </div>
        );
    }
});
