import React from 'react';
import ReactDOM from 'react-dom';
import Reddits from './components/Reddits';
import Footer from './components/Footer';
import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

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