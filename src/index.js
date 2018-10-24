import React from 'react';
import ReactDOM from 'react-dom';
import Reddits from './components/Reddits';

class CodingCareers extends React.Component {
  render(){
    return(
      <div>
        <Reddits />
      </div>
    )
  }
}

ReactDOM.render(
  <CodingCareers />,
  document.getElementById('root')
);