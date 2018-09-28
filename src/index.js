import React from 'react';
import ReactDOM from 'react-dom';
import Jobs from './components/Jobs';

class CodingCareers extends React.Component {
  render(){
    return(
      <div>
        <Jobs />
      </div>
    )
  }
}

ReactDOM.render(
  <CodingCareers />,
  document.getElementById('root')
);