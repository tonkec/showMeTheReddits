import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: "0 auto 20px"
  },
  actions: {
    display: 'flex',
  },
  masonry: {
    marginBottom: "20px"
  }
});
class RedditCard extends React.Component {

  render() {
    const { classes, posts } = this.props;
    return(
      <Grid container spacing={24}>
        {this.props.posts.map((post, i) =>
          <Grid item xs={12} md={6} lg={4} className="reddit-column" key={i}>
            <Card className={classes.card}>
            <CardHeader
              title={post.title.substring(0, 100)}
            />
            <CardContent>
              <Typography paragraph>
                {post.selftext.length>300 ? post.selftext.substring(0, 300) + "..." : post.selftext.substring(0, 300)}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="External">
                <a href={post.url} target="_blank" className="external-link">
                  <FontAwesomeIcon icon="external-link-square-alt" />
                </a>
              </IconButton>
            </CardActions>
          </Card> 
        </Grid>
        )}
      </Grid>
    )
  
  }
}

RedditCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RedditCard);