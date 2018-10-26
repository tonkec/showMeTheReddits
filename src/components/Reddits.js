import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Filter from './Filter';
import Card from './Card';

class Reddits extends React.Component {
  constructor(props) {
    super(props);
    this.getKeyword = this.getKeyword.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
      loading: true,
      error: null,
      category:  "ruby"
    };
  }

  componentDidMount(){
    this.getPosts(this.state.category);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.category !== nextState.category) {
      this.getPosts(nextState.category);
    }
  }

  getPosts(category){
    axios.get(`http://www.reddit.com/r/${category}.json`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        const posts = data.filter(obj => obj.selftext !== "");
        this.setState({
          posts: posts,
          loading: false,
          error: null
        });
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

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <main className="main">
        <Filter keyword={this.getKeyword} />
        <section className="section">
          <h1 className="section-heading"> {this.capitalize(this.state.category)} reddits </h1>
          <Card posts={this.state.posts} />
          {this.state.loading ? this.renderLoading() : this.renderPosts()}
        </section>
      </main>
    );
  }
}

export default Reddits