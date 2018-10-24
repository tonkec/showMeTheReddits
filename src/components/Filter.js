import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Filter extends React.Component {
  render(){
    return(
      <header className="header">
        <div className="wrapper">
          <h1 className=""> Show me the reddits! </h1>
            <form onSubmit={this.props.keyword}>
              <input type="text" name="keyword" placeholder="Category" className="search" />
              {/*<Button type="submit" color="primary">
                Filter
              </Button>*/}
            </form>
        </div>
      </header>
    )
  }
}


export default Filter;