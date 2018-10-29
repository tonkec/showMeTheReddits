import React from 'react';
import Reddits from './components/Reddits';
import Footer from './components/Footer';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCoffee, faHeart, faExternalLinkSquareAlt, faFrown} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faCoffee, faHeart, faExternalLinkSquareAlt, faFrown);
class App extends React.Component {
  render(){
    return(
      <div>
        <Reddits />
        <Footer />
      </div>
    )
  }
}

export default App;