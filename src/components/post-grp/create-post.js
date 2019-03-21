import React from 'react'
import {Col,Button,Input,Row} from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import  Divider  from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Comment from './comment'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    avatarIcon: {
      marginLeft: 10,
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

 class CreatePost extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            value: ''
        }
        
    }
    onchangeinput(event) {
        this.setState({value : event});
      }

      addPost(){
        const post = this.state.value
        this.setState(prev => ({
            posts: [post, ...prev.posts],
            value: ''
        }))
      }

      deletePost(post) {
        
        var array = [...this.state.posts]; 
        var index = array.indexOf(post);
        array.splice(index, 1);
        this.setState({posts: array});
    }
    

    render(){
        const { classes } = this.props;
        return(
            <div>
                
         <Card style={{textAlign: "left"}} className={classes.card}>

         <CardContent>
             <Row style={{paddingLeft: "10px"}}>
                 <b>Create Post</b>
             </Row>
             <Divider />
             <br/>
         <Row>   
          <Col sm={2}>
                    
         <Avatar src="https://www.maxpixel.net/static/photo/1x/Bloom-Blossom-Water-Lily-Red-Flowers-Flower-1442497.jpg"
         className={classes.avatarIcon}>
         </Avatar>
        </Col>

         <Col sm={6}>
          
          <Input value={this.state.value} onChange={event => this.onchangeinput(event.target.value)} style={{marginLeft: "10px", fontSize: "90%"}}  type='text' placeholder='Write something here...'/>
         </Col>
         <Col sm={2}>
          <Button  style={{backgroundColor: "#2f55a4" }} onClick={() => this.addPost()}>Post</Button>
         </Col>
        </Row>
        </CardContent>
        </Card>

        <br/><br/>

        <div >
           <Col>
           {this.state.posts.map( post => {
               return (
               <center>
          
               <Card style={{textAlign: "left"}} className={classes.card}>
      
               <CardContent>   
                   <Row>    
            
          
                 <Col>
                
                 <Avatar src="https://www.maxpixel.net/static/photo/1x/Bloom-Blossom-Water-Lily-Red-Flowers-Flower-1442497.jpg"
                 className={classes.avatarIcon}>
                 </Avatar>
               
                 </Col>
                 <Col className="text-center text-md-right" >
          <Button close style={{backgroundColor: "white", marginRight: "15px", marginTop: "5px"}} onClick={() => this.deletePost(post)}></Button>
          </Col>
               
               
               </Row>
                
               <Typography style={{paddingTop: "10px"}} component="p">
                 {post}
               </Typography>
             </CardContent>
             <Grid>
               
             <Comment /> 
             </Grid>
      
             </Card>
             <br/> <br/>
      
         </center>
               )
           })}
           </Col> 
        </div>
            </div>
        )
    }
}

CreatePost.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CreatePost);
