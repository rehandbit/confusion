import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    }
  }
  onDisheSelect(dishId) {
   this.setState ({ selectedDish: dishId  })
}

  render() {
    return (
      <div >
        
        <Header />
	      <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDisheSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
        <Footer />
      </div>
    );
  }
}

export default Main;
