class Search extends React.Component {
  render () {
    return  <form action="/search" method="get"><input id="query" name="query" placeholder="Search movie" type="text" /></form>;
  }
}

