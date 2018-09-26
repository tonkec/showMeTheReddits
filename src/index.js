import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class CodingCareers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://careers.codeinstitute.net/job-listings/1?keyword=python&location=ireland&type=full-time')
      .then(res => {
      
        const posts = res.data.data.map(obj => JSON.parse(obj))
        this.setState({ posts });
        console.log(posts)

        this.setState({
          posts,
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

    return (
      <div>
        <ul>
          {this.state.posts.map(item =>
           <li key={item.id}>TITLE: {item.role_title}  DESCRIPTION: {item.job_description}</li> 
          )}
          
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
      </div>
    );
  }
}

ReactDOM.render(
  <CodingCareers />,
  document.getElementById('root')
);
