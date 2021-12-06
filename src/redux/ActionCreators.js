// import { actionTypes } from 'react-redux-form'
import * as ActionTypes from './ActionTypes'
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
   type: ActionTypes.ADD_COMMENT,
   payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
   }

})

export const fetchDishes = () => (dispatch) => {
   dispatch(dishesLoading(true))
   
   setTimeout(() => {
      dispatch(addDishes(DISHES));
   }, 2000)
}

export const dishesLoading = () => ({
   type: ActionTypes.LOADING_DISHES
})

export const dishesFailed = (errmess) => ({
   type: ActionTypes.FAILED_DISHES,
   payload: errmess
})

export const addDishes = (dishes) => ({
   type: ActionTypes.ADD_DISHES,
   payload: dishes
})