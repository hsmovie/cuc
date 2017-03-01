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
    const key = Math.floor((Math.random() * 10000000000));
 return dispatch => firebase.database().ref('rsvp').child(key).set(data);
}

export function deleteRsvp(key) {
  return dispatch => firebase.database().ref().child('rsvp').child(key).remove();
}

