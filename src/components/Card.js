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
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 10
};

const styles = theme => ({
  card: {
    maxWidth: 400,
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
    const childElements = this.props.posts.map(function(item, i){
      return (
        <Card className={classes.card} key={i}>
          <CardHeader
            title={item.title.substring(0, 100)}
          />
          <CardContent>
            <Typography paragraph>
              {item.selftext.substring(0, 300)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card> 
      );
  });
    
  return (
    <Masonry
      className={'reddits'} // default ''
      style={styles.masonry}
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {childElements}
      </Masonry>
    );
  }
}

RedditCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RedditCard);