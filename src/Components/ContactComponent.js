import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,  Col, Row,  Label, Button } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) =>!(val) || (val.length <= len);
const minLenght = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    class  Contact extends Component {
        constructor(props) {
            super(props)

            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleSubmit(values) {
            console.log("Current State is :" + JSON.stringify(values));
            alert("Current State is :"  + JSON.stringify(values));
            this.props.resetFeedbackForm();
        }

        render() {
           
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                                BTM Layout<br />
                                Bangalore<br />
                                Karnataka<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +91 7204048170<br />
                                <i className="fa fa-envelope"></i>: <a href="/">rayhanfaraz@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form model="feedback"  onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text className="form-control" model=".firstName" id="firstName" name="firstName" placeholder="First Name" validators={{required, minLenght: minLenght(3), maxLength: maxLength(15)}}/>
                                        <Errors className="text-danger" model=".firstName" show="touched" messages={{reuired: 'Required',minLenght: 'Must be greater than 2 characters', maxLength: 'must be 15 characters or less'}} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text className="form-control" model=".lastName" id="lastName" name="lastName" placeholder="Last Name" validators={{required, minLenght: minLenght(3), maxLength: maxLength(15)}}/>
                                        <Errors className="text-danger" model=".lastName" show="touched" messages={{reuired: 'Required',minLenght: 'Must be greater than 2 characters', maxLength: 'must be 15 characters or less'}} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="telNum" md={2}>Telephone No.</Label>
                                    <Col md={10}>
                                        <Control.text className="form-control" model=".telNum" id="telNum" name="telNum" placeholder="Telephone No." validators={{required, minLenght: minLenght(10), maxLength: maxLength(13), isNumber}} />
                                        <Errors className="text-danger" model=".telNum" show="touched" messages={{reuired: 'Required',minLenght: 'Must be greater than 2 characters', maxLength: 'must be 15 characters or less', isNumber: 'must be 10 number'}} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text className="form-control" model=".email" id="email" name="email" placeholder="Email"  validators={{required, validEmail}}/>
                                    </Col> <Errors className="text-danger" model=".email" show="touched" messages={{required: 'Required', validEmail: 'Invalid Email Address'}} />

                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox className="form-check-in" model=".agree" name="agree" /> {' '} 
                                                <strong>
                                                    May be Contact you?
                                                </strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size: 3, offset: 1}}>
                                        <Control.select className="form-control" model=".contactType" name="contactType" >
                                            <option>Tel No.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea className="form-control" model=".message" id="message" name="message" rows="10" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default Contact;