// import { actionTypes } from 'react-redux-form'
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const addComment = (dishId, rating, author, comment) => ({
   type: ActionTypes.ADD_COMMENT,
   payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
   }
})
// dishes section

export const fetchDishes = () => (dispatch) => {
   dispatch(dishesLoading(true))
   
   return fetch(baseUrl + 'dishes')
   .then(response => {
      if(response.ok) {
         return response;
      } else {
         var error = new Error('Error' + response.status + ': ' + response.statusText)
         error.response = response;
         throw error;
      }
   },
   error => {
      var errmess = new Error(error.message);
      throw errmess;
   })
      .then(response => response.json())
      .then(dishes => dispatch(addDishes(dishes)))
   .catch(error => dispatch(dishesFailed(error.message)))
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

// fetch comments section 
export const fetchComments = () => (dispatch) => {
   return fetch(baseUrl + 'comments')
   
   .then(response => {
      if(response.ok) {
         return response;
      } else {
         var error = new Error('Error' + response.status + ': ' + response.statusText)
         error.response = response;
         throw error;
      }
   },
   error => {
      var errmess = new Error(error.message);
      throw errmess;
   })
   .catch(error => dispatch(commentsFailed(error.message)))


      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)))
}

export const commentsFailed = (errmess) => ({
   type: ActionTypes.FAILED_COMMENTS,
   payload: errmess
})

export const addComments = (comments) => ({
   type: ActionTypes.ADD_COMMENTS,
   payload: comments
})

// fetch promos section

export const fetchPromos = () => (dispatch) => {
   dispatch(promosLoading(true))

   return fetch(baseUrl + 'promotions')

   .then(response => {
      if(response.ok) {
         return response;
      } else {
         var error = new Error('Error' + response.status + ': ' + response.statusText)
         error.response = response;
         throw error;
      }
   },
   error => {
      var errmess = new Error(error.message);
      throw errmess;
   })
   .catch(error => dispatch(promosFailed(error.message)))


      .then(response => response.json())
      .then(promos => dispatch(addPromos(promos)))
}

export const promosLoading = () => ({
   type: ActionTypes.LOADING_PROMOS
})

export const promosFailed = (errmess) => ({
   type: ActionTypes.FAILED_PROMOS,
   payload: errmess
})

export const addPromos = (promos) => ({
   type: ActionTypes.ADD_PROMOS,
   payload: promos
})