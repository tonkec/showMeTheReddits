import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Filter extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.keyword}>
          <TextField
            id="standard-with-placeholder"
            label="Coding language"
            margin="normal"
            type="text" 
            name="keyword" 
          />
          <Button type="submit" color="primary">
            Filter
          </Button>
        </form>
      </div>
    )
  }
}


export default Filter;