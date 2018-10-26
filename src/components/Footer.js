import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  root: {
    flexGrow: 1
  }
}
class Footer extends React.Component {
  render(){
    return(
      <footer className="footer">
        <Grid container spacing={24} className="footer-container">
          <Grid item xs={12}>
            <h4 className="footer-heading"> 
              Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" />
            </h4>
            <p>  
              <a href="https://github.com/tonkec" target="_blank" className="footer-anchor ">Antonija Simic</a> 
            </p>
          </Grid>
        </Grid>

        	
      </footer>
    )
  }
}

export default Footer;