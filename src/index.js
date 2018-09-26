import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://careers.codeinstitute.net/job-listings/1?keyword=python&location=ireland&type=full-time')
      .then(res => {
      
        const posts = res.data.data.map(obj => JSON.parse(obj))
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
        <SimpleExpansionPanel posts = {this.state.posts} classes={{paper:"paper"}} />

        {this.state.loading ? this.renderLoading() : this.renderPosts()}
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes, posts } = props
  return (
    <div className={classes.root}>     
    {props.posts.map(item =>
      <ExpansionPanel key={item.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{item.role_title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {item.job_description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      )}
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};


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
