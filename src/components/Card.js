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
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  }
});

class RecipeReviewCard extends React.Component {
  truncate(title, length){
    return title.substring(0, length);
  }

  render() {
    const { classes, posts } = this.props;
    return (
      <Grid container spacing={24}>
      {this.props.posts.map(item =>
        <Grid item xs={4} key={item.id}>
          <Card className={classes.card}>
            <CardHeader
            title={this.truncate(item.title, 100)}
          />
          <CardContent>
            <Typography paragraph>
              {this.truncate(item.selftext,700)}
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
        </Grid>
      )}
      </Grid>
    )
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);