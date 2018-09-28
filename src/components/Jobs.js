import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from './Button';
import SimpleExpansionPanel from './SimpleExpansionPanel';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.getKeyword = this.getKeyword.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
      loading: true,
      error: null,
      category:  ""
    };
  }

  componentDidMount(){
    this.getPosts(this.state.category)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.category !== nextState.category) {
      this.getPosts(nextState.category)
    }
  }

  getPosts(category){
     //console.log(`fetching... ${category}`)
     axios.get(`https://careers.codeinstitute.net/job-listings/1?category=${category}&location=ireland&type=full-time`)
      .then(res => {
        const posts = res.data.data.map(obj => JSON.parse(obj))
        this.setState({
          posts: posts,
          loading: false,
          error: null
        });
       // console.log(`fetched: ${res.data.data}`)
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }
  }
  
  getKeyword(e, keyword){
    e.preventDefault();
    keyword = e.target.elements.keyword.value.trim();
    this.setState(() => ({
      category: keyword
    }));
  }

  render() {
    return (
      <div>
        <Button keyword={this.getKeyword} />
        <SimpleExpansionPanel posts = {this.state.posts} classes={{paper:"paper"}} />
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
      </div>
    );
  }
}

export default Jobs