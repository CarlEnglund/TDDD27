

var movieIndex = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="span2">
                        <h2>{this.props.movie.title}</h2>
                        <img src={`${this.props.img_url}w154${this.props.movie.poster_path}`} alt=""/>
                        <h3>Facts</h3>
                        Runtime: {this.props.movie.runtime} minutes<br />
                          Release Date: <br />
                        {this.props.movie.release_date}
                    </div>
                    <p>{this.props.movie.overview}</p>
                    <iframe width="420" height="315"
                            src={`http://www.youtube.com/embed/${this.props.trailer.youtube[0].source}`}>
                    </iframe>
                </div>
                <a href={`/reviews/new?movie_id=${this.props.movie.id}`}>New Review</a>
             </div>
        )
    }
})


