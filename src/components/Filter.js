import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({ keyword: evt.target.value });
    console.log(this.state.keyword)
  }

  render(){
    const { keyword } = this.state;
    const isEnabled = keyword.length > 0
    return(
      <header className="header">
        <div className="wrapper">
          <h1 className=""> Show me the reddits! </h1>
            <form onSubmit={this.props.keyword}>
              <input 
                type="text" 
                name="keyword" 
                placeholder="Subreddit" 
                className="input-search"
                value={this.state.keyword}
                onChange={this.handleInputChange}
               />
              <button 
              type="submit" 
              disabled={!isEnabled}
              className="btn-search"
              >
                <FontAwesomeIcon icon="search" />
              </button>
            </form>
        </div>
      </header>
    )
  }
}


export default Filter;