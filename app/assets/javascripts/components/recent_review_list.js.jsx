var RecentReviewList = React.createClass({

    getInitialState: function() {
        return {
            poster: [],
            name: [],

        };
    },

    componentWillMount: function() {

        var b = [];
        this.props.data.forEach(function(data) {
            data.forEach(function(map) {
                b.push('https://api.themoviedb.org/3/movie/' + map.movie_id + '?api_key=404f72b9ac53b34084b290e2f2ddabbc');
            })

        })

        for(var data in b)
        {
            fetch(b[data]).then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        poster: this.state.poster.concat(["http://image.tmdb.org/t/p/w154/" + responseData.poster_path]),
                        name: this.state.name.concat([responseData.original_title])

                    })
                })
        }
    },

    render: function() {

        var array = []
        var array2 = []
        this.props.data.map(function(data) {
            array.push(data);
        })
        this.state.name.map(function(data) {
            array2.push(data);
        })
        console.log(array2);
        return (

            <div className="Grid  -between">{this.state.poster.map(function(data, key){
                console.log(array)
                return (<PosterList poster={data} name={array2[key]} rating={array[0][key]}></PosterList>)
            })
            }

            </div>
        );
    },
});

var PosterList = React.createClass({
    render: function() {

        return <div className="Cell -2of12"><img src={this.props.poster}/><p>{this.props.name}</p><p>Rating: {this.props.rating.score}</p></div>
    }
})