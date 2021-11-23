import React, { Component } from 'react';
import Home from './HomeComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponents';
// import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom'

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
    const HomePage = () => {
      return(
        <Home />
      )
    }
    return (
      <div >
        
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
	      {/* <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDisheSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
