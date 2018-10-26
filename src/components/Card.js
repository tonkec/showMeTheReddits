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
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


var masonryOptions = {
  gutter: 4
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
        <div className="masonry-column" key={i}>
          <Card className={classes.card}>
          <CardHeader
            title={item.title.substring(0, 100)}
          />
          <CardContent>
            <Typography paragraph>
              {item.selftext.length>300 ? item.selftext.substring(0, 300) + "..." : item.selftext.substring(0, 300)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="External">
              <a href={item.url} target="_blank" className="external-link">
                <FontAwesomeIcon icon="external-link-square-alt" />
              </a>
            </IconButton>
          </CardActions>
        </Card> 
        </div>
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