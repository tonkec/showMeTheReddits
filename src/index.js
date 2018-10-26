import React from 'react';
import ReactDOM from 'react-dom';
import Reddits from './components/Reddits';
import Footer from './components/Footer';
import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCoffee, faHeart, faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faCoffee, faHeart, faExternalLinkSquareAlt);

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