import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'


class DishDetail extends Component {
   constructor(props){
      super(props)
      this.state = {
         selectedDish: null
      }
   }

   renderDish({dish}) {
				// console.log('render called');
      if(dish != null) {
         const listItems = dish.comments.map((i)=>
         <div className="col-md-12 col-12  m-1">
            <ul className="list-unstyled">
               <p>{i.comment}</p>
               <p>-- {i.author} {i.date}</p>
            </ul>
         </div>
         )

         return(
            <div className="col-12 col-md-5 m-1">
               <Card>
                  <div className="m-1">
                     <CardImg width="100%" object src={dish.image} alt={dish.name} />
                     <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        <CardText>{dish.price}</CardText>
                        {/* <CardText>{dish.comments[0].comment}</CardText> */}
                     </CardBody> 
                  </div>
               </Card>
               <div className="row m-1">
                  <Card>
                     <h4>Comments</h4>
                     <CardText className="row" >{listItems}</CardText>
                  </Card>
               </div>
            </div>
         )
      } else {
         return(<div></div>)}}

   renderComments(comments) {
      const listItems = comments.comments.map((i) => {
         <div>
            <p>{i.comment}</p>
            <p>-- {i.author} {i.date}</p>
         </div>
      })
      if(comments != null)
      return(
         <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
               {listItems}
            </ul>
         </div>
      )
   }
   render() {
      return (<div></div>)}}

export default DishDetail;