
var searchIndex = React.createClass({
    render: function() {
        self = this.props.img_url;
        console.log(this.props.movies)
        return (
            <div className="searchResponse">
                {this.props.movies.map((data =>
                        <Response id={data.id} name={data.title} overview={data.overview} img={data.poster_path}></Response>)
                )}
            </div>
        );
    }
});

var Response = React.createClass({
   render: function() {
       if(this.props.img)
       {
           console.log(this.props)
           return (
               <li className="responseItem">
                   <div className="responseItemContainer">
                       <img src={`${self}w154${this.props.img}`} alt=""/>
                       <div className="responseInfo">
                           <h3 className="responseTitle">{this.props.name}</h3>
                           <a className="responseReview" href={`movies/${this.props.id}`}>Write a review</a>
                       </div>
                       <p className="responseDescription">{this.props.overview}</p>
                   </div>
               </li>
           );
       }
       else
        return (<span></span>);

   }
});