import React from 'react';
import ReactDOM from 'react-dom';
import Reddits from './components/Reddits';
import Footer from './components/Footer';
import './styles/main.scss';

class ShowMeAReddit extends React.Component {
  render(){
    return(
      <main>
        <Reddits />
        <Footer />
      </main>
    )
  }
}

ReactDOM.render(
  <ShowMeAReddit />,
  document.getElementById('root')
);