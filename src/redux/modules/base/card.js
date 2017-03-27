import firebase from 'firebase';
import {CARD_FETCH} from './actionTypes';

export function fetchCards(){
     const Card = firebase
    .database()
    .ref('card')

  return dispatch => {
    Card.on('value', snap => {
      dispatch({
        type: CARD_FETCH,
        payload: snap.val()
      });
    });
  }
}