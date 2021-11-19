import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Container, Row, Col} from 'reactstrap';
import DishDetail from './DishdetailComponent';




class MenuComponents extends Component {
		constructor(props) {
				super(props); 

				this.state = {
						selectedDish: null
					}
					//this.state.dished = this.state.dished.bind(this)
				}
			onDisheSelect(dish) {
				this.setState ({ selectedDish: dish  })
			}	
			renderDish(dish) {
				
				// console.log('render called');
				if(dish != null) {
					const listItems = dish.comments.map((i)=>
					<div >
						<ul className="list-unstyled">
							<li>
								<p>{i.comment}</p>
								<p>-- {i.author} {i.date}</p>
							</li>
						</ul>
					</div>
					)

					return(
					
						<Container>
  							<Row>
								<Col>	
									<Card>
										<CardImg width="100%" object src={dish.image} alt={dish.name} />
										<CardBody>
											<CardTitle>{dish.name}</CardTitle>
											<CardText>{dish.description}</CardText>
											<CardText>{dish.price}</CardText>
											{/* <CardText>{dish.comments[0].comment}</CardText> */}
										</CardBody> 
									</Card>
								</Col>
								<Col>
									<CardBody>
										<h4>Comments</h4>
										<p>{listItems}</p>
									</CardBody>
								</Col>
							</Row>
						</Container>
						
					)
				} else {
					return(
						<div></div>
					)}}
		
		render() {
				const menu = this.props.dishes.map((dish) => {
					return (
							<div key={dish.id} className="col-12 col-md-5 m-1">
								<Card onClick={ ()=> this.onDisheSelect(dish) }>
									
										<CardImg width="100%" object src={dish.image} alt={dish.name} />
									
									<CardImgOverlay body className="ml-5" >
										<CardTitle heading>{dish.name}</CardTitle>
										
										
									</CardImgOverlay>
								</Card>
							</div> 
					);
				});
				
				return (
					<div className="container" >
						<div className="row" >
							{menu}
						</div>
						<div className="col-md-10 m-4">
							<Card >
								{this.renderDish(this.state.selectedDish)}
								
								
							</Card>
						</div>
					</div>
				);
		}
	}


export default MenuComponents;
