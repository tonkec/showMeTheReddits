import React from 'react';
import ReactDOM from 'react-dom';
import Reddits from './components/Reddits';
import Footer from './components/Footer';

class ShowMeAReddit extends React.Component {
  render(){
    return(
      <div>
        <Reddits />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <ShowMeAReddit />,
  document.getElementById('root')
);