import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Filter extends React.Component {
  render(){
    return(
      <header className="header">
        <div className="wrapper">
          <h1 className=""> Show me the reddits! </h1>
            <form onSubmit={this.props.keyword}>
              <input type="text" name="keyword" placeholder="Subreddit" className="input-search" />
              <button type="submit" className="btn-search">
                <FontAwesomeIcon icon="search" />
              </button>
            </form>
        </div>
      </header>
    )
  }
}


export default Filter;