import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Comment from './comment'
import ModalImage from 'react-modal-image';



const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  avatarIcon: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
});


class RecipeReviewCard extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
    photos: [],
    expanded: false
    }
  }
  
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=5").then(response => {

      this.setState({
        photos: response.data
      })
      console.log(this.state.photos)
    }).catch(err => {
      console.log(err)
    }) 
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      {this.state.photos.map(photo => {
        return (
         <center>
          
         <Card style={{textAlign: "left"}} className={classes.card}>

       <CardHeader
         avatar = {
           <Avatar src={photo.url}
           className={classes.avatarIcon}>
           </Avatar>
         }
         
         title="Name"
       />
        <ModalImage
         small={photo.url}
          large={photo.url}
          alt={photo.title}
/>
      
        
       <CardContent>
         
         <Typography component="p">
           Here are the demo photos. 
         </Typography>
       </CardContent>
       <Grid>
         
       <Comment data={photo.url}/> 
       </Grid>

       </Card>
       <br/> <br/>

   </center>
        )
      })}
      
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);


  
               
