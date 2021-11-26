import React, { Component } from 'react'
import Home from './HomeComponents'
import Header from './HeaderComponent'
import Contact from './ContactComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponents'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import { Switch, Route, Redirect } from 'react-router-dom' 
import About from './AboutComponent'

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      }
  }
  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }

    return (
      <div >
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={About} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
	      {/* <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDisheSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } /> */}
        <Footer />
      </div>
    );
  }
}
// component={() => <About leaders={this.props.leaders} />}
export default Main;
