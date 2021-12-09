import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) =>!(val) || (val.length <= len);
const minLenght = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                
                isModalOpen: false
            }
            this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
   
    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-lg fa-pencil">
                    </span>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                            <Row className="form-group">
                                <Col>
                                    <Label >Rating</Label>
                                    <Control.select className="form-control" model=".rating" id="rating" name="rating" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                        <Row className="form-group">
                                <Col>
                                    <Label>Your Name</Label>
                                    <Control.text className="form-control" model=".author" id="author" name="author" placeholder="Your Name" validators={{required, minLenght: minLenght(3), maxLength: maxLength(15)}} />
                                    <Errors className="text-danger" model=".author" show="touched" messages={{reuired: 'Required',minLenght: 'Must be greater than 2 characters', maxLength: 'must be 15 characters or less'}} />
                                </Col>
                        </Row>
                        <Row className="form-group">
                                <Col>
                                    <Label>Comment</Label>
                                    <Control.textarea className="form-control" model=".comment" id="comment" name="comment" placeholder="Type your comments here !" rows="8" /> 
                                </Col>
                        </Row>
                        <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
    function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardTitle>{dish.description}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    function RenderComments({comments ,postComment, dishId}) {
        if(comments != null) 
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comments.id} >
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date))) }</p>
                            </li>
                        )
                    })}
                </ul>
               <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        )
        else
        return(
            <div></div>
        )
    }


    const DishDetail = (props) => {
        if(props.isLoading) {
            return(
                <div className="container" >
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        } else if(props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        } else if (props.dish != null) 
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                       <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} 
                        postComment={props.postComment} 
                        dishId={props.dish.id} />
                </div>
            </div>
        )
        else
        return(
            <div></div>
        )
    }

export default DishDetail;