import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.keyword}>
          <input type="text" name="keyword" placeholder="category" />
          <button>Filter</button>
        </form>
      </div>
    )
  }
}

export default Button;