import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,  Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';


    class  Contact extends Component {
        constructor(props) {
            super(props)

            this.state = {
                firstName: '',
                lastName: '',
                telNum: '',
                email: '',
                agree: false,
                contactType: 'Tel.',
                message: ''
            }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleInputChange = this.handleInputChange.bind(this)
            
        }

        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState ({
                [name] : value
            })

        }

        handleSubmit(event) {
            console.log("Current State is :" + JSON.stringify(this.state));
            alert("Current State is :"  + JSON.stringify(this.state));
            event.preventDefault(); 
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
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}  onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telNum" md={2}>Telephone No.</Label>
                                    <Col md={10}>
                                        <Input type="text" id="telNum" name="telNum" placeholder="Telephone No." value={this.state.telNum} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 6, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' '} 
                                                <strong>
                                                    May be Contact you?
                                                </strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size: 3, offset: 1}}>
                                        <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                            <option>tel No.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="message" row="12"  value={this.state.message} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
}

export default Contact;