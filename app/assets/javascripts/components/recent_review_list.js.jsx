var RecentReviewList = React.createClass({
    getInitialState: function() {
        return {
            poster: [],
            name: [],

        };
    },
    componentWillMount: function() {
        var fetchedMovies = [];
        this.props.data.forEach(function(data) {
                fetchedMovies.push('https://api.themoviedb.org/3/movie/' + data.movie_id + '?api_key=404f72b9ac53b34084b290e2f2ddabbc');
        })

        for(var movie in fetchedMovies)
        {
            fetch(fetchedMovies[movie]).then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        poster: this.state.poster.concat(["http://image.tmdb.org/t/p/w154/" + responseData.poster_path]),
                        name: this.state.name.concat([responseData.original_title])

                    })
                })
        }
    },

    render: function() {
        var ratingArray = []
        var movieNames = []
        this.props.data.map(function(data) {
            ratingArray.push(data);
        })
        this.state.name.map(function(data) {
            movieNames.push(data);
        })

        return (
            <div className="Grid  -between">{this.state.poster.map(function(data, key){
                return (<Movie poster={data} name={movieNames[key]} rating={ratingArray[key]}></Movie>)
                })
            }
            </div>
        );
    },
});

var Movie = React.createClass({
    render: function() {
        let editPath = `reviews/${this.props.rating.id}/edit`;
        let destroyPath = `destroy/${this.props.rating.id}`;
        return (
            <div className="Cell -2of12">
                    <img src={this.props.poster}/>
                    <p>{this.props.rating.name}</p>
                    <p>Rating: {this.props.rating.score}</p>
                    <a href={editPath}>Edit</a>
                    <a href={destroyPath}>Delete</a>
            </div>);
    }
})