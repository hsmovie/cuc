import firebase from 'firebase';
import _ from 'lodash';
import * as types from './actionTypes'

export function fetchRsvps() {
    const Rsvp = firebase.database().ref().child('rsvp');
  return dispatch => {
    Rsvp.on('value', snapshot => {
      dispatch({
        type: types.RSVP_FETCH,
        payload: snapshot.val()
      });
    });
  };
}


export function createRsvp(data) {
 return dispatch => firebase.database().ref('rsvp').child(Date.now()).set(data);
}

export function deleteRsvp(key) {
  return dispatch => firebase.database().ref().child('rsvp').child(key).remove();
}



