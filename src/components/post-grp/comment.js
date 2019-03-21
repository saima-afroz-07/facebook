import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import {
    Form,
    Col,
    FormGroup,
    Button,
    Alert,
    Input,
    Row,
} from 'reactstrap';

export default class Comment extends React.Component {
    
  constructor(props) {
        super(props)
        this.state = {
            comments: [],
            value:''

        }
    }
  addComment() {
    
        const comment =this.state.value;
        if(comment) {
          
            this.setState(prev => ({
                comments: prev.comments.concat(comment),
                value: ''
            }))

          }
        console.log(this.state)
        
    }

    deleteComment(comment) {
        console.log(comment);
        
        var array = [...this.state.comments]; 
        var index = array.indexOf(comment);
        array.splice(index, 1);
        this.setState({comments: array});
    }
    
    onchangeinput(event) {
      this.setState({value : event});
    }
    

    render() {
     return (
      <div>
       <Form>
        <FormGroup row>
                     
         <Col sm={10}>
         <Row>
         <Col>
          <Input value={this.state.value} onChange={event => this.onchangeinput(event.target.value)} style={{marginLeft: "10px"}}  type='text' placeholder='Write a comment'/>
         </Col>
         <Col sm={3}>
          <Button  style={{backgroundColor: "#2f55a4" }} onClick={() => this.addComment()}>Post</Button>
         </Col>
        </Row>
        </Col>
        </FormGroup>
        <FormGroup row>
        <Col>
         {this.state.comments.map((comment) => 
       <Row>
        <Col xs="auto" >
      <Avatar className="styles" style={{marginLeft: "10px",}} src={this.props.data} />
      </Col>
      <Col xs="auto" style={{paddingLeft:"0px"}}>
      <Alert style={{color:"Black", padding: ".05rem .25rem", marginTop:"6px", borderRadius:"1.5rem", fontSize:"90%"}} color="primary" key={comment} isOpen={true}>{comment}</Alert>
      
      </Col>

          <Col className="text-center text-md-right" >
          <Button close style={{backgroundColor: "white", marginRight: "15px", marginTop: "5px"}} onClick={() => this.deleteComment(comment)}></Button>
          </Col>

      </Row>
                            
      )}
    </Col>
   </FormGroup>
    </Form> 
                
     </div>
    )
  }
}


