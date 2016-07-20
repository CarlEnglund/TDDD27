

Search = React.createClass({

    getInitialState: function() {
        return {
           movies: [],
        };
    },

    handleChange: function(query) {



        var test = 'https://api.themoviedb.org/3/search/movie?api_key=404f72b9ac53b34084b290e2f2ddabbc&query=' + query.target.value+"&page=1";
            console.log(test);
            fetch(test).then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        //movies: responseData.result[0];


                });
                })

    },

    componentDidMount: function() {
        $(this.getDOMNode()).autocomplete({
            source: "Bad",
        });

        console.log(this.state);
    },





  render: function () {
    return  <form action="/search" method="get"><input id="query" name="query" refs="searchTermInput" placeholder="Search movie" type="text" onChange={this.handleChange} />
    </form>;
  }
});

